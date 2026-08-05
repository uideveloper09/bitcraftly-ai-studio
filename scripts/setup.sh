#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

if [ ! -f .env ]; then
  cp .env.example .env
  echo "Created .env from .env.example"
fi

echo "Starting Postgres + Redis…"
docker compose -f docker/docker-compose.dev.yml up -d

echo "Installing dependencies…"
pnpm install

echo "Generating Prisma client…"
pnpm db:generate

echo "Pushing schema…"
pnpm db:push

echo "Building packages…"
pnpm --filter @bitcraftly/shared build
pnpm --filter @bitcraftly/ai build
pnpm --filter @bitcraftly/database build
pnpm --filter @bitcraftly/reel-engine build

echo "Setup complete. Run: pnpm dev"
