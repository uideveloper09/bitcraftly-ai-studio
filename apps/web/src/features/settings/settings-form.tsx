'use client';

import { useState } from 'react';
import {
  REEL_DURATIONS,
  REEL_LANGUAGES,
  REEL_STYLES,
  REEL_VOICES,
  UI_COPY,
} from '@bitcraftly/shared';
import {
  Button,
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  Field,
  Input,
  Select,
} from '@bitcraftly/ui';

/**
 * Mock settings form — local state only.
 */
export function SettingsForm() {
  const [saved, setSaved] = useState(false);
  const [theme, setTheme] = useState('system');
  const [language, setLanguage] = useState('en');
  const [notifications, setNotifications] = useState('enabled');
  const [storagePlan, setStoragePlan] = useState('standard');
  const [displayName, setDisplayName] = useState('Demo User');

  return (
    <div className="flex flex-col gap-[var(--space-6)]">
      <Card>
        <CardHeader>
          <div>
            <CardTitle>{UI_COPY.PROFILE}</CardTitle>
            <CardDescription>Workspace identity (mock)</CardDescription>
          </div>
        </CardHeader>
        <Field label={UI_COPY.DISPLAY_NAME} htmlFor="settings-display-name">
          <Input
            id="settings-display-name"
            value={displayName}
            onChange={(event) => {
              setDisplayName(event.target.value);
              setSaved(false);
            }}
          />
        </Field>
      </Card>

      <Card>
        <CardHeader>
          <div>
            <CardTitle>{UI_COPY.THEME}</CardTitle>
            <CardDescription>Appearance preference</CardDescription>
          </div>
        </CardHeader>
        <Field label={UI_COPY.THEME} htmlFor="settings-theme">
          <Select
            id="settings-theme"
            options={[
              { value: 'system', label: 'System' },
              { value: 'light', label: 'Light' },
              { value: 'dark', label: 'Dark' },
            ]}
            value={theme}
            onChange={(event) => {
              setTheme(event.target.value);
              setSaved(false);
            }}
          />
        </Field>
      </Card>

      <Card>
        <CardHeader>
          <div>
            <CardTitle>{UI_COPY.LANGUAGE}</CardTitle>
            <CardDescription>Default generation language</CardDescription>
          </div>
        </CardHeader>
        <div className="grid gap-[var(--space-4)] sm:grid-cols-2">
          <Field label={UI_COPY.LANGUAGE} htmlFor="settings-language">
            <Select
              id="settings-language"
              options={REEL_LANGUAGES}
              value={language}
              onChange={(event) => {
                setLanguage(event.target.value);
                setSaved(false);
              }}
            />
          </Field>
          <Field label={UI_COPY.STYLE} htmlFor="settings-style">
            <Select id="settings-style" options={REEL_STYLES} defaultValue="cinematic" />
          </Field>
          <Field label={UI_COPY.VOICE} htmlFor="settings-voice">
            <Select id="settings-voice" options={REEL_VOICES} defaultValue="nova" />
          </Field>
          <Field label={UI_COPY.DURATION} htmlFor="settings-duration">
            <Select id="settings-duration" options={REEL_DURATIONS} defaultValue={30} />
          </Field>
        </div>
      </Card>

      <Card>
        <CardHeader>
          <div>
            <CardTitle>{UI_COPY.NOTIFICATIONS_PREF}</CardTitle>
            <CardDescription>Email and in-app alerts</CardDescription>
          </div>
        </CardHeader>
        <Field label={UI_COPY.NOTIFICATIONS_PREF} htmlFor="settings-notifications">
          <Select
            id="settings-notifications"
            options={[
              { value: 'enabled', label: 'Enabled' },
              { value: 'mentions', label: 'Mentions only' },
              { value: 'disabled', label: 'Disabled' },
            ]}
            value={notifications}
            onChange={(event) => {
              setNotifications(event.target.value);
              setSaved(false);
            }}
          />
        </Field>
      </Card>

      <Card>
        <CardHeader>
          <div>
            <CardTitle>{UI_COPY.STORAGE}</CardTitle>
            <CardDescription>Mock workspace storage plan</CardDescription>
          </div>
        </CardHeader>
        <Field label={UI_COPY.STORAGE} htmlFor="settings-storage">
          <Select
            id="settings-storage"
            options={[
              { value: 'standard', label: 'Standard · 100 GB' },
              { value: 'pro', label: 'Pro · 1 TB' },
              { value: 'enterprise', label: 'Enterprise · Custom' },
            ]}
            value={storagePlan}
            onChange={(event) => {
              setStoragePlan(event.target.value);
              setSaved(false);
            }}
          />
        </Field>
      </Card>

      <Card>
        <CardHeader>
          <div>
            <CardTitle>{UI_COPY.ABOUT}</CardTitle>
            <CardDescription>Bitcraftly AI Studio · Phase UI foundation</CardDescription>
          </div>
        </CardHeader>
        <dl className="grid gap-[var(--space-3)] text-[var(--text-sm)] sm:grid-cols-2">
          <div>
            <dt className="text-[var(--color-fg-muted)]">Version</dt>
            <dd className="font-medium">0.1.0</dd>
          </div>
          <div>
            <dt className="text-[var(--color-fg-muted)]">Environment</dt>
            <dd className="font-medium">Development</dd>
          </div>
        </dl>
      </Card>

      <div className="flex items-center gap-[var(--space-3)]">
        <Button
          type="button"
          onClick={() => {
            setSaved(true);
          }}
        >
          {UI_COPY.SAVE}
        </Button>
        {saved ? (
          <p className="text-[var(--color-fg-muted)] text-[var(--text-sm)]" role="status">
            {UI_COPY.SETTINGS_SAVED_MOCK}
          </p>
        ) : null}
      </div>
    </div>
  );
}
