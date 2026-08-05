import Link from 'next/link';
import { ROUTES } from '@bitcraftly/shared';
import { Button } from '@bitcraftly/ui';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[var(--color-bg)] px-6 text-center">
      <p className="text-sm font-medium text-[var(--color-fg-muted)]">404</p>
      <h1 className="text-2xl font-semibold tracking-tight">Page not found</h1>
      <Link href={ROUTES.HOME}>
        <Button>Go home</Button>
      </Link>
    </div>
  );
}
