# Contributing to Crisli Picker

Thank you for your interest in contributing to Crisli Picker! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm
- Git

### Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/crisli-picker.git
   cd crisli-picker
   ```

3. Install dependencies:
   ```bash
   npm install
   cd demo && npm install && cd ..
   ```

4. Start development:
   ```bash
   npm run dev
   ```

## 🛠 Development Workflow

### Available Scripts

- `npm run dev` - Start development (library + demo)
- `npm run build` - Build the library
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate coverage report
- `npm run lint` - Lint code
- `npm run lint:fix` - Fix linting issues
- `npm run format` - Format code with Prettier
- `npm run type-check` - Check TypeScript definitions

### Project Structure

```
src/
├── components/     # React components
├── types/         # TypeScript definitions
└── index.js       # Main entry point

demo/              # Vite demo application
├── src/
│   ├── components/
│   ├── pages/
│   └── App.jsx

tests/             # Test files
└── components/
```

## 📝 Coding Standards

### Code Style

- Use Prettier for formatting (runs automatically on commit)
- Follow ESLint rules
- Use meaningful variable and function names
- Add JSDoc comments for public APIs

### Component Guidelines

- Keep components focused and single-purpose
- Use React hooks appropriately
- Handle edge cases (null values, invalid dates)
- Support both light and dark themes
- Ensure mobile responsiveness

### Testing

- Write tests for new features
- Maintain test coverage above 80%
- Test user interactions and edge cases
- Use React Testing Library best practices

## 🔄 Pull Request Process

1. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**:
   - Write code following our standards
   - Add tests for new functionality
   - Update documentation if needed

3. **Test your changes**:
   ```bash
   npm run test
   npm run lint
   npm run type-check
   npm run build
   ```

4. **Commit your changes**:
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

5. **Push and create PR**:
   ```bash
   git push origin feature/your-feature-name
   ```

### Commit Message Format

We use conventional commits:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Test additions/changes
- `chore:` - Build process or auxiliary tool changes

## 🐛 Reporting Issues

When reporting issues, please include:

- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Environment details (OS, browser, React version)
- Code example demonstrating the issue

## 💡 Feature Requests

For feature requests, please:

- Describe the use case
- Explain why it would be valuable
- Provide examples of how it might work
- Consider backward compatibility

## 📚 Documentation

- Update README.md for new features
- Add TypeScript definitions for new props
- Include code examples in demos
- Update API documentation

## 🎯 Areas for Contribution

We welcome contributions in these areas:

- **Bug fixes** - Help us squash bugs
- **New components** - Additional picker variants
- **Accessibility** - Improve a11y support
- **Performance** - Optimize rendering and interactions
- **Documentation** - Improve guides and examples
- **Testing** - Increase test coverage
- **Internationalization** - Add i18n support

## ❓ Questions?

- Open an issue for questions about contributing
- Check existing issues and PRs first
- Be respectful and constructive in discussions

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Crisli Picker! 🎉
