# Project Rules

1. **Accessibility First:** Every input field must have an associated `<label>` with a matching `htmlFor` attribute.
2. **Robust Validation:** All forms must utilize `react-hook-form` and `zod` for schema-based validation. Never use uncontrolled inputs for critical data.
3. **Test-Driven Foundation:** Before implementation, define the validation schema and include basic test cases to verify field behavior and error handling.