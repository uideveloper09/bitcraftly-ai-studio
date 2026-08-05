import type { Metadata } from 'next';
import { NAV_ITEMS } from '@bitcraftly/shared';
import { Container, PageHeader, Section } from '@bitcraftly/ui';
import { SettingsForm } from '@/features/settings/settings-form';
import { AppShell } from '@/components/layout/app-shell';

export const metadata: Metadata = {
  title: NAV_ITEMS.SETTINGS,
};

export default function SettingsPage() {
  return (
    <AppShell>
      <Container size="sm">
        <Section>
          <PageHeader
            title={NAV_ITEMS.SETTINGS}
            description="Theme, language, notifications, and workspace preferences."
          />
          <SettingsForm />
        </Section>
      </Container>
    </AppShell>
  );
}
