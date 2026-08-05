import type { Metadata } from 'next';
import { NAV_ITEMS } from '@bitcraftly/shared';
import { Container, PageHeader, Section } from '@bitcraftly/ui';
import { ComingSoonModule } from '@/features/coming-soon/coming-soon-module';

export const metadata: Metadata = {
  title: NAV_ITEMS.IMAGES,
};

export default function ImagesPage() {
  return (
    <Container size="sm">
      <Section>
        <PageHeader
          title={NAV_ITEMS.IMAGES}
          description="Generate brand-ready images and creatives."
        />
        <ComingSoonModule
          title={NAV_ITEMS.IMAGES}
          description="Image generation will reuse the shared AI provider interfaces."
        />
      </Section>
    </Container>
  );
}
