# Folder Structure

```
bitcraftly-ai-studio/
├── apps/
│   ├── api/                         # Fastify REST API + workers
│   └── web/                         # Next.js 16 App Router
│       ├── public/                  # Static assets (icons, etc.)
│       └── src/
│           ├── app/                 # Routes, SEO (robots/sitemap/manifest)
│           ├── components/          # App chrome (layout, icons)
│           ├── features/            # Feature-scoped screens
│           ├── hooks/               # Reusable React hooks
│           ├── lib/                 # Env, auth, API client
│           ├── providers/           # Theme, error boundary, shell context
│           ├── styles/              # Global CSS entry
│           ├── types/               # Presentation-layer types
│           └── utils/               # Web-only helpers
│
├── packages/
│   ├── shared/                      # Constants, schemas, utils, logger
│   ├── database/                    # Prisma
│   ├── ai/                          # Provider interfaces + mocks
│   └── ui/                          # Design system (no business logic)
│
├── services/                        # Domain engines
├── docker/
├── docs/
├── scripts/
└── storage/
```

## `apps/web` conventions

| Folder | Purpose |
| --- | --- |
| `app/` | Routing, layouts, metadata, SEO files |
| `components/` | Shared app chrome (sidebar, topbar, icons) |
| `features/` | Feature modules (settings, future generators) |
| `hooks/` | Client hooks (`useDisclosure`, `useMediaQuery`) |
| `lib/` | Cross-cutting modules (env validation, API, auth) |
| `providers/` | React context providers (theme/shell only) |
| `styles/` | Global styles importing design tokens |
| `types/` | Local TS types for presentation |
| `utils/` | Pure helpers used by the web app |

Absolute imports use the `@/` alias → `apps/web/src/*`.
