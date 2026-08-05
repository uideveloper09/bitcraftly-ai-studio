# Architecture

## Overview

Bitcraftly AI Studio is a modular monorepo designed so each AI content module (reels, posts, images, video, banners, thumbnails, blog, social, analytics) can be added without refactoring the core platform.

## Principles

1. **Clean Architecture** — domain logic is independent of frameworks and providers.
2. **Feature-based UI** — `apps/web/src/features/*` owns feature screens; shared UI lives in `packages/ui`.
3. **SOLID** — providers and services expose interfaces; implementations are swappable.
4. **Dependency injection** — `apps/api/src/container.ts` wires AI providers, storage, and engines.
5. **Queue-driven generation** — long-running pipelines run on BullMQ workers, not request threads.

## High-level diagram

```
┌─────────────┐     REST      ┌─────────────┐     BullMQ     ┌────────────────┐
│  Next.js    │ ────────────► │  Fastify    │ ─────────────► │ Reel Worker    │
│  apps/web   │               │  apps/api   │                │ reel-engine    │
└─────────────┘               └──────┬──────┘                └───────┬────────┘
                                     │                               │
                                     ▼                               ▼
                              ┌─────────────┐               ┌────────────────┐
                              │ PostgreSQL  │               │ AI Providers   │
                              │ + Prisma    │               │ (mock → real)  │
                              └─────────────┘               └────────────────┘
                                     ▲                               │
                                     │                               ▼
                              ┌─────────────┐               ┌────────────────┐
                              │ Redis       │               │ Storage        │
                              │ (queues)    │               │ (local → S3)   │
                              └─────────────┘               └────────────────┘
```

## Layers

### Presentation (`apps/web`)

- App Router, Server Components by default
- Client components for interactive forms and polling
- Suspense + loading states + error boundaries
- Dark mode via `next-themes`

### Application / API (`apps/api`)

- REST endpoints under `/api/v1/*`
- Zod validation at the boundary
- Typed success/error envelopes from `@bitcraftly/shared`
- Workers update `Generation` + `Reel` progress

### Domain services (`services/*`)

| Service | Responsibility |
| --- | --- |
| `reel-engine` | Orchestrates full reel pipeline |
| `image-engine` | Image generation façade |
| `voice-engine` | TTS façade |
| `video-engine` | Render façade |
| `publisher` | Multi-platform publish (stub) |

### AI providers (`packages/ai`)

Interfaces:

- `TextProvider`
- `ImageProvider`
- `VoiceProvider`
- `VideoProvider`
- `StorageProvider`

Phase 1 ships mock providers. Future OpenAI / Replicate / ElevenLabs / FFmpeg adapters implement the same interfaces.

### Data (`packages/database`)

Prisma models: `User`, `Project`, `Reel`, `Generation`, `Media`, `Settings`, `ActivityLog`, plus Better Auth tables (`Session`, `Account`, `Verification`).

`Generation.type` is an enum so future modules share the same job table.

## Reel pipeline

1. `POST /api/v1/reels/generate` validates input and creates `Reel` + `Generation` (QUEUED).
2. Job enqueued on `reel-generation`.
3. Worker runs: script → images → voice → video.
4. Progress written to `Generation` (`SCRIPTING` … `COMPLETED`).
5. UI polls `/api/v1/generations/:id` and unlocks Preview / Download.

## Extending with a new module

1. Add Zod schemas + constants in `@bitcraftly/shared`.
2. Add Prisma enums / tables if needed (prefer extending `Generation`).
3. Add provider interface + mock in `@bitcraftly/ai` if new capability.
4. Add `services/<module>-engine` with an interface + default implementation.
5. Add API routes + queue worker.
6. Add `apps/web` feature page + nav item.

No changes to existing reel business logic are required.
