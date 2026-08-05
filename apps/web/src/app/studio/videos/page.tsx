import type { Metadata } from 'next';
import { NAV_ITEMS } from '@bitcraftly/shared';
import { Container, PageHeader, Section } from '@bitcraftly/ui';
import { ComingSoonModule } from '@/features/coming-soon/coming-soon-module';

export const metadata: Metadata = {
  title: NAV_ITEMS.VIDEOS,
};

export default function VideosPage() {
  return (
    <Container size="sm">
      <Section>
        <PageHeader
          title={NAV_ITEMS.VIDEOS}
          description="Longer-form video workflows beyond short reels."
        />
        <ComingSoonModule
          title={NAV_ITEMS.VIDEOS}
          description="Video pipelines will extend the existing render service contracts."
        />
      </Section>
    </Container>
  );
}
