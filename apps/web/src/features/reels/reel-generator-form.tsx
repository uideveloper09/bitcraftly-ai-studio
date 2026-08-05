'use client';

import { useState } from 'react';
import {
  REEL_ASPECT_RATIOS,
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
import { ReelPreviewPanel, type ReelPreviewState } from '@/features/reels/reel-preview-panel';

export interface ReelFormValues {
  topic: string;
  language: string;
  style: string;
  voice: string;
  duration: number;
  aspectRatio: string;
}

const DEFAULT_VALUES: ReelFormValues = {
  topic: '',
  language: 'en',
  style: 'cinematic',
  voice: 'nova',
  duration: 30,
  aspectRatio: '9:16',
};

const IDLE_PREVIEW: ReelPreviewState = {
  status: 'Idle',
  progress: 0,
  steps: [
    { id: 'script', label: 'Script', done: false },
    { id: 'images', label: 'Images', done: false },
    { id: 'voice', label: 'Voice', done: false },
    { id: 'render', label: 'Render', done: false },
  ],
};

/**
 * UI-only reel generator form. Generate updates local preview state — no AI/API.
 */
export function ReelGeneratorForm() {
  const [values, setValues] = useState<ReelFormValues>(DEFAULT_VALUES);
  const [preview, setPreview] = useState<ReelPreviewState>(IDLE_PREVIEW);

  function handleReset() {
    setValues(DEFAULT_VALUES);
    setPreview(IDLE_PREVIEW);
  }

  function handleGenerate() {
    if (values.topic.trim().length < 3) return;

    setPreview({
      status: 'Queued (preview)',
      progress: 35,
      topic: values.topic.trim(),
      steps: [
        { id: 'script', label: 'Script', done: true },
        { id: 'images', label: 'Images', done: true },
        { id: 'voice', label: 'Voice', done: false },
        { id: 'render', label: 'Render', done: false },
      ],
    });
  }

  return (
    <div className="grid gap-[var(--space-6)] lg:grid-cols-5">
      <Card className="lg:col-span-2">
        <CardHeader>
          <div>
            <CardTitle>AI Reel Generator</CardTitle>
            <CardDescription>
              Configure inputs. Generation is UI-only in this phase.
            </CardDescription>
          </div>
        </CardHeader>

        <form
          className="flex flex-col gap-[var(--space-4)]"
          onSubmit={(event) => {
            event.preventDefault();
            handleGenerate();
          }}
        >
          <Field label={UI_COPY.TOPIC} htmlFor="reel-topic">
            <Input
              id="reel-topic"
              name="topic"
              required
              minLength={3}
              maxLength={200}
              placeholder="e.g. The future of remote work"
              value={values.topic}
              onChange={(event) =>
                setValues((current) => ({ ...current, topic: event.target.value }))
              }
            />
          </Field>

          <Field label={UI_COPY.LANGUAGE} htmlFor="reel-language">
            <Select
              id="reel-language"
              options={REEL_LANGUAGES}
              value={values.language}
              onChange={(event) =>
                setValues((current) => ({ ...current, language: event.target.value }))
              }
            />
          </Field>

          <Field label={UI_COPY.STYLE} htmlFor="reel-style">
            <Select
              id="reel-style"
              options={REEL_STYLES}
              value={values.style}
              onChange={(event) =>
                setValues((current) => ({ ...current, style: event.target.value }))
              }
            />
          </Field>

          <Field label={UI_COPY.VOICE} htmlFor="reel-voice">
            <Select
              id="reel-voice"
              options={REEL_VOICES}
              value={values.voice}
              onChange={(event) =>
                setValues((current) => ({ ...current, voice: event.target.value }))
              }
            />
          </Field>

          <Field label={UI_COPY.DURATION} htmlFor="reel-duration">
            <Select
              id="reel-duration"
              options={REEL_DURATIONS}
              value={values.duration}
              onChange={(event) =>
                setValues((current) => ({
                  ...current,
                  duration: Number(event.target.value),
                }))
              }
            />
          </Field>

          <Field label={UI_COPY.ASPECT_RATIO} htmlFor="reel-aspect">
            <Select
              id="reel-aspect"
              options={REEL_ASPECT_RATIOS}
              value={values.aspectRatio}
              onChange={(event) =>
                setValues((current) => ({
                  ...current,
                  aspectRatio: event.target.value,
                }))
              }
            />
          </Field>

          <div className="flex flex-wrap gap-[var(--space-2)] pt-[var(--space-2)]">
            <Button type="submit">{UI_COPY.GENERATE_REEL}</Button>
            <Button type="button" variant="outline" onClick={handleReset}>
              {UI_COPY.RESET}
            </Button>
          </div>
        </form>
      </Card>

      <div className="lg:col-span-3">
        <ReelPreviewPanel preview={preview} />
      </div>
    </div>
  );
}
