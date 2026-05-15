# ARCHITECTURE.md

# Professional Chef Agent — System Architecture

## Overview

Professional Chef Agent is a production-grade mobile-first AI cooking assistant.

The system is designed around:

* modular architecture
* reusable design systems
* deterministic CI/CD
* AI-assisted development
* scalable mobile UI
* future multimodal AI support

---

# High-Level Architecture

```text
Mobile App
    ↓
FastAPI Backend
    ↓
Chef Agent Orchestrator
    ↓
Service Layer
    ↓
Model Abstraction Layer
```

---

# Mobile Architecture

## Stack

* React Native
* Expo
* TypeScript
* React Navigation
* Jest

---

# Mobile Design Philosophy

The mobile application follows:

```text
Design Tokens
    ↓
Reusable Components
    ↓
Composable Screens
```

---

# Mobile Structure

```text
mobile/src/
  components/
  screens/
  navigation/
  services/
  theme/
  types/
```

---

# Mobile Rules

* screens remain thin
* reusable components required
* no inline hardcoded styles
* design tokens centralized
* strict TypeScript typing
* modular folder organization

---

# Backend Architecture

## Stack

* FastAPI
* Python 3.11
* Pydantic
* pytest

---

# Backend Layers

```text
Routes
  ↓
Services
  ↓
Clients
  ↓
Models
```

---

# Backend Rules

* routes must remain thin
* business logic belongs in services/
* models belong in Pydantic schemas
* deterministic mocks during Iteration 1
* reusable service layer required

---

# Model Abstraction Layer

Future AI integrations must route through:

```text
ChefModelClient
```

Example:

```python
class ChefModelClient:
    def generate_recipe(self):
        pass

    def answer_question(self):
        pass

    def analyze_image(self):
        pass
```

---

# Iteration 1 Architecture

Iteration 1 intentionally avoids:

* real LLM calls
* image recognition
* GPU dependencies
* external AI providers

Instead:

* deterministic mock services
* stable CI
* testable workflows

---

# CI/CD Architecture

## GitHub Actions

Required CI:

* backend tests
* mobile tests
* TypeScript checks

---

# Branch Protection

main branch requires:

* PR approval
* passing status checks
* up-to-date branches

---

# Future Architecture

Future iterations may add:

* multimodal vision models
* recipe fine-tuning
* progress photo validation
* meal planning agents
* grocery integrations
* nutrition estimation
* voice cooking mode
