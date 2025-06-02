import React, { useRef, useEffect, useState } from 'react';

/**
 * Wheel component for the picker - completely rewritten for better compatibility
 *
 * @param {Object} props - Component props
 * @param {Array} props.items - Array of items to display in the wheel
 * @param {any} props.value - Currently selected value
 * @param {Function} props.onChange - Callback when value changes
 * @param {number} props.itemHeight - Height of each item in pixels
 * @param {string} props.fontSize - Font size for the items
 * @param {string} props.fontWeight - Font weight for the items
 * @param {string} props.textColor - Text color for the items
 * @param {string} props.selectedTextColor - Text color for the selected item
 * @param {string} props.highlightColor - Background color for the selected item highlight
 */
const Wheel = ({
  items,
  value,
  onChange,
  itemHeight = 40,
  fontSize = '16px',
  fontWeight = '400',
  textColor = '#666',
  selectedTextColor = '#000',
  highlightColor = 'rgba(0, 0, 0, 0.05)',
  highlightBorderColor = 'rgba(0, 0, 0, 0.1)'
}) => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startTranslateY, setStartTranslateY] = useState(0);
  const [animating, setAnimating] = useState(false);

  // Initialize with the correct index based on value
  useEffect(() => {
    const index = items.findIndex(item => item.value === value);
    if (index !== -1) {
      setCurrentIndex(index);
      setTranslateY(-index * itemHeight);
    }
  }, [items, value, itemHeight]);

  // Wheel scroll state tracking
  const wheelState = useRef({
    // Accumulated delta for small movements
    accumulator: 0,
    // Track continuous scrolling
    lastScrollTime: 0,
    // Track scroll velocity
    velocity: 0,
    // Last scroll position
    lastY: 0,
    // Timeout for continuous scrolling
    continuousTimeout: null,
    // Is a continuous scroll in progress
    isContinuousScrolling: false,
    // Target position for continuous scrolling
    targetPosition: 0,
    // Animation frame for continuous scrolling
    animationFrame: null
  });

  // Handle wheel scroll with mobile-like behavior
  const handleWheel = (e) => {
    e.preventDefault();

    // Stop any ongoing continuous scrolling
    if (wheelState.current.animationFrame) {
      cancelAnimationFrame(wheelState.current.animationFrame);
      wheelState.current.animationFrame = null;
    }

    // Clear any pending timeout
    if (wheelState.current.continuousTimeout) {
      clearTimeout(wheelState.current.continuousTimeout);
    }

    // Determine scroll direction and speed
    const delta = e.deltaY || e.detail || e.wheelDelta;
    const now = Date.now();

    // Track scroll direction for consistency
    if (Math.abs(delta) > 1) {
      scrollDirection.current = delta > 0 ? 1 : -1;
    }

    // Accumulate delta for small movements
    wheelState.current.accumulator += delta;

    // Calculate velocity (pixels per ms)
    const elapsed = now - wheelState.current.lastScrollTime;
    if (elapsed > 0) {
      // Use a weighted average to smooth velocity
      const instantVelocity = delta / elapsed;
      wheelState.current.velocity = wheelState.current.velocity * 0.7 + instantVelocity * 0.3;
    }

    // Update tracking
    wheelState.current.lastScrollTime = now;

    // Threshold for movement - extremely low for immediate response
    const isMagicMouse = Math.abs(delta) < 10;
    const threshold = isMagicMouse ? 5 : 2;

    // If we haven't accumulated enough movement, wait for more
    if (Math.abs(wheelState.current.accumulator) < threshold) {
      return;
    }

    // Calculate how much to move based on accumulated delta
    // Fast but controlled response
    const moveAmount = wheelState.current.accumulator / (isMagicMouse ? 5 : 8);

    // Calculate new position
    const newY = translateY - moveAmount;

    // Apply the movement directly - this creates the feeling of following the wheel
    setTranslateY(newY);

    // Update visual index but don't call onChange yet
    const nearestIndex = Math.round(-newY / itemHeight);
    const clampedIndex = Math.max(0, Math.min(items.length - 1, nearestIndex));
    if (clampedIndex !== currentIndex) {
      setCurrentIndex(clampedIndex);
    }

    // Reset accumulator but keep some residual for direction
    const direction = wheelState.current.accumulator > 0 ? 1 : -1;
    wheelState.current.accumulator = direction * 5;

    // Store last position
    wheelState.current.lastY = newY;

    // Set up continuous scrolling detection
    wheelState.current.continuousTimeout = setTimeout(() => {
      // When scrolling stops, apply momentum and snap to nearest
      handleWheelEnd();
    }, 100); // Wait 100ms of no scroll events before considering scrolling done
  };

  // Track the direction of scrolling
  const scrollDirection = useRef(0); // 1 for down, -1 for up, 0 for none

  // Handle the end of wheel scrolling - apply momentum and snap
  const handleWheelEnd = () => {
    // Get the current nearest index based on position
    const currentNearestIndex = Math.round(-translateY / itemHeight);

    // Apply momentum based on velocity, but more moderately
    const velocity = wheelState.current.velocity;
    const momentum = velocity * 800; // More moderate momentum

    // Determine scroll direction from velocity
    if (Math.abs(velocity) > 0.01) {
      scrollDirection.current = velocity > 0 ? 1 : -1;
    }

    // Predict final position with momentum
    const predictedY = translateY + momentum;

    // Calculate target index
    const momentumIndex = Math.round(-predictedY / itemHeight);

    // CRITICAL FIX: Never go backwards against the scroll direction
    // This prevents the wheel from going back to previous values
    let targetIndex;

    if (Math.abs(velocity) < 0.05) {
      // If barely moving, just use current position
      targetIndex = currentNearestIndex;
    } else {
      // Check if momentum would cause a reversal against scroll direction
      const wouldGoBackwards = (scrollDirection.current > 0 && momentumIndex < currentNearestIndex) ||
                              (scrollDirection.current < 0 && momentumIndex > currentNearestIndex);

      if (wouldGoBackwards) {
        // If it would go backwards, just use current position
        targetIndex = currentNearestIndex;
      } else {
        // Otherwise use momentum-based position
        targetIndex = momentumIndex;
      }
    }

    // Clamp to valid range
    const clampedIndex = Math.max(0, Math.min(items.length - 1, targetIndex));

    // Calculate animation duration based on distance
    const distance = Math.abs(clampedIndex - currentIndex);

    // Shorter duration for more responsive feel
    const duration = Math.min(300, 150 + distance * 30);

    // Animate to final position
    animateToIndex(clampedIndex, duration);

    // Update the value
    if (items[clampedIndex]?.value !== value) {
      onChange(items[clampedIndex]?.value);
    }

    // Reset velocity
    wheelState.current.velocity = 0;
  };

  // Handle mouse/touch down
  const handleStart = (e) => {
    if (animating) return;

    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    setIsDragging(true);
    setStartY(clientY);
    setStartTranslateY(translateY);

    // Initialize velocity tracking
    velocityTracker.current = {
      lastY: translateY,
      lastTime: Date.now(),
      velocity: 0
    };

    // Prevent default only for mouse to allow touch scrolling initially
    if (!e.touches) {
      e.preventDefault();
    }
  };

  // Handle mouse/touch move with true mobile-like behavior
  const handleMove = (e) => {
    if (!isDragging) return;

    // Now prevent default for both mouse and touch to prevent page scrolling
    e.preventDefault();

    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const deltaY = clientY - startY;

    // Calculate new position with bounds checking
    let newTranslateY = startTranslateY + deltaY;
    const maxTranslateY = 0;
    const minTranslateY = -(items.length - 1) * itemHeight;

    // Apply much less elastic resistance when dragging beyond bounds
    // This makes it easier to select items at the edges
    if (newTranslateY > maxTranslateY) {
      newTranslateY = maxTranslateY + (newTranslateY - maxTranslateY) * 0.5;
    } else if (newTranslateY < minTranslateY) {
      newTranslateY = minTranslateY + (newTranslateY - minTranslateY) * 0.5;
    }

    // Track velocity for momentum scrolling
    updateVelocity(newTranslateY);

    // Apply the new position - don't block this even during animation
    setTranslateY(newTranslateY);

    // Update current index during drag for visual feedback, but DON'T call onChange yet
    // This is key to the mobile-like behavior - only update the value on release
    const nearestIndex = Math.round(-newTranslateY / itemHeight);
    const clampedIndex = Math.max(0, Math.min(items.length - 1, nearestIndex));

    if (clampedIndex !== currentIndex) {
      setCurrentIndex(clampedIndex);
      // We don't call onChange here - this makes it feel like it's just following your finger
    }
  };

  // Track velocity for momentum scrolling
  const velocityTracker = useRef({ lastY: 0, lastTime: 0, velocity: 0 });

  // No longer needed - using wheelState instead

  // Update velocity tracking
  const updateVelocity = (y) => {
    const now = Date.now();
    const elapsed = now - velocityTracker.current.lastTime;

    if (elapsed > 0) {
      const delta = y - velocityTracker.current.lastY;
      velocityTracker.current.velocity = delta / elapsed; // pixels per ms
      velocityTracker.current.lastY = y;
      velocityTracker.current.lastTime = now;
    }
  };

  // Handle mouse/touch up with true mobile-like behavior
  const handleEnd = () => {
    if (!isDragging) return;

    setIsDragging(false);

    // Get current velocity (pixels per ms)
    const velocity = velocityTracker.current.velocity;

    // Apply momentum - predict where the scroll would end
    // Use a more natural momentum calculation like iOS
    const momentum = velocity * 600; // Higher multiplier for more natural momentum
    const predictedTranslateY = translateY + momentum;

    // Calculate index with momentum
    const momentumIndex = Math.round(-predictedTranslateY / itemHeight);

    // Clamp to valid range
    const clampedIndex = Math.max(0, Math.min(items.length - 1, momentumIndex));

    // Calculate animation duration based on distance and velocity
    // This creates the natural feel of iOS momentum scrolling
    const distance = Math.abs(clampedIndex - currentIndex);
    const speed = Math.abs(velocity) * 1000; // Convert to pixels per second

    // Longer duration for more distance, shorter for faster flicks
    // This creates a very natural feel
    let duration;
    if (distance <= 1) {
      // For small movements, use a fixed short duration
      duration = 300;
    } else {
      // For longer distances, scale duration with distance but cap it
      duration = Math.min(500, Math.max(300, 300 + distance * 50 - speed * 0.2));
    }

    // Animate to the target index
    animateToIndex(clampedIndex, duration);

    // Now call onChange with the final value
    if (items[clampedIndex]?.value !== value) {
      onChange(items[clampedIndex]?.value);
    }

    // Reset velocity tracker
    velocityTracker.current.velocity = 0;
  };

  // Handle direct item click
  const handleItemClick = (index) => {
    if (animating) return;
    animateToIndex(index);
  };

  // Smooth mobile-like animation without bounce
  const animateToIndex = (index, customDuration) => {
    if (index === currentIndex && Math.abs(translateY - (-index * itemHeight)) < 2) {
      return;
    }

    // Allow new animations to interrupt ongoing ones for better responsiveness
    setAnimating(true);

    const targetY = -index * itemHeight;
    const startY = translateY;
    const distance = targetY - startY;

    // Use custom duration if provided, otherwise calculate based on distance
    // Shorter duration for closer items, longer for farther items
    const defaultDuration = Math.min(300, 150 + Math.abs(index - currentIndex) * 30);
    const duration = customDuration || defaultDuration;

    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Mobile-like easing function - smooth deceleration without bounce
      // This mimics the smooth scrolling feel of iOS
      const easeProgress = 1 - Math.pow(1 - progress, 2);

      const newY = startY + distance * easeProgress;
      setTranslateY(newY);

      // Update current index during animation for better visual feedback
      // Do this earlier in the animation (30% instead of 50%) for more responsive feel
      if (progress > 0.3 && index !== currentIndex) {
        setCurrentIndex(index);

        // Call onChange during animation for more responsive feedback
        if (items[index]?.value !== value) {
          onChange(items[index]?.value);
        }
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Ensure we end exactly at the target position
        setTranslateY(targetY);
        setCurrentIndex(index);
        setAnimating(false);
      }
    };

    requestAnimationFrame(animate);
  };

  // Add and remove event listeners
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Add wheel event listener
    container.addEventListener('wheel', handleWheel, { passive: false });

    // Add mouse/touch event listeners
    container.addEventListener('mousedown', handleStart);
    container.addEventListener('touchstart', handleStart, { passive: true });

    // Add document-level move and end listeners
    const handleDocMove = (e) => handleMove(e);
    const handleDocEnd = () => handleEnd();

    document.addEventListener('mousemove', handleDocMove);
    document.addEventListener('touchmove', handleDocMove, { passive: false });
    document.addEventListener('mouseup', handleDocEnd);
    document.addEventListener('touchend', handleDocEnd);

    return () => {
      // Clean up all event listeners
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('mousedown', handleStart);
      container.removeEventListener('touchstart', handleStart);

      document.removeEventListener('mousemove', handleDocMove);
      document.removeEventListener('touchmove', handleDocMove);
      document.removeEventListener('mouseup', handleDocEnd);
      document.removeEventListener('touchend', handleDocEnd);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDragging, translateY, currentIndex, animating, itemHeight, items.length]);

  // Render all items with smooth mobile-like styling
  const renderItems = () => {
    return items.map((item, index) => {
      const offset = index * itemHeight;
      const posY = translateY + offset;

      // Only render items that are visible or close to being visible
      if (posY < -itemHeight * 3 || posY > itemHeight * 8) {
        return null;
      }

      const isSelected = index === currentIndex;

      // Calculate distance from center
      const distanceFromCenter = Math.abs(index - currentIndex);

      // Calculate opacity based on distance from center
      // Smoother fade for mobile-like feel
      const opacity = Math.max(0.3, 1 - (distanceFromCenter * 0.2));

      return (
        <div
          key={index}
          onClick={() => handleItemClick(index)}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: itemHeight,
            transform: `translateY(${posY}px)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: isSelected ? fontSize : '14px',
            fontWeight: isSelected ? '600' : fontWeight,
            color: isSelected ? selectedTextColor : textColor,
            opacity: opacity,
            cursor: 'pointer',
            userSelect: 'none',
            textAlign: 'center',
            paddingLeft: '10px',
            paddingRight: '10px',
            boxSizing: 'border-box',
            transition: isDragging ? 'none' : 'transform 0.15s ease-out, opacity 0.15s ease-out'
          }}
        >
          {item.label}
        </div>
      );
    });
  };

  return (
    <div
      ref={containerRef}
      className="crisli-wheel-container"
      style={{
        height: itemHeight * 5,
        overflow: 'hidden',
        position: 'relative',
        cursor: isDragging ? 'grabbing' : 'grab',
        touchAction: 'none'
      }}
    >
      {/* Highlight for the selected item */}
      <div className="crisli-wheel-highlight" style={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        height: itemHeight,
        width: '100%',
        backgroundColor: highlightColor,
        borderTop: `1px solid ${highlightBorderColor}`,
        borderBottom: `1px solid ${highlightBorderColor}`,
        pointerEvents: 'none',
        zIndex: 1,
        borderRadius: '4px'
      }} />

      {/* Gradient overlays for fading effect - theme aware */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: itemHeight * 2,
        background: selectedTextColor === '#ffffff'
          ? `linear-gradient(to bottom, rgba(30,30,30,0.95) 0%, rgba(30,30,30,0) 100%)`
          : `linear-gradient(to bottom, rgba(245,245,245,0.95) 0%, rgba(245,245,245,0) 100%)`,
        pointerEvents: 'none',
        zIndex: 2,
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px'
      }} />

      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: itemHeight * 2,
        background: selectedTextColor === '#ffffff'
          ? `linear-gradient(to top, rgba(30,30,30,0.95) 0%, rgba(30,30,30,0) 100%)`
          : `linear-gradient(to top, rgba(245,245,245,0.95) 0%, rgba(245,245,245,0) 100%)`,
        pointerEvents: 'none',
        zIndex: 2,
        borderBottomLeftRadius: '8px',
        borderBottomRightRadius: '8px'
      }} />

      {/* Items container */}
      <div style={{
        position: 'relative',
        height: '100%',
        transform: `translateY(${itemHeight * 2}px)` // Center the items
      }}>
        {renderItems()}
      </div>
    </div>
  );
};

export default Wheel;
