# Design Rules

These guidelines ensure consistency and maintainability across the
`mobile-mastery` apps.

- **Every component must accept `style` and `variant` when needed.**
  Allow callers to customize appearance without touching internal code.

- **Avoid hardcoded colors inside app screens.**
  Use a theme or token system so colors can be updated globally and support
  dark/light modes.

- **Use tokens instead of raw values when possible.**
  Spacing, font sizes, colors, etc., should come from a shared set of design
  tokens rather than magic numbers.

- **Reuse shared components before creating app-specific UI.**
  Check the packages under `packages/` and `apps/..` for existing components
  before writing new ones to prevent duplication.

- **Keep component names simple and scalable.**
  Names like `Button`, `Card`, and `Input` are preferable over verbose or
  overly specific variants, which can be extended via props/variants.

- **Prefer composition over duplication.**
  Build new UI by composing smaller components instead of copying and
  pasting similar markup.

These rules are not exhaustive but provide a starting point for a clean,
scalable design system. They should be revisited as the project grows.