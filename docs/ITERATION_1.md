# ITERATION_1.md

# Iteration 1 — MVP Scope

## Goal

Validate the core cooking workflow:

```text
Ingredients
→ Recipe Suggestions
→ Recipe Detail
→ Cooking Mode
→ Ask Chef
```

---

# Iteration 1 Objectives

## Mobile

* Expo scaffold
* TypeScript setup
* React Navigation
* reusable design system
* placeholder screens
* component tests

---

# Backend

* FastAPI scaffold
* health endpoint
* recipe generation endpoint
* Ask Chef endpoint
* deterministic mock services
* backend tests

---

# Design System

Core reusable components:

* Button
* Card
* IngredientChip
* RecipeCard
* CookingStepCard
* ProgressBar
* ChefInsightCard

---

# MVP Screens

Required screens:

* Home
* Ingredient Input
* Recipe Suggestions
* Recipe Detail
* Cooking Mode
* Ask Chef

---

# AI Scope

Iteration 1 uses:

* deterministic mock services only

No:

* real LLMs
* image recognition
* fine-tuning

---

# Testing Scope

Required:

* frontend component tests
* screen tests
* backend unit tests
* backend integration tests
* GitHub Actions CI

---

# Definition of Done

Iteration 1 is complete when:

* user can enter ingredients
* recipes are generated
* recipe details render
* cooking mode works
* Ask Chef works
* all tests pass
* CI passes

---

# Explicitly Excluded

Do NOT build yet:

* authentication
* payments
* grocery delivery
* vision models
* meal planning
* social features
* fine-tuned chef model
* nutrition engine
