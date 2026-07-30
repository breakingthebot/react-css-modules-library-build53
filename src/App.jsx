// src/App.jsx
// Main Interactive Component Playground showcasing Scoped CSS Modules Components.
// Created: 2026-07-29

import React, { useState } from 'react';
import styles from './App.module.css';
import { Button } from './components/Button/Button';
import { Card } from './components/Card/Card';
import { Badge } from './components/Badge/Badge';
import { Accordion } from './components/Accordion/Accordion';
import { Toast } from './components/Toast/Toast';
import { Modal } from './components/Modal/Modal';
import { Input } from './components/Input/Input';
import { Toggle } from './components/Toggle/Toggle';
import { Progress } from './components/Progress/Progress';
import { Skeleton } from './components/Skeleton/Skeleton';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toggleState1, setToggleState1] = useState(true);
  const [toggleState2, setToggleState2] = useState(false);
  const [inputValue, setInputValue] = useState('acme-corp');
  const [inputError, setInputError] = useState('');
  const [progressVal, setProgressVal] = useState(68);

  const [toasts, setToasts] = useState([
    { id: 1, type: 'success', title: 'CSS Modules Loaded', message: 'All class names are scoped with zero global collision risk!' },
  ]);

  const addToast = (type, title, message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, type, title, message }]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const faqItems = [
    {
      title: 'How do CSS Modules eliminate global CSS scope collisions?',
      content: 'Vite and CSS Modules automatically append unique base64 hashes (e.g. Button__button___3a1b) to class names during build time, ensuring two components with identical class names never collide.',
    },
    {
      title: 'Can CSS Modules components consume shared design tokens?',
      content: 'Yes! Shared CSS variables (tokens) defined in global.css (such as --color-brand, --radius-md) can be referenced cleanly inside module stylesheets without polluting global selector namespace.',
    },
    {
      title: 'Are CSS Modules compatible with server-side rendering (SSR)?',
      content: 'Absolutely. CSS Modules compile into regular static CSS files and class strings, making them zero-runtime and fully SSR compatible across frameworks like Next.js and Remix.',
    },
  ];

  return (
    <div className={styles.app}>
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.badgeStrip}>
          <Badge variant="info" hasDot isPulse>Scoped CSS Architecture</Badge>
          <Badge variant="success">v1.3.0 Release</Badge>
          <Badge variant="neutral">Vite + React</Badge>
        </div>
        <h1 className={styles.title}>ModulaUI Component Library</h1>
        <p className={styles.subtitle}>
          A modern, modular React UI library built with <strong>scoped CSS Modules (`*.module.css`)</strong>. Zero class collisions, zero runtime overhead, 100% style isolation.
        </p>
      </header>

      {/* SECTION 1: BUTTON COMPONENT Showcase */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>1. Scoped Button Component (`Button.module.css`)</h2>
          <Badge variant="neutral">Interactive Playground</Badge>
        </div>

        <div className={styles.buttonRow}>
          <Button variant="primary" onClick={() => addToast('success', 'Primary Action', 'Clicked primary button!')}>
            Primary Action
          </Button>

          <Button variant="secondary" onClick={() => addToast('info', 'Secondary Action', 'Clicked secondary button!')}>
            Secondary Action
          </Button>

          <Button variant="danger" onClick={() => addToast('danger', 'Destructive Action', 'Triggered dangerous action!')}>
            Danger Action
          </Button>

          <Button variant="outline" onClick={() => addToast('warning', 'Outline Action', 'Clicked outline button!')}>
            Outline Button
          </Button>

          <Button variant="ghost">Ghost Button</Button>
          <Button variant="primary" isLoading>Loading State</Button>
        </div>
      </section>

      {/* SECTION 2: PROGRESS BAR & SKELETON LOADERS (NEW v1.3.0) */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>2. Scoped Progress Bar &amp; Skeleton Loader (`Progress.module.css`, `Skeleton.module.css`)</h2>
          <Badge variant="info" hasDot isPulse>NEW v1.3.0</Badge>
        </div>

        <div className={styles.grid}>
          {/* Progress Card */}
          <Card>
            <Card.Header
              title="Progress Bar Indicators"
              subtitle="Animated progress bars with gradient fills"
              action={
                <Button size="sm" variant="outline" onClick={() => setProgressVal((p) => (p >= 100 ? 10 : p + 15))}>
                  Simulate Load
                </Button>
              }
            />
            <Card.Body>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Progress label="CPU Allocation Capacity" value={progressVal} showValue variant="gradient" animated />
                <Progress label="RAM Memory Usage" value={84} showValue variant="warning" />
                <Progress label="NVMe Storage I/O" value={45} showValue variant="brand" size="sm" />
                <Progress label="Edge CDN Bandwidth Saturation" value={92} showValue variant="danger" size="lg" animated />
              </div>
            </Card.Body>
          </Card>

          {/* Skeleton Loader Card */}
          <Card>
            <Card.Header title="Shimmer Skeleton Loader" subtitle="Placeholder shimmer animation during async fetches" />
            <Card.Body>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', itemsCenter: 'center', gap: '12px' }}>
                  <Skeleton variant="circular" width={44} height={44} />
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <Skeleton variant="text" width="60%" height={14} />
                    <Skeleton variant="text" width="40%" height={10} />
                  </div>
                </div>

                <Skeleton variant="rectangular" height={80} />
                <Skeleton variant="text" count={2} />
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>

      {/* SECTION 3: FORM INPUT & TOGGLE CONTROLS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>3. Scoped Form Inputs &amp; Toggle Switch (`Input.module.css`, `Toggle.module.css`)</h2>
          <Badge variant="neutral">Form Controls</Badge>
        </div>

        <div className={styles.grid}>
          {/* Card Form Controls */}
          <Card>
            <Card.Header title="Form Control Group" subtitle="Input with addon prepends and error states" />
            <Card.Body>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Input
                  label="Tenant Endpoint Handle"
                  addon="https://"
                  placeholder="enter-tenant-slug"
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    if (e.target.value.length < 3) {
                      setInputError('Tenant handle must be at least 3 characters.');
                    } else {
                      setInputError('');
                    }
                  }}
                  error={inputError}
                  helperText="Unique domain prefix for cluster routing."
                  required
                />

                <Input
                  label="Search Telemetry Logs"
                  icon="🔍"
                  placeholder="Search error codes or request IDs..."
                />
              </div>
            </Card.Body>
          </Card>

          {/* Toggle Switches */}
          <Card>
            <Card.Header title="Toggle Switch Controls" subtitle="Interactive switches with active state tracks" />
            <Card.Body>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Toggle
                  label="Automated CDN Auto-Scaling"
                  description="Scale worker pods when CPU exceeds 80% load"
                  checked={toggleState1}
                  onChange={(val) => {
                    setToggleState1(val);
                    addToast('info', 'Auto-Scaling Updated', `CDN Auto-scaling set to ${val ? 'ON' : 'OFF'}`);
                  }}
                />

                <Toggle
                  label="Slack Incident Webhooks"
                  description="Stream fatal log crashes directly to #ops-alerts"
                  checked={toggleState2}
                  onChange={(val) => {
                    setToggleState2(val);
                    addToast('warning', 'Slack Alerts Updated', `Slack alerts set to ${val ? 'ON' : 'OFF'}`);
                  }}
                />
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>

      {/* SECTION 4: MODAL COMPONENT */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>4. Scoped Modal Overlay Component (`Modal.module.css`)</h2>
          <Badge variant="neutral">Overlay System</Badge>
        </div>

        <div className={styles.buttonRow}>
          <Button variant="primary" onClick={() => setIsModalOpen(true)}>
            🪟 Open Accessible Modal Dialog
          </Button>
        </div>
      </section>

      {/* SECTION 5: CARD COMPONENT Showcase */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>5. Scoped Card Component (`Card.module.css`)</h2>
          <Badge variant="neutral">Layout System</Badge>
        </div>

        <div className={styles.grid}>
          {/* Card 1 */}
          <Card interactive>
            <Card.Header
              title="Standard Enterprise Card"
              subtitle="Default surface variant with hover translation"
              action={<Badge variant="success" hasDot>OPERATIONAL</Badge>}
            />
            <Card.Body>
              This card demonstrates sub-component architecture (`Card.Header`, `Card.Body`, `Card.Footer`) using scoped CSS class names.
            </Card.Body>
            <Card.Footer>
              <Button size="sm" variant="ghost">Dismiss</Button>
              <Button size="sm" variant="primary" onClick={() => setIsModalOpen(true)}>Inspect Modal</Button>
            </Card.Footer>
          </Card>

          {/* Card 2 */}
          <Card variant="glass">
            <Card.Header
              title="Glassmorphism Variant"
              subtitle="Backdrop blur and translucent border"
              action={<Badge variant="info">BLUR FX</Badge>}
            />
            <Card.Body>
              Glass cards render frosted acrylic effects using CSS backdrop filters and translucent surface backgrounds.
            </Card.Body>
            <Card.Footer>
              <Button size="sm" variant="outline">Configure</Button>
            </Card.Footer>
          </Card>

          {/* Card 3 */}
          <Card variant="gradient">
            <Card.Header
              title="Gradient Glow Variant"
              subtitle="Indigo gradient styling with subtle glow"
              action={<Badge variant="warning" hasDot isPulse>PREMIUM</Badge>}
            />
            <Card.Body>
              Linear gradient overlays offer high visual hierarchy for highlighted callout cards or pricing tiers.
            </Card.Body>
            <Card.Footer>
              <Button size="sm" variant="danger">Revoke Key</Button>
            </Card.Footer>
          </Card>
        </div>
      </section>

      {/* SECTION 6: BADGE PILL COMPONENT Showcase */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>6. Scoped Badge Pill Component (`Badge.module.css`)</h2>
          <Badge variant="neutral">Status Indicators</Badge>
        </div>

        <div className={styles.buttonRow}>
          <Badge variant="success" hasDot isPulse>Success Status</Badge>
          <Badge variant="warning" hasDot>Warning Alert</Badge>
          <Badge variant="error" hasDot>Error Incident</Badge>
          <Badge variant="info" hasDot isPulse>Info Stream</Badge>
          <Badge variant="neutral">Neutral Tag</Badge>
        </div>
      </section>

      {/* SECTION 7: ACCORDION COMPONENT Showcase */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>7. Scoped Accordion Disclosure Component (`Accordion.module.css`)</h2>
          <Badge variant="neutral">Expandable FAQ</Badge>
        </div>

        <Accordion items={faqItems} />
      </section>

      {/* SECTION 8: TOAST NOTIFICATION STREAM Showcase */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>8. Scoped Toast Notification Stream Component (`Toast.module.css`)</h2>
          <Badge variant="neutral">Floating Alerts</Badge>
        </div>

        <div className={styles.buttonRow}>
          <Button size="sm" variant="outline" onClick={() => addToast('success', 'Deploy Successful', 'Worker pod us-east-1 deployed successfully in 140ms.')}>
            Trigger Success Toast
          </Button>
          <Button size="sm" variant="outline" onClick={() => addToast('warning', 'High Memory Load', 'Cluster memory utilization exceeded 80% threshold.')}>
            Trigger Warning Toast
          </Button>
          <Button size="sm" variant="outline" onClick={() => addToast('danger', 'Connection Timeout', 'Failed to reach secondary DB replica.')}>
            Trigger Danger Toast
          </Button>
        </div>
      </section>

      {/* SCOPED CLASS NAME PROOFS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>🔍 CSS Modules Scope Isolation Proof</h2>
        </div>

        <div className={styles.codeSnippet}>
          {`/* Compiled Output Sample */\n.Progress__bar___82k1 { background: linear-gradient(...); }\n.Skeleton__skeleton___99a2 { animation: shimmer 1.6s infinite; }\n.Input__inputWrapper___1a8z { border-radius: var(--radius-md); }\n.Toggle__switchChecked___88bc { background: linear-gradient(...); }\n.Modal__overlay___4x9a { backdrop-filter: blur(12px); }\n.Button__button___3a1b { background: linear-gradient(...); }`}
        </div>
      </section>

      {/* DEMO MODAL DIALOG */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="🪟 Scoped Modal Component Demo"
        footer={
          <>
            <Button variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={() => { addToast('success', 'Modal Confirmed', 'Action performed successfully!'); setIsModalOpen(false); }}>
              Confirm Action
            </Button>
          </>
        }
      >
        <p>
          This accessible modal dialog is styled using <strong>`Modal.module.css`</strong>. It features backdrop blur overlays, smooth scale-in keyframe animations, and keyboard <kbd style={{ background: '#334155', padding: '2px 6px', borderRadius: '4px' }}>ESC</kbd> dismissal.
        </p>
      </Modal>

      {/* FLOATING TOAST CONTAINER */}
      <div className={styles.toastContainer}>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            type={toast.type}
            title={toast.title}
            message={toast.message}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </div>
  );
}
