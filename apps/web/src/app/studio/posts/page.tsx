import type { Metadata } from 'next';
import { NAV_ITEMS } from '@bitcraftly/shared';
import { Container, PageHeader, Section } from '@bitcraftly/ui';
import { ComingSoonModule } from '@/features/coming-soon/coming-soon-module';

export const metadata: Metadata = {
  title: NAV_ITEMS.POSTS,
};

export default function PostsPage() {
  return (
    <Container size="sm">
      <Section>
        <PageHeader
          title={NAV_ITEMS.POSTS}
          description="Create social posts and captions with AI."
        />
        <ComingSoonModule
          title={NAV_ITEMS.POSTS}
          description="Post generation will plug into the same studio shell and provider layer."
        />
      </Section>
    </Container>
  );
}
