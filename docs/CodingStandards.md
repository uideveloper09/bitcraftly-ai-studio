# Coding Standards

## TypeScript

- Strict mode enabled (`strict`, `noUncheckedIndexedAccess`, `noImplicitOverride`).
- Never use `any`. Prefer `unknown` + narrowing.
- Never ignore TypeScript errors (`@ts-ignore`, `@ts-expect-error` without justification).
- Prefer explicit return types on exported functions.
- Use `import type` for type-only imports where `verbatimModuleSyntax` applies.

## Architecture

- Depend on interfaces, not concrete providers.
- Keep business logic out of React components and Fastify route handlers when non-trivial.
- One responsibility per module/file.
- No duplicated constants — use `@bitcraftly/shared`.

## React / Next.js

- Server Components by default.
- Mark interactive trees with `'use client'`.
- Use Suspense for async UI boundaries.
- Provide loading and empty states.
- Accessibility: labels, `aria-*`, keyboard focus, semantic HTML.
- Absolute imports via `@/` in the web app.

## API

- Validate all inputs with Zod.
- Return typed envelopes: `{ success: true, data }` or `{ success: false, error }`.
- Log errors with Fastify/Pino; never leak stack traces to clients in production.
- Use HTTP status codes correctly (202 for queued generation).

## Styling

- Tailwind CSS v4 utility classes.
- Design tokens via CSS variables in `@bitcraftly/ui/styles.css`.
- Prefer composition over one-off styles.
- Support light and dark themes.

## Formatting & lint

- Prettier for format.
- ESLint (`eslint-config-next` for web) with `--max-warnings=0`.
- Husky + lint-staged on pre-commit.
- EditorConfig for consistent whitespace.
- Run `pnpm format` and `pnpm lint` before PRs.

## Environment

- Validate env at the boundary with Zod (`apps/web/src/lib/env.ts`, API `config/env.ts`).
- Never commit secrets. Use `.env.example` as the contract.

## Design tokens

- Prefer CSS variables from `@bitcraftly/ui/styles.css` (color, space, type, radius, shadow, motion).
- Do not hardcode repeated spacing/color values in feature UI.

## Git

- Small, focused commits.
- Do not commit secrets, `.env`, or generated media under `storage/`.
- See [Contributing.md](./Contributing.md).
