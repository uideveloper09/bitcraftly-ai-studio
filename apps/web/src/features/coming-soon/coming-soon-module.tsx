import { Card, CardDescription, CardHeader, CardTitle, EmptyState } from '@bitcraftly/ui';
import { UI_COPY } from '@bitcraftly/shared';

export interface ComingSoonModuleProps {
  title: string;
  description: string;
}

export function ComingSoonModule({ title, description }: ComingSoonModuleProps) {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <EmptyState
        title={UI_COPY.COMING_SOON}
        description={UI_COPY.COMING_SOON_DESCRIPTION}
        className="border-0 bg-transparent px-0 py-[var(--space-10)]"
      />
    </Card>
  );
}
