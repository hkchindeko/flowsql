# CRUSH Profile

This file provides a set of guidelines and commands for interacting with the `flowsql` codebase.

## Project Commands

-   **Install dependencies**: `bun install`
-   **Run all apps in development mode**: `bun run dev`
-   **Build all apps**: `bun run build`
-   **Run linter**: `bun run check`
-   **Check types**: `bun run check-types`
-   **Run database migrations**: `bun run db:push` (from `apps/server`)

## Code Style

This project uses **Ultracite** and **Biome** for code quality and formatting, with a focus on strict type safety and readability.

### Key Guidelines:

-   **Formatting**: Handled automatically by Biome. Run `npx ultracite format` to format.
-   **Linting**: Run `npx ultracite lint` to check for issues.
-   **TypeScript**:
    -   Avoid `any` and implicit `any`.
    -   Use `as const` for literal types.
    -   Use `export type` and `import type` for type-only imports/exports.
-   **React**:
    -   Specify all dependencies in hooks.
    -   Use `<>...</>` instead of `<Fragment>...</Fragment>`.
-   **Error Handling**:
    -   Always handle promise rejections.
    -   Wrap asynchronous operations in `try...catch` blocks.

For a comprehensive list of rules, see `.github/copilot-instructions.md` and `.cursor/rules/ultracite.mdc`.

### Shadcn UI:

When asked to plan using anything related to shadcn, consider the following:
  - Use the MCP server for all component during planning.
  - Apply components wherever components are applicable
  - Use whole blocks where possible (e.g. login page, dashboard, sidebar, calendar)
  - Use the latest design tokens and components from the MCP server.
  - Ensure accessibility best practices are followed.
  - Collaborate with designers to maintain consistency with the overall design system.

When implementing:
  - First call the demo tool to see how it is used
  - Then implement it so that it is implemented correctly
