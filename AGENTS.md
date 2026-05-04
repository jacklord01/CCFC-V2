# CCFC V2 AI Agent Operating Instructions

## Purpose

This repository is the source of truth for the CCFC V2 website build. AI coding agents, Copilot, Antigravity-style workspaces, and human developers must follow this file before making changes.

## Delivery objective

Deliver a production-grade CCFC V2 website that is secure, maintainable, responsive, accessible, and aligned with the approved Figma design and project scope.

## Non-negotiable rules

1. Do not commit directly to production deployment branches unless explicitly instructed by the repository owner.
2. Work in small, reviewable changes.
3. Create a feature branch for each discrete task.
4. Do not expose secrets, API keys, tokens, private URLs, or production credentials in code, comments, logs, screenshots, or pull requests.
5. Do not overwrite existing working functionality without explaining the reason in the pull request.
6. Do not introduce new frameworks, major dependencies, authentication systems, payment libraries, or hosting assumptions without documenting the decision.
7. Every UI change must be checked against the Figma design source or documented design-system guidance.
8. Every feature must remain responsive across mobile, tablet, and desktop breakpoints.
9. Every pull request must include test/build evidence.
10. Prefer clear, maintainable implementation over clever or fragile code.

## Expected branch model

- `main`: production-ready branch.
- `develop`: integration branch if present.
- `feature/*`: feature branches for individual implementation tasks.
- `fix/*`: defect corrections.
- `hotfix/*`: urgent production corrections.

If `develop` does not exist, create pull requests into `main` unless the repository owner instructs otherwise.

## Standard workflow

1. Read this file, `.github/copilot-instructions.md`, `docs/architecture.md`, `docs/design-system.md`, and `docs/delivery-plan.md`.
2. Inspect the existing project structure before editing.
3. Create or use a focused branch, for example `feature/homepage-sections`.
4. Make the smallest coherent implementation change.
5. Run install, lint, build, and tests where available.
6. Fix all avoidable warnings and errors.
7. Open a pull request with evidence, screenshots if UI-related, and risks.
8. Wait for review before merging unless explicitly authorised.

## Code quality expectations

- Keep components focused and reusable.
- Keep business rules out of presentational components where practical.
- Avoid duplicated styling and duplicated logic.
- Use semantic HTML.
- Ensure keyboard accessibility for interactive components.
- Use descriptive names for components, functions, variables, routes, and files.
- Add comments only where they clarify non-obvious logic.
- Remove dead code, unused imports, and debugging output.

## Security expectations

- Treat the repository as a production software asset.
- Never hardcode secrets.
- Use environment variables for configuration.
- Keep `.env.example` current and safe.
- Validate and sanitise user input where relevant.
- Avoid unsafe HTML injection.
- Avoid unnecessary third-party scripts.
- Use dependency updates deliberately and review their impact.
- Do not weaken browser, authentication, or hosting security to make a feature work.

## Pull request requirements

Each pull request should include:

- Summary of changes.
- Related issue or task.
- Figma frame or design reference where applicable.
- Commands run.
- Build/test result.
- Screenshots or preview URL for UI changes.
- Known risks or follow-up items.

## Review focus

Reviewers should check:

- Alignment with project scope.
- Alignment with Figma/design system.
- Responsiveness.
- Accessibility.
- Security implications.
- Build/test status.
- Maintainability.
- Deployment impact.

## AI-specific instruction

When uncertain, do not invent missing requirements. Add a clear assumption in the pull request and implement the safest minimal version. Preserve working functionality and make changes easy to review.