You are building the Professional Chef Agent application.

Follow these rules:
1. Make small, focused commits.
2. Do not implement unrelated features.
3. Every new behavior must include tests.
4. Keep backend logic out of route handlers.
5. Keep mobile business logic out of screens.
6. Use service layers, typed schemas, and reusable components.
7. Do not call real LLM APIs in Iteration 1.
8. Use deterministic mock services so CI is stable.
9. Run tests before completing a task.
10. Do not skip failing tests.# Professional Chef Agent — AGENTS.md

## Overview

This repository contains a production-grade mobile-first AI cooking assistant.

Primary goals:

* modular architecture
* scalable mobile design system
* deterministic CI
* AI-assisted development workflows
* Codex-friendly task execution
* strong testing discipline

---

# Core Development Principles

1. Keep PRs small and focused.
2. Every feature must include tests.
3. Never skip failing tests.
4. Maintain modular architecture.
5. Keep screens thin.
6. Keep API routes thin.
7. Use service layers for business logic.
8. Avoid large monolithic files.
9. Prefer deterministic behavior.
10. Maintain strict TypeScript typing.

---

# Iteration 1 Scope

Iteration 1 focuses on:

* mobile scaffold
* backend scaffold
* design system
* mock recipe generation
* mock Ask Chef flow
* recipe detail flow
* cooking mode
* CI/CD foundation
* unit/integration tests

Iteration 1 explicitly excludes:

* real LLM calls
* image recognition
* authentication
* payments
* grocery integrations
* social systems

---

# Repository Structure

professional-chef-agent/
backend/
mobile/
docs/
.github/workflows/

---

# Backend Architecture Rules

* FastAPI only
* Business logic belongs in services/
* Routes should remain minimal
* Pydantic models required
* Use deterministic mock services during Iteration 1
* Use pytest for all backend tests

---

# Mobile Architecture Rules

* React Native + Expo + TypeScript
* Reusable design system
* Theme tokens required
* No inline hardcoded colors
* Components should be reusable
* Screens should compose components
* Use typed navigation
* Use React Navigation

---

# Testing Rules

Every PR must:

* pass backend tests
* pass frontend tests
* pass TypeScript checks
* pass GitHub Actions CI

Required:

* component tests
* screen render tests
* API integration tests
* deterministic mocks

---

# CI/CD Rules

Branch protection on main must require:

* Backend Tests
* Mobile Tests

Do not merge failing CI.

---

# AI/Model Rules

Iteration 1:

* use deterministic mock services only

Iteration 2+:

* abstract model access behind ChefModelClient

Never hardcode model providers into screens or routes.

---

# Preferred Development Flow

1. Create issue
2. Assign Codex task
3. Codex opens PR
4. GitHub Actions run
5. Human review
6. Merge if CI passes

---

# Coding Standards

* small files
* descriptive naming
* reusable utilities
* avoid duplicated styles
* strict typing
* avoid unnecessary dependencies

---

# Definition of Done

A task is complete only if:

* implementation works
* tests pass
* CI passes
* architecture rules are followed
* documentation updated if needed
