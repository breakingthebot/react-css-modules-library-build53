// src/App.jsx
// Main Interactive Component Playground showcasing Scoped CSS Modules Components.
// Created: 2026-07-30

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
import { Tabs } from './components/Tabs/Tabs';
import { Avatar, AvatarGroup } from './components/Avatar/Avatar';
import { Tooltip } from './components/Tooltip/Tooltip';
import { Select } from './components/Select/Select';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toggleState1, setToggleState1] = useState(true);
  const [toggleState2, setToggleState2] = useState(false);
  const [inputValue, setInputValue] = useState('acme-corp');
  const [inputError, setInputError] = useState('');
  const [progressVal, setProgressVal] = useState(68);
  const [selectedRegion, setSelectedRegion] = useState('us-east-1');
  const [selectedRole, setSelectedRole] = useState('devops');

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

  const regionOptions = [
    { value: 'us-east-1', label: 'us-east-1 (N. Virginia Edge)', icon: '🇺🇸' },
    { value: 'eu-west-1', label: 'eu-west-1 (Frankfurt Edge)', icon: '🇩🇪' },
    { value: 'ap-east-1', label: 'ap-east-1 (Tokyo Edge)', icon: '🇯🇵' },
    { value: 'sa-east-1', label: 'sa-east-1 (São Paulo Edge)', icon: '🇧🇷', disabled: true },
  ];

  const roleOptions = [
    { value: 'admin', label: 'Super Admin (Full Access)', icon: '👑' },
    { value: 'devops', label: 'DevOps Engineer', icon: '🛠️' },
    { value: 'security', label: 'Security Auditor', icon: '🛡️' },
    { value: 'billing', label: 'Billing Manager', icon: '💳' },
  ];

  const demoTabs = [
    {
      id: 'tab1',
      label: 'Infrastructure Health',
      icon: '📊',
      badge: <Badge variant="success" hasDot>99.99%</Badge>,
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <p>Global CDN edge clusters operating at nominal latency across 14 edge locations.</p>
          <Progress label="Overall System SLA Health" value={99} showValue variant="gradient" animated />
        </div>
      ),
    },
    {
      id: 'tab2',
      label: 'Security & OAuth Scopes',
      icon: '🔐',
      badge: <Badge variant="info">3 Active Keys</Badge>,
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <p>Active secret API keys and OAuth 2.0 bearer access scopes for dev environment.</p>
          <Input label="Secret Production API Key" value="ak_prod_9918231x... (Encrypted)" readOnly addon="KEY" />
        </div>
      ),
    },
    {
      id: 'tab3',
      label: 'Archival Storage Logs',
      icon: '📜',
      badge: <Badge variant="neutral">1.8TB</Badge>,
      content: (
        <p>Telemetry data retention set to 90 days with automated NVMe vault synchronization.</p>
      ),
    },
  ];

  return (
    <div className={styles.app}>
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.badgeStrip}>
          <Badge variant="info" hasDot isPulse>Scoped CSS Architecture</Badge>
          <Badge variant="success">v1.7.0 Release</Badge>
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
          <Tooltip content="Primary CTA button with linear gradient styling" position="top">
            <Button variant="primary" onClick={() => addToast('success', 'Primary Action', 'Clicked primary button!')}>
              Primary Action
            </Button>
          </Tooltip>

          <Tooltip content="Secondary surface button with subtle border" position="top">
            <Button variant="secondary" onClick={() => addToast('info', 'Secondary Action', 'Clicked secondary button!')}>
              Secondary Action
            </Button>
          </Tooltip>

          <Tooltip content="⚠️ Irreversible dangerous action trigger" position="top">
            <Button variant="danger" onClick={() => addToast('danger', 'Destructive Action', 'Triggered dangerous action!')}>
              Danger Action
            </Button>
          </Tooltip>

          <Button variant="outline" onClick={() => addToast('warning', 'Outline Action', 'Clicked outline button!')}>
            Outline Button
          </Button>

          <Button variant="ghost">Ghost Button</Button>
          <Button variant="primary" isLoading>Loading State</Button>
        </div>
      </section>

      {/* SECTION 2: DROPDOWN SELECT MENU (NEW v1.7.0) */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>2. Scoped Dropdown Select Menu (`Select.module.css`)</h2>
          <Badge variant="info" hasDot isPulse>NEW v1.7.0</Badge>
        </div>

        <div className={styles.grid}>
          {/* Select 1 */}
          <Card>
            <Card.Header title="Target Cluster Endpoint" subtitle="Custom dropdown with country flags & search" />
            <Card.Body>
              <Select
                label="Primary Deployment Region"
                options={regionOptions}
                value={selectedRegion}
                onChange={(val) => {
                  setSelectedRegion(val);
                  addToast('info', 'Region Changed', `Deployed region updated to ${val}`);
                }}
                searchable
              />
            </Card.Body>
          </Card>

          {/* Select 2 */}
          <Card>
            <Card.Header title="RBAC Permission Scope" subtitle="Select menu with custom icons & checkmarks" />
            <Card.Body>
              <Select
                label="Assign Security Role"
                options={roleOptions}
                value={selectedRole}
                onChange={(val) => {
                  setSelectedRole(val);
                  addToast('success', 'Role Updated', `User permission role set to ${val}`);
                }}
              />
            </Card.Body>
          </Card>
        </div>
      </section>

      {/* SECTION 3: TOOLTIP HOVER POPUP */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>3. Scoped Tooltip Hover Popup Component (`Tooltip.module.css`)</h2>
          <Badge variant="neutral">Overlay System</Badge>
        </div>

        <div className={styles.buttonRow}>
          <Tooltip content="Top positioned tooltip popup" position="top">
            <Button variant="outline">Hover Top</Button>
          </Tooltip>

          <Tooltip content="Bottom positioned tooltip popup" position="bottom">
            <Button variant="outline">Hover Bottom</Button>
          </Tooltip>

          <Tooltip content="Left positioned tooltip popup" position="left">
            <Button variant="outline">Hover Left</Button>
          </Tooltip>

          <Tooltip content="Right positioned tooltip popup" position="right">
            <Button variant="outline">Hover Right</Button>
          </Tooltip>
        </div>
      </section>

      {/* SECTION 4: AVATAR & AVATAR GROUP */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>4. Scoped Avatar &amp; Avatar Group Component (`Avatar.module.css`)</h2>
          <Badge variant="neutral">User Profiles</Badge>
        </div>

        <div className={styles.grid}>
          {/* Status Avatars */}
          <Card>
            <Card.Header title="User Avatar Badges" subtitle="Initials fallback and real-time status dots" />
            <Card.Body>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <Tooltip content="Jane Doe (Online)" position="top">
                  <Avatar name="Jane Doe" size="lg" status="online" />
                </Tooltip>
                <Tooltip content="Alex Smith (Busy)" position="top">
                  <Avatar name="Alex Smith" size="lg" status="busy" />
                </Tooltip>
                <Tooltip content="Charlie Brown (Away)" position="top">
                  <Avatar name="Charlie Brown" size="lg" status="away" />
                </Tooltip>
                <Tooltip content="David Lee (Offline)" position="top">
                  <Avatar name="David Lee" size="lg" status="offline" />
                </Tooltip>
              </div>
            </Card.Body>
          </Card>

          {/* Avatar Group Stack */}
          <Card>
            <Card.Header title="Stacked Avatar Group" subtitle="Overlapping team member avatars with +N counter" />
            <Card.Body>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <AvatarGroup max={4} size="lg">
                  <Avatar name="Jane Doe" status="online" />
                  <Avatar name="Alex Smith" status="busy" />
                  <Avatar name="Charlie Brown" status="away" />
                  <Avatar name="David Lee" status="offline" />
                  <Avatar name="Eva Martinez" />
                  <Avatar name="Frank Miller" />
                </AvatarGroup>
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>

      {/* SECTION 5: TABS NAVIGATION BAR */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>5. Scoped Tabs Navigation Bar Component (`Tabs.module.css`)</h2>
          <Badge variant="neutral">Navigation System</Badge>
        </div>

        <div className={styles.grid}>
          {/* Underline Variant */}
          <Card>
            <Card.Header title="Underline Tabs Variant" subtitle="Default border indicator with badge pills" />
            <Card.Body>
              <Tabs tabs={demoTabs} variant="underline" onChange={(id) => addToast('info', 'Tab Switch', `Switched to ${id}`)} />
            </Card.Body>
          </Card>

          {/* Segmented Variant */}
          <Card>
            <Card.Header title="Segmented Tabs Variant" subtitle="Pill container style tab switcher" />
            <Card.Body>
              <Tabs tabs={demoTabs} variant="segmented" defaultActiveId="tab2" />
            </Card.Body>
          </Card>
        </div>
      </section>

      {/* SECTION 6: PROGRESS BAR & SKELETON LOADERS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>6. Scoped Progress Bar &amp; Skeleton Loader (`Progress.module.css`, `Skeleton.module.css`)</h2>
          <Badge variant="neutral">Feedback System</Badge>
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

      {/* SECTION 7: FORM INPUT & TOGGLE CONTROLS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>7. Scoped Form Inputs &amp; Toggle Switch (`Input.module.css`, `Toggle.module.css`)</h2>
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

      {/* SECTION 8: MODAL COMPONENT */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>8. Scoped Modal Overlay Component (`Modal.module.css`)</h2>
          <Badge variant="neutral">Overlay System</Badge>
        </div>

        <div className={styles.buttonRow}>
          <Button variant="primary" onClick={() => setIsModalOpen(true)}>
            🪟 Open Accessible Modal Dialog
          </Button>
        </div>
      </section>

      {/* SECTION 9: CARD COMPONENT Showcase */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>9. Scoped Card Component (`Card.module.css`)</h2>
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

      {/* SECTION 10: BADGE PILL COMPONENT Showcase */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>10. Scoped Badge Pill Component (`Badge.module.css`)</h2>
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

      {/* SECTION 11: ACCORDION COMPONENT Showcase */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>11. Scoped Accordion Disclosure Component (`Accordion.module.css`)</h2>
          <Badge variant="neutral">Expandable FAQ</Badge>
        </div>

        <Accordion items={faqItems} />
      </section>

      {/* SECTION 12: TOAST NOTIFICATION STREAM Showcase */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>12. Scoped Toast Notification Stream Component (`Toast.module.css`)</h2>
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
          {`/* Compiled Output Sample */\n.Select__dropdown___88z1 { position: absolute; background: #0f172a; }\n.Select__optionSelected___33a2 { background: var(--color-brand-light); }\n.Tooltip__tooltip___77a1 { position: absolute; animation: tooltipFade 0.2s; }\n.Avatar__avatar___44x1 { border-radius: 50%; }`}
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
