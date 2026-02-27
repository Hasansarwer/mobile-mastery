# Mobile Mastery

A monorepo housing multiple React Native mobile applications built with Expo, showcasing modern development patterns and best practices.

## Project Goal

**Mobile Mastery** is a collection of feature-rich mobile apps that demonstrate:
- Best practices in React Native and Expo development
- Modularity and scalability in a monorepo structure
- A shared, reusable **component library** (`ui-kit` package) leveraged across all apps
- Design patterns and architectural patterns for mobile applications
- A foundation for publishing shared packages to npm

## Folder Structure

```
mobile-mastery/
├── apps/                    # Individual mobile app projects
│   ├── starter-app/         # Main starter app (Expo-based)
│   ├── camera-utility/
│   ├── card-design/
│   ├── chat-app/
│   ├── ecommerce-app/
│   ├── emi-mobile/
│   ├── emi-product/
│   ├── expense-tracker/
│   ├── fitness-app/
│   ├── food-delivery-app/
│   ├── image-editor-app/
│   ├── news-feed/
│   ├── notes-app/
│   ├── racing-game/
│   ├── smart-device-app/
│   ├── social-app/
│   ├── todo-app/
│   └── weather-app/
│
├── packages/                # Shared reusable modules (monorepo workspace)
│   ├── ui-kit/              # Design system & component library
│   │   └── src/
│   │       ├── components/  # Button, Card, Input, Screen, AppText, etc.
│   │       ├── theme/       # Colors, spacing, typography, radius
│   │       └── index.ts
│   ├── theme/               # Theming utilities
│   ├── forms/               # Form handling (React Hook Form patterns)
│   ├── icons/               # Icon assets
│   └── utils/               # Common utilities
│
└── docs/                    # Documentation
    ├── architectecture.md   # Design principles & architecture
    ├── apps-list.md
    └── design-rule.md
```

**Key Structure**: This is an **npm workspace** (configured in root `package.json`). Apps and packages are **linked locally** during development, enabling simultaneous updates without publishing to npm.

### Technology Stack

- **Framework**: Expo (managed workflow) for rapid cross-platform development
- **Language**: TypeScript throughout for type safety
- **Styling**: Custom reusable component system via `ui-kit` package
- **Forms**: React Hook Form patterns (starting after initial prototypes)
- **Build**: Expo CLI handles building for iOS, Android, and Web

## How to Run Starter App

### Prerequisites

Ensure you have Node.js and npm installed.

### Setup

1. **Install dependencies** (from the root directory):
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run start:starter
   ```

   Or directly:
   ```bash
   npm run start --workspace=apps/starter-app
   ```

### Run on Specific Platform

- **Android**:
  ```bash
  npm run android --workspace=apps/starter-app
  ```

- **iOS**:
  ```bash
  npm run ios --workspace=apps/starter-app
  ```

- **Web**:
  ```bash
  npm run web --workspace=apps/starter-app
  ```

The starter app uses **Expo Go** (available on iOS/Android app stores) to preview changes in real-time on your device or emulator.

## How UI-Kit is Linked

### Local Workspace Linking

The `ui-kit` package is linked to apps via **npm workspaces** and **file protocol**.

In [apps/starter-app/package.json](apps/starter-app/package.json):
```json
"@mobile-mastery/ui-kit": "file:../../packages/ui-kit"
```

**How it works**:
- The `file:` protocol tells npm to use the **local filesystem path** instead of fetching from npm registry
- The path `../../packages/ui-kit` points to the shared package
- Changes to `ui-kit` are **instantly available** to starter-app (no rebuild or republish needed)
- The `@mobile-mastery` namespace prevents naming conflicts and allows future npm publishing

### Using UI-Kit Components

Import components directly in any app:
```typescript
import { Button, Screen, Card, AppText, Input } from "@mobile-mastery/ui-kit";
```

The TypeScript compiler resolves imports via:
1. The workspace configuration in root `package.json`
2. The package entry point defined in [packages/ui-kit/package.json](packages/ui-kit/package.json):
   ```json
   "main": "src/index.ts",
   "types": "src/index.ts"
   ```

### Available UI-Kit Components

- **`Screen`** – Screen wrapper with safe area handling
- **`AppText`** – Styled text component with typography variants
- **`Button`** – Reusable button component
- **`Card`** – Box/container for grouping content
- **`Input`** – Text input with theming
- **Theme utilities** – Colors, spacing, typography, and border radius

## Development Workflow

1. Make changes to a shared package (e.g., `ui-kit`)
2. Changes are **instantly reflected** in dependent apps thanks to workspace linking
3. Test changes across multiple apps
4. Once stable, increment version in `packages/[package]/package.json`
5. Eventually publish to npm under `@mobile-mastery` scope

## Additional Resources

- [Architecture & Design Principles](docs/architectecture.md)
- [Design Rules](docs/design-rule.md)
- [Apps List](docs/apps-list.md)

---

**Built with TypeScript • Expo • React Native • npm Workspaces**
