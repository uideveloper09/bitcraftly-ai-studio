import type { Metadata } from 'next';
import { Container, PageHeader, Section } from '@bitcraftly/ui';
import { ReelGeneratorForm } from '@/features/reels/reel-generator-form';

export const metadata: Metadata = {
  title: 'AI Reels',
};

export default function ReelsPage() {
  return (
    <Container>
      <Section>
        <PageHeader
          title="AI Reel Generator"
          description="Configure topic, style, voice, and duration — then preview the pipeline UI."
        />
        <ReelGeneratorForm />
      </Section>
    </Container>
  );
}
