import { UI_COPY } from '@bitcraftly/shared';
import {
  Badge,
  Button,
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  Progress,
  cn,
} from '@bitcraftly/ui';

export interface PreviewStep {
  id: string;
  label: string;
  done: boolean;
}

export interface ReelPreviewState {
  status: string;
  progress: number;
  topic?: string;
  steps: PreviewStep[];
}

export function ReelPreviewPanel({ preview }: { preview: ReelPreviewState }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div>
          <CardTitle>{UI_COPY.PREVIEW}</CardTitle>
          <CardDescription>Thumbnail, timeline, and export controls</CardDescription>
        </div>
        <Badge variant={preview.progress > 0 ? 'info' : 'default'}>{preview.status}</Badge>
      </CardHeader>

      <div className="grid gap-[var(--space-6)] md:grid-cols-[minmax(0,220px)_1fr]">
        <div
          className={cn(
            'flex aspect-[9/16] max-h-[360px] items-center justify-center rounded-[var(--radius-2xl)]',
            'border border-dashed border-[var(--color-border)] bg-[var(--color-surface-elevated)]',
          )}
          role="img"
          aria-label="Reel thumbnail placeholder"
        >
          <div className="px-[var(--space-4)] text-center">
            <p className="font-medium text-[var(--color-fg-muted)] text-[var(--text-sm)]">
              Thumbnail
            </p>
            <p className="mt-1 text-[var(--color-fg-subtle)] text-[var(--text-xs)]">
              {preview.topic ?? 'Generate to preview'}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[var(--space-5)]">
          <Progress value={preview.progress} label="Pipeline progress" />

          <ol className="space-y-[var(--space-3)]" aria-label="Progress timeline">
            {preview.steps.map((step, index) => (
              <li key={step.id} className="flex items-center gap-[var(--space-3)]">
                <span
                  className={cn(
                    'flex size-7 shrink-0 items-center justify-center rounded-full font-semibold text-[var(--text-xs)]',
                    step.done
                      ? 'bg-[var(--color-accent)] text-[var(--color-accent-fg)]'
                      : 'bg-[var(--color-surface-elevated)] text-[var(--color-fg-muted)]',
                  )}
                  aria-hidden
                >
                  {index + 1}
                </span>
                <div>
                  <p className="font-medium text-[var(--text-sm)]">{step.label}</p>
                  <p className="text-[var(--color-fg-subtle)] text-[var(--text-xs)]">
                    {step.done ? 'Complete' : 'Pending'}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-auto flex flex-wrap items-center gap-[var(--space-2)]">
            <p className="mr-auto text-[var(--color-fg-muted)] text-[var(--text-sm)]">
              Status: <span className="font-medium text-[var(--color-fg)]">{preview.status}</span>
            </p>
            <Button type="button" disabled aria-disabled="true">
              {UI_COPY.DOWNLOAD}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
