# QA_CHECKLIST.md

# Iteration 1 QA Checklist

| Area               | Test Case            | Expected Result              | Pass/Fail |
| ------------------ | -------------------- | ---------------------------- | --------- |
| Navigation         | App launches         | Home screen visible          |           |
| Navigation         | Screen transitions   | Navigation works correctly   |           |
| Home Screen        | CTA button renders   | Button visible and clickable |           |
| Ingredient Input   | Add ingredient       | Ingredient chip added        |           |
| Ingredient Input   | Remove ingredient    | Ingredient removed           |           |
| Ingredient Input   | Empty submit         | Validation error shown       |           |
| Recipe Suggestions | Recipes render       | Recipe cards visible         |           |
| Recipe Suggestions | Select recipe        | Navigate to detail screen    |           |
| Recipe Detail      | Ingredients visible  | Ingredient list renders      |           |
| Recipe Detail      | Safety notes visible | Safety notes render          |           |
| Recipe Detail      | Start Cooking        | Opens Cooking Mode           |           |
| Cooking Mode       | Step navigation      | Next/previous works          |           |
| Cooking Mode       | Final step           | Finish button visible        |           |
| Ask Chef           | Submit question      | Response appears             |           |
| Ask Chef           | Loading state        | Spinner/loading visible      |           |
| Mobile Layout      | Small iPhone         | Layout responsive            |           |
| Tablet Layout      | iPad layout          | Layout responsive            |           |
| Theme              | Colors consistent    | Uses design tokens           |           |
| Accessibility      | Text readable        | Typography clear             |           |
| Backend            | Health endpoint      | Returns 200                  |           |
| Backend            | Recipe endpoint      | Returns mock recipes         |           |
| Backend            | Ask Chef endpoint    | Returns deterministic answer |           |
| CI                 | Backend Tests        | Pass                         |           |
| CI                 | Mobile Tests         | Pass                         |           |
| CI                 | TypeScript           | Pass                         |           |

---

# Manual QA Requirements

Before merge:

* test on iPhone dimensions
* test on iPad dimensions
* verify navigation
* verify dark theme consistency
* verify no broken routes
* verify deterministic outputs

---

# CI Requirements

PRs cannot merge unless:

* backend tests pass
* frontend tests pass
* TypeScript passes
* GitHub Actions passes
