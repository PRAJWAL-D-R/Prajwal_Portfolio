# Contributing to Prajwal D R Portfolio

Thank you for your interest in contributing to the Prajwal D R Portfolio project! 🎉

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Pull Request Process](#pull-request-process)
- [Issue Guidelines](#issue-guidelines)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

### Our Pledge

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on what's best for the community
- Show empathy towards other community members

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (preferred) or npm
- Git

### Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/prajwal-dr-portfolio.git
   cd prajwal-dr-portfolio
   ```

3. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   ```

4. Start the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔄 Development Process

### Branch Naming

- `feature/description` - New features
- `bugfix/description` - Bug fixes
- `hotfix/description` - Critical bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring

### Workflow

1. Create a new branch from `main`
2. Make your changes
3. Test your changes
4. Commit your changes
5. Push to your fork
6. Create a Pull Request

## 🔀 Pull Request Process

### Before Submitting

- [ ] Code follows the project's style guidelines
- [ ] Self-review of your code has been performed
- [ ] Code has been commented, particularly in hard-to-understand areas
- [ ] Corresponding changes to documentation have been made
- [ ] Changes generate no new warnings
- [ ] Tests have been added that prove your fix is effective or that your feature works
- [ ] New and existing unit tests pass locally with your changes

### PR Template

Please use the provided PR template when creating pull requests. It includes:
- Description of changes
- Type of change
- Testing information
- Screenshots (if applicable)
- Checklist

## 🐛 Issue Guidelines

### Before Creating an Issue

1. Search existing issues to avoid duplicates
2. Check if the issue has been fixed in the latest version
3. Gather all necessary information

### Issue Types

- **Bug Report**: Use the bug report template
- **Feature Request**: Use the feature request template
- **Question**: Use the question template

## 📝 Coding Standards

### TypeScript/JavaScript

- Use TypeScript for all new code
- Follow ESLint configuration
- Use meaningful variable and function names
- Add JSDoc comments for complex functions
- Prefer const over let, avoid var

### React/Next.js

- Use functional components with hooks
- Follow Next.js best practices
- Use proper TypeScript types
- Implement proper error boundaries
- Optimize for performance

### CSS/Styling

- Use Tailwind CSS for styling
- Follow mobile-first approach
- Ensure responsive design
- Use CSS modules when needed
- Follow BEM methodology for custom CSS

### File Organization

```
components/
  ├── ui/           # Reusable UI components
  ├── layout/       # Layout components
  └── features/     # Feature-specific components

pages/
  ├── api/          # API routes
  └── ...           # Page components

styles/
  ├── global.css    # Global styles
  └── ...           # Component-specific styles
```

## 📋 Commit Message Guidelines

### Format

```
type(scope): description

[optional body]

[optional footer]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```
feat(header): add dark mode toggle
fix(api): resolve authentication issue
docs(readme): update installation instructions
style(components): format code with prettier
refactor(utils): simplify data processing logic
test(components): add unit tests for Button component
chore(deps): update dependencies
```

## 🧪 Testing

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

### Writing Tests

- Write unit tests for utility functions
- Write integration tests for API routes
- Write component tests for React components
- Aim for high test coverage
- Use descriptive test names

## 📚 Documentation

- Update README.md for significant changes
- Add JSDoc comments for complex functions
- Update API documentation when needed
- Include examples in documentation

## 🎯 Getting Help

- Check existing issues and discussions
- Join our community discussions
- Contact the maintainer: [Prajwal D R](mailto:prajwal@example.com)

## 🙏 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

---

**Thank you for contributing to Prajwal D R Portfolio!** 🎉

**Maintainer:** Prajwal D R  
**Last Updated:** $(date)
