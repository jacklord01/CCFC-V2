# CCFC V2 Architecture

## 1. Purpose

CCFC V2 is a modern club e-commerce and administration platform. The architecture must support a secure, responsive public website, an authenticated admin portal, product or ticket-style purchasing flows, order management, content management, and future extensibility for payments, reporting, and integrations.

This document is the technical source of truth for developers and AI coding agents working on CCFC V2.

## 2. Architecture principles

- Production-grade from the start.
- Secure by design, not added later.
- Mobile-first responsive user experience.
- Clear separation between public website, admin portal, data access, and business logic.
- Minimal unnecessary dependencies.
- Environment-based configuration.
- Reviewable pull requests for all material changes.
- Observable, testable, and deployable through CI/CD.

## 3. Recommended modern stack

### Frontend

- Framework: Next.js with React and TypeScript.
- Styling: Tailwind CSS plus CSS variables for design tokens.
- UI components: local reusable component library under `src/components`.
- Forms: React Hook Form or native controlled forms where complexity is low.
- Validation: Zod or equivalent schema validation.
- State: local component state first; lightweight global state only where required.

### Backend / API

Preferred options depending on current repo maturity:

1. Next.js API routes / server actions for a compact full-stack deployment.
2. Separate Node.js API if the platform requires long-term service separation.
3. Supabase or PostgreSQL-backed API where rapid authenticated data delivery is required.

For the initial CCFC V2 delivery, avoid over-engineering. Use the smallest architecture that supports secure admin workflows and future expansion.

### Database

Recommended production database:

- PostgreSQL.

Core data domains:

- Users and roles.
- Clubs / organisations.
- Products / tickets / merchandise.
- Orders.
- Payments.
- Admin content.
- Audit logs.
- Settings.

### Authentication and authorisation

- Public users should access public pages without authentication.
- Admin users must authenticate.
- Use role-based access control for admin functions.
- Recommended roles:
  - `super_admin`
  - `club_admin`
  - `content_admin`
  - `order_manager`
  - `viewer`

Admin portal routes must be protected server-side, not only hidden in the UI.

### Payments

Design for Stripe first unless another provider is explicitly selected.

Payment architecture should keep CCFC V2 out of direct card-data handling:

- Use hosted checkout or provider-side secure elements.
- Do not store PAN, CVV, or sensitive card data.
- Store only payment reference, status, amount, currency, and order mapping.

### Hosting

Recommended options:

#### Option A: Vercel

Best fit for Next.js speed and preview deployments.

#### Option B: AWS Amplify / S3 + CloudFront

Best fit if the project must remain aligned with AWS operations.

#### Option C: Containerised deployment

Use when backend requirements mature beyond static/frontend-first hosting.

Initial recommendation: Next.js deployed through Vercel or AWS Amplify with GitHub-based CI/CD and preview environments.

## 4. Repository structure

Target structure:

```text
src/
  app/
    (public)/
    admin/
    api/
  components/
    ui/
    layout/
    public/
    admin/
  lib/
    auth/
    db/
    validation/
    utils/
  config/
  styles/
  types/
docs/
  architecture.md
  design-system.md
  delivery-plan.md
public/
  images/
  icons/
.github/
  workflows/
  copilot-instructions.md
AGENTS.md
```

## 5. Public website modules

- Homepage.
- Club / organisation landing page.
- Product listing.
- Product detail.
- Basket / cart.
- Checkout entry point.
- Order confirmation.
- Contact / support.
- Privacy, terms, refund, and cookie policy pages.

## 6. Admin portal modules

The Figma design is expected to define most admin screens, but missing menus should be documented rather than guessed.

Minimum admin portal modules:

- Dashboard.
- Products / items.
- Orders.
- Clubs / organisations.
- Customers / supporters.
- Payments.
- Reports.
- Content management.
- Settings.
- Users and roles.
- Audit log.

Each admin module should use protected routing and role-based access.

## 7. API design

Use explicit API boundaries. Example route groups:

```text
/api/auth/*
/api/clubs/*
/api/products/*
/api/orders/*
/api/payments/*
/api/admin/*
/api/reports/*
```

API responses should be typed, predictable, and avoid leaking internal errors.

## 8. Security controls

- No hardcoded secrets.
- `.env.example` only contains safe placeholders.
- Input validation for all forms and API requests.
- Output encoding for rendered content.
- Server-side authorisation for admin routes.
- Secure payment provider integration.
- Audit logging for admin changes.
- Rate limiting for sensitive endpoints where supported.
- Dependency review before adding packages.
- Branch protection and pull request review before production merge.

## 9. Accessibility and quality

- Semantic HTML.
- Keyboard navigation.
- Visible focus states.
- Correct heading hierarchy.
- Sufficient colour contrast.
- Alt text for meaningful images.
- Responsive layouts for mobile, tablet, and desktop.

## 10. CI/CD expectations

GitHub Actions should run:

- Install dependencies.
- Type check.
- Lint.
- Build.
- Tests where available.

Deployment should happen only after a successful build.

## 11. Figma integration model

Figma is the design source of truth. GitHub is the code source of truth.

Recommended workflow:

1. Link exact Figma frames in GitHub issues.
2. Export design tokens into `docs/design-system.md` or token files.
3. Export production assets into `public/images` or `public/icons`.
4. Implement components against documented design tokens.
5. Review PR screenshots against Figma before merge.

## 12. AI agent expectations

AI agents must not make broad architectural changes without updating this file and documenting the change in the pull request.

If Figma menus or screens are missing, the AI agent must:

- Implement only confirmed screens.
- Add placeholders only where explicitly requested.
- Document assumptions in the PR.
- Avoid inventing business-critical admin workflows without review.