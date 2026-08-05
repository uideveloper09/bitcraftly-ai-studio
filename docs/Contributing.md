# Contributing

Thank you for contributing to Bitcraftly AI Studio.

## Prerequisites

- Node.js ≥ 20.9
- pnpm ≥ 9
- Docker Desktop (Postgres + Redis for API work)

## Setup

```bash
cp .env.example .env
pnpm install
pnpm docker:up
pnpm db:generate && pnpm db:push
pnpm --filter @bitcraftly/shared build
pnpm --filter @bitcraftly/ai build
pnpm --filter @bitcraftly/database build
pnpm --filter @bitcraftly/reel-engine build
pnpm dev
```

## Branch & PR workflow

1. Create a focused branch from `main`.
2. Keep changes scoped to one concern.
3. Run checks locally before opening a PR:

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm --filter @bitcraftly/web build
```

4. Open a PR with a clear summary and test plan.

## Coding standards

Follow [CodingStandards.md](./CodingStandards.md).

Highlights:

- Strict TypeScript — never use `any`
- Prefer interfaces + DI for services/providers
- Shared copy/constants live in `@bitcraftly/shared`
- UI primitives live in `@bitcraftly/ui` (no business logic)
- Server Components by default in `apps/web`

## Commit hooks

Husky runs `lint-staged` on commit:

- ESLint (`--max-warnings=0`) for `apps/web`
- Prettier for staged sources

Do not bypass hooks (`--no-verify`) unless explicitly required and documented.

## Architecture boundaries

| Layer | Location | May depend on |
| --- | --- | --- |
| UI primitives | `packages/ui` | React only |
| Shared contracts | `packages/shared` | Zod / pure TS |
| Domain engines | `services/*` | `packages/ai`, `packages/shared` |
| HTTP API | `apps/api` | packages + services |
| Web app | `apps/web` | packages (not services directly for domain orchestration) |

## Adding a feature module

1. Constants + Zod schemas in `@bitcraftly/shared`
2. Provider interface (if needed) in `@bitcraftly/ai`
3. Engine in `services/<name>-engine`
4. API routes + worker in `apps/api`
5. Feature UI in `apps/web/src/features/<name>`

See [Architecture.md](./Architecture.md) for details.
