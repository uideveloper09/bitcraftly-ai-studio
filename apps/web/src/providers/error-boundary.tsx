'use client';

import { Component, type ErrorInfo, type ReactNode } from 'react';
import Link from 'next/link';
import { ROUTES, UI_COPY } from '@bitcraftly/shared';
import { Button } from '@bitcraftly/ui';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  message?: string;
}

export class AppErrorBoundary extends Component<Props, State> {
  override state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error.message };
  }

  override componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('[ErrorBoundary]', error, info);
  }

  override render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[var(--color-bg)] px-6 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">{UI_COPY.SOMETHING_WENT_WRONG}</h1>
          <p className="max-w-md text-sm text-[var(--color-fg-muted)]">
            {this.state.message ?? UI_COPY.UNEXPECTED_ERROR}
          </p>
          <Link href={ROUTES.HOME}>
            <Button
              onClick={() => {
                this.setState({ hasError: false, message: undefined });
              }}
            >
              {UI_COPY.RETURN_HOME}
            </Button>
          </Link>
        </div>
      );
    }

    return this.props.children;
  }
}
