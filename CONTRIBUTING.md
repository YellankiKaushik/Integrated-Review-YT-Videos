# Contributing Guide

Thank you for interest in contributing to the Integrated Review of YouTube Videos project!

## Code of Conduct

- Be respectful and inclusive
- Focus on the code, not the person
- Help others learn and grow
- Report issues appropriately

---

## Getting Started

### 1. Fork the Repository
```bash
# Click "Fork" on GitHub
git clone https://github.com/YOUR_USERNAME/Integrated-Review-YT-Videos.git
cd Integrated-Review-YT-Videos
git remote add upstream https://github.com/YellankiKaushik/Integrated-Review-YT-Videos.git
```

### 2. Create Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### 3. Make Your Changes
- Write clear, descriptive commits
- Follow existing code style
- Add comments for complex logic
- Test your changes

### 4. Push and Create PR
```bash
git push origin feature/your-feature-name
```
Then create Pull Request on GitHub.

---

## Development Setup

### Backend Development
```bash
# Install dependencies
cd backend
py -3.11 -m pip install -r requirements.txt

# Run with debug mode
py -3.11 app.py

# Run tests (if any)
py -3.11 -m pytest
```

### Frontend Development
```bash
# Install dependencies
cd frontend
npm install

# Run dev server
npm run dev

# Run linter
npm run lint

# Build for production
npm run build
```

---

## Code Style

### Python (Backend)
- Follow PEP 8
- Use meaningful variable names
- Add docstrings to functions
- Use type hints where possible

Example:
```python
def analyze_sentiment(comments: list[str]) -> dict:
    """Analyze sentiment of comments.
    
    Args:
        comments: List of comment strings
        
    Returns:
        Dictionary with sentiment distribution
    """
    # Implementation
    pass
```

### TypeScript/React (Frontend)
- Use TypeScript for type safety
- Follow React best practices
- Use functional components with hooks
- Keep components small and reusable

Example:
```typescript
interface Props {
  videoId: string;
  onAnalyze: (result: AnalysisResult) => void;
}

export function VideoForm({ videoId, onAnalyze }: Props) {
  // Implementation
}
```

---

## Commit Messages

Use clear, descriptive commit messages:

```bash
# Good ✅
git commit -m "feat: Add real-time comment analysis"
git commit -m "fix: Handle API quota exceeded errors"
git commit -m "docs: Update deployment guide"
git commit -m "refactor: Modularize sentiment service"

# Bad ❌
git commit -m "update"
git commit -m "fix stuff"
git commit -m "changes"
```

### Format
```
<type>: <subject>

<body>

<footer>
```

**Types:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `refactor:` Code reorganization
- `style:` Formatting, missing semicolons
- `perf:` Performance improvements
- `test:` Adding tests

---

## Pull Request Process

### Before Submitting

1. **Sync with main branch**
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Test your changes**
   - Backend: Run app and test endpoints
   - Frontend: Test UI and functionality
   - Both: Test integration

3. **Update documentation**
   - Update README if adding features
   - Add inline code comments
   - Update relevant docs files

### PR Description Template

```markdown
## Description
Brief description of what this PR does.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## How Has This Been Tested?
Describe the tests you ran.

## Screenshots (if applicable)
Add screenshots for UI changes.

## Checklist
- [ ] Code follows style guidelines
- [ ] Documentation updated
- [ ] Tests pass
- [ ] No new warnings generated
```

---

## Issues and Bug Reports

### Reporting Bugs
Include:
- Clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Your environment (OS, Python version, etc.)

Example:
```markdown
## Bug: Video analysis fails for videos with many comments

### Steps to Reproduce
1. Enter URL of popular video with 10k+ comments
2. Click "Analyze"
3. Wait for processing

### Expected
Results display with sentiment analysis

### Actual
Error message: "API quota exceeded"

### Environment
- OS: Windows 11
- Python: 3.11.0
- Browser: Chrome 120
```

### Suggesting Features
Include:
- Clear description
- Use case and benefits
- Possible implementation approach
- Examples if applicable

---

## Architecture Guidelines

### Backend Changes
- Keep services focused (single responsibility)
- Update `app.py` imports if changing service structure
- Add error handling for API calls
- Document API changes
- Update requirements.txt if adding dependencies

### Frontend Changes
- Keep components reusable
- Use existing UI components from `components/ui/`
- Follow Next.js app directory structure
- Add proper TypeScript types
- Update relevant API integration

### Database/Persistence
- Currently stateless (no database)
- If adding persistence:
  - Discuss in issue first
  - Consider impact on deployment
  - Add migration guides

---

## Testing

### What to Test

**Backend:**
- ✅ API endpoints with valid input
- ✅ API endpoints with invalid input
- ✅ Error handling and edge cases
- ✅ API response format matches documentation

**Frontend:**
- ✅ Input validation works
- ✅ Loading states display correctly
- ✅ Results render properly
- ✅ Error messages show appropriately
- ✅ Mobile responsive

---

## Documentation

When adding/changing features:

1. **Update README.md** if:
   - Adding new features
   - Changing how to use the app
   - Updating tech stack

2. **Update API docs** if:
   - Adding new endpoints
   - Changing request/response format

3. **Update architecture docs** if:
   - Changing system design
   - Adding new services

4. **Add code comments** for:
   - Complex logic
   - Non-obvious decisions
   - Important calculations

---

## Performance Considerations

Before submitting:
- ✅ Check for unnecessary API calls
- ✅ Verify comment batching works
- ✅ Ensure error handling doesn't slow down
- ✅ Check frontend loads within 3s
- ✅ Verify database queries are efficient (if added)

---

## Security Considerations

- ✅ Never commit API keys
- ✅ Validate all user input
- ✅ Sanitize before displaying
- ✅ Use HTTPS in production
- ✅ Don't expose sensitive errors to users

---

## Getting Help

- **Questions?** Open a GitHub Discussion
- **Found a bug?** Open an Issue
- **Documentation unclear?** Submit a PR improving it
- **Need feedback?** Create a draft PR for review

---

## Review Process

### What Reviewers Look For
- ✅ Code quality and style
- ✅ Tests pass
- ✅ Documentation updated
- ✅ No breaking changes
- ✅ Performance acceptable
- ✅ Security concerns addressed

### Timeline
- Simple changes: 1-2 days
- Medium changes: 2-5 days  
- Complex changes: 5-10 days

---

## After Your PR is Merged

🎉 Congratulations! Your contribution is now part of the project!

### You Can
- See your changes in the main branch
- Your GitHub profile linked in history
- Feel good about helping! 😊

### Next Steps
- Star the repo if you haven't
- Follow project updates
- Consider future contributions

---

## Questions?

- Check existing issues/PRs
- Read documentation thoroughly
- Ask respectfully in issues
- Review code comments

---

## Recognition

Contributors will be recognized in:
- GitHub contributors list
- Project README (for major contributions)
- Release notes

Thank you for contributing! 🚀
