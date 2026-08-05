# Bitcraftly AI Studio

Enterprise AI content platform. Phase 1: **AI Reel Generator**.

## Stack

| Layer | Technology |
| --- | --- |
| Frontend | Next.js 16, React 19, Tailwind CSS v4 |
| Backend | Fastify, Prisma, PostgreSQL |
| Queue | BullMQ, Redis |
| Auth | Better Auth |
| AI | Provider interfaces + mock implementations |
| Monorepo | pnpm workspaces + Turborepo |

## Quick start

```bash
# 1. Copy env
cp .env.example .env

# 2. Start Postgres + Redis
docker compose -f docker/docker-compose.dev.yml up -d

# 3. Install & prepare
pnpm install
pnpm db:generate
pnpm db:push

# 4. Build shared packages
pnpm --filter @bitcraftly/shared build
pnpm --filter @bitcraftly/ai build
pnpm --filter @bitcraftly/database build
pnpm --filter @bitcraftly/reel-engine build

# 5. Run apps
pnpm dev
```

- Web: http://localhost:3000
- API: http://localhost:4000/health

Or use the setup script:

```bash
bash scripts/setup.sh
pnpm dev
```

## Apps & packages

```
apps/web          Next.js App Router UI
apps/api          Fastify REST API + BullMQ workers
packages/shared   Constants, Zod schemas, types, utils
packages/database Prisma schema + client
packages/ai       AI + storage provider interfaces (mocks)
packages/ui       Design system components
services/*        Domain engines (reel, image, voice, video, publisher)
```

## Pages

| Route | Description |
| --- | --- |
| `/` | Landing |
| `/studio` | Dashboard |
| `/studio/reels` | AI Reel Generator |
| `/studio/analytics` | Placeholder |
| `/settings` | Account settings |

## Reel pipeline (Phase 1)

Topic → Script → Images (mock) → Voice (mock) → Video (mock) → Preview / Download

## Documentation

- [Architecture](docs/Architecture.md)
- [Folder structure](docs/FolderStructure.md)
- [Coding standards](docs/CodingStandards.md)
- [Development guide](docs/DevelopmentGuide.md)
- [Contributing](docs/Contributing.md)

## License

Proprietary — Bitcraftly
