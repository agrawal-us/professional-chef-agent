# Professional Chef Agent — Codex Instructions

## Overview

This repository contains a mobile-first AI cooking assistant.

Iteration 1 scope:
- Manual ingredient entry
- Mock recipe generation
- Recipe suggestions
- Recipe detail screen
- Cooking mode
- Ask Chef flow
- Full unit/integration test coverage
- GitHub Actions CI

---

## Development Rules

1. Keep PRs small and focused.
2. Every feature must include tests.
3. Do not skip failing tests.
4. Backend business logic must live in services.
5. React Native screens must remain thin.
6. Use typed request/response models.
7. Use deterministic mock services during Iteration 1.
8. Avoid introducing unrelated dependencies.
9. Run tests before completing a task.
10. Maintain modular architecture.

---

## Backend Commands

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
pytest -q
```

---

## Mobile Commands

```bash
cd mobile
npm install
npm run typecheck
npm test -- --watchAll=false
```

---

## CI Requirements

PRs must pass:
- Backend Tests
- Mobile Tests

before merge into main.
