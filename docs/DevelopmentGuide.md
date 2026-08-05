# Development Guide

## Prerequisites

- Node.js ≥ 20.9
- pnpm ≥ 9 (Corepack or `npm i -g pnpm`)
- Docker Desktop (Postgres + Redis)

## First-time setup

```bash
cp .env.example .env
docker compose -f docker/docker-compose.dev.yml up -d
pnpm install
pnpm db:generate
pnpm db:push
pnpm --filter @bitcraftly/shared build
pnpm --filter @bitcraftly/ai build
pnpm --filter @bitcraftly/database build
pnpm --filter @bitcraftly/reel-engine build
```

## Daily development

```bash
# All apps (web + api) via Turborepo
pnpm dev

# Or individually
pnpm dev:web
pnpm dev:api
```

| Service | URL |
| --- | --- |
| Web | http://localhost:3000 |
| API health | http://localhost:4000/health |
| Prisma Studio | `pnpm db:studio` |

## Environment

Key variables (see `.env.example`):

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | PostgreSQL connection |
| `REDIS_URL` | BullMQ / Redis |
| `API_URL` / `NEXT_PUBLIC_API_URL` | API base URL |
| `BETTER_AUTH_SECRET` | Auth signing secret |
| `AI_*_PROVIDER` | Provider selection (`mock` for Phase 1) |
| `STORAGE_PROVIDER` | `local` for MVP |

## Working with the reel generator

1. Open `/studio/reels`.
2. Enter a topic and options.
3. Click **Generate Reel** — API returns 202 and enqueues a job.
4. Progress polls every ~1.5s until `COMPLETED`.
5. Use **Preview** / **Download** (download writes a mock descriptor file in Phase 1).

## Adding a real AI provider

1. Implement the interface in `packages/ai/src/providers/`.
2. Register it in `createAiProviders`.
3. Set `AI_TEXT_PROVIDER` (etc.) in `.env`.
4. No changes required in `reel-engine` or route handlers.

## Database migrations

```bash
pnpm db:migrate   # create/apply migrations (dev)
pnpm db:push      # push schema without migration files
pnpm db:studio    # browse data
```

## Docker (full stack)

```bash
pnpm docker:up      # uses docker/docker-compose.yml
pnpm docker:logs
pnpm docker:down
```

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| API cannot reach DB | Ensure Compose Postgres is healthy; check `DATABASE_URL` |
| Jobs stuck in QUEUED | Ensure Redis is up; API process starts the worker |
| Web shows network error | Start API (`pnpm dev:api`) and set `NEXT_PUBLIC_API_URL` |
| Prisma client missing | Run `pnpm db:generate` |
