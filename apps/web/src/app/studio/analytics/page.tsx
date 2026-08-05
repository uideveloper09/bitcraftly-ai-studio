import type { Metadata } from 'next';
import { NAV_ITEMS } from '@bitcraftly/shared';
import { Container, PageHeader, Section } from '@bitcraftly/ui';
import { ComingSoonModule } from '@/features/coming-soon/coming-soon-module';

export const metadata: Metadata = {
  title: NAV_ITEMS.ANALYTICS,
};

export default function AnalyticsPage() {
  return (
    <Container size="sm">
      <Section>
        <PageHeader
          title={NAV_ITEMS.ANALYTICS}
          description="Performance insights for reels, posts, and campaigns."
        />
        <ComingSoonModule
          title={NAV_ITEMS.ANALYTICS}
          description="Analytics will surface generation and publishing metrics here."
        />
      </Section>
    </Container>
  );
}
