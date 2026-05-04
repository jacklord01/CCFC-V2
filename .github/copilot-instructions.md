# Copilot / AI Coding Instructions for CCFC V2

## Objective

Assist in building a production-grade CCFC V2 web platform using safe, maintainable, scalable practices aligned with repository standards.

## Before generating code

- Read AGENTS.md
- Inspect current project structure
- Identify framework, language, and patterns already in use
- Do not introduce conflicting patterns

## Coding guidelines

- Prefer modular, reusable components
- Keep logic separated from UI
- Follow consistent file naming and structure
- Avoid unnecessary dependencies
- Prefer native platform capabilities where possible

## UI implementation

- Follow Figma design or design-system documentation
- Maintain spacing, typography, and colour consistency
- Ensure responsiveness
- Ensure accessibility (ARIA where needed, semantic HTML)

## Security

- Never generate or expose secrets
- Use environment variables
- Avoid unsafe patterns such as innerHTML unless sanitised

## Output expectations

- Generate only relevant code
- Do not include explanations unless requested
- Ensure code compiles/builds

## Pull request expectations

- Small, focused changes
- Clean diff
- No unrelated refactors unless required

## When uncertain

- Choose the safest minimal implementation
- Document assumptions in PR description