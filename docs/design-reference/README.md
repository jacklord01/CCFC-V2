# CCFC V2 Design Reference

This folder stores exported Figma reference material for developers, GitHub Copilot Agent, Antigravity, and other AI-assisted development tools.

## Folder purpose

Use this folder for stable visual references only. Do not upload every Figma draft, experiment, or duplicate frame.

## Recommended structure

```text
public/
  homepage-desktop.png
  homepage-mobile.png
  shop-listing-desktop.png
  product-detail-desktop.png
  cart-desktop.png
  checkout-desktop.png

admin/
  admin-dashboard-desktop.png
  admin-orders-desktop.png
  admin-products-desktop.png
  admin-clubs-desktop.png
  admin-settings-desktop.png
  admin-users-roles-desktop.png

assets/
  logo.svg
  icons/
```

## Export rules

- Full screens and full frames should be exported as PNG.
- Logos, icons, and simple vector graphics should be exported as SVG.
- Use clear lowercase filenames with hyphens.
- Include desktop and mobile versions where available.
- Do not include private notes, unused concepts, or sensitive information.

## AI usage rules

AI agents should use these references to match layout, visual hierarchy, spacing, and component structure.

If a screen is missing from Figma, agents must create a safe placeholder only and document the assumption in the pull request.