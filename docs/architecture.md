# Architecture

This document describes the high‑level architecture and technology choices
for the mobile‑mastery application suite.

## Core Approach

- **Main framework**: Expo (managed workflow) for rapid cross‑platform
  development and easy build pipelines.
- **Language**: TypeScript throughout for type safety and better tooling.
- **Styling**: Custom reusable component system. Styles are encapsulated in
  components and shared across apps – think of a `ui-kit` package providing
  buttons, inputs, layout primitives, theming utilities, etc.
- **Forms**: Use React Hook Form starting after initial prototypes; leverage
  its performance and declarative API for validation and complex forms.

## Shared Code & Packages

- **Shared package approach**: Begin with local packages (monorepo /
  workspace) under `packages/` (e.g. `forms`, `icons`, `theme`, `ui-kit`,
  `utils`). This allows easy linking and simultaneous development.
- **Publishing**: Once a package stabilizes, publish to npm so that other
  projects (internal or external) can consume it as a dependency. Versioning
  will follow semver and packages will be scoped if appropriate.

## Additional Notes

- Each app lives under `apps/` and can consume shared packages via relative
  references or npm (post‑publish).
- Focus on modularity: apps should be largely thin shells orchestrating
  shared components and business logic located in packages.
- Testing strategy and architectural patterns (e.g. clean architecture,
  redux/mobx/state management) are defined per app as needed but should
  conform to shared guidelines when possible.

```
apps/         # Each mobile app project
packages/     # Reusable modules, starting local and migrating to npm
```

> This file will evolve as the team refines conventions and adds new
> architectural patterns.