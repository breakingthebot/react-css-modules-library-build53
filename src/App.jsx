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
import { Alert } from './components/Alert/Alert';
import { Slider } from './components/Slider/Slider';
import { Breadcrumb } from './components/Breadcrumb/Breadcrumb';
import { Drawer } from './components/Drawer/Drawer';
import { Table } from './components/Table/Table';
import { SegmentedControl } from './components/SegmentedControl/SegmentedControl';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [toggleState1, setToggleState1] = useState(true);
  const [toggleState2, setToggleState2] = useState(false);
  const [inputValue, setInputValue] = useState('acme-corp');
  const [inputError, setInputError] = useState('');
  const [progressVal, setProgressVal] = useState(68);
  const [selectedRegion, setSelectedRegion] = useState('us-east-1');
  const [selectedRole, setSelectedRole] = useState('devops');
  const [rateLimitVal, setRateLimitVal] = useState(5000);
  const [scalingPodsVal, setScalingPodsVal] = useState(16);
  const [viewMode, setViewMode] = useState('grid');
  const [envScope, setEnvScope] = useState('production');

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

  const viewModeOptions = [
    { value: 'grid', label: 'Grid View', icon: '🎛️' },
    { value: 'list', label: 'List View', icon: '📜' },
    { value: 'kanban', label: 'Kanban', icon: '📊' },
  ];

  const envScopeOptions = [
    { value: 'development', label: 'Dev' },
    { value: 'staging', label: 'Staging' },
    { value: 'production', label: 'Production' },
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
  ];

  const breadcrumbItems1 = [
    { label: 'Home', icon: '🏠', href: '#' },
    { label: 'Infrastructure', icon: '⚡', href: '#' },
    { label: 'us-east-1 Cluster', icon: '🌐', href: '#' },
    { label: 'Worker Pod Settings', active: true },
  ];

  const clusterTableColumns = [
    {
      key: 'name',
      label: 'Pod Cluster',
      sortable: true,
      render: (val) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Avatar name={val} size="sm" />
          <span style={{ fontWeight: 600 }}>{val}</span>
        </div>
      ),
    },
    { key: 'region', label: 'Region', sortable: true },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (val) => (
        <Badge variant={val === 'Operational' ? 'success' : val === 'Degraded' ? 'warning' : 'error'} hasDot>
          {val}
        </Badge>
      ),
    },
    { key: 'load', label: 'CPU Load', sortable: true },
    {
      key: 'actions',
      label: 'Action',
      render: (_, row) => (
        <Button size="sm" variant="ghost" onClick={() => addToast('info', 'Inspecting Pod', `Inspecting ${row.name}`)}>
          Inspect
        </Button>
      ),
    },
  ];

  const clusterTableData = [
    { id: 1, name: 'pod-worker-us-east-1a', region: 'us-east-1', status: 'Operational', load: '42%' },
    { id: 2, name: 'pod-worker-eu-west-1b', region: 'eu-west-1', status: 'Operational', load: '68%' },
    { id: 3, name: 'pod-worker-ap-east-1c', region: 'ap-east-1', status: 'Degraded', load: '89%' },
    { id: 4, name: 'pod-worker-sa-east-1d', region: 'sa-east-1', status: 'Offline', load: '0%' },
  ];

  return (
    <div className={styles.app}>
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.badgeStrip}>
          <Badge variant="info" hasDot isPulse>Scoped CSS Architecture</Badge>
          <Badge variant="success">v2.3.0 Release</Badge>
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

      {/* SECTION 2: SEGMENTED CONTROL SWITCHER (NEW v2.3.0) */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>2. Scoped Segmented Control Switcher (`SegmentedControl.module.css`)</h2>
          <Badge variant="info" hasDot isPulse>NEW v2.3.0</Badge>
        </div>

        <div className={styles.grid}>
          <Card>
            <Card.Header title="Layout View Mode Switcher" subtitle="Icon & text segmented pill control" />
            <Card.Body>
              <SegmentedControl
                options={viewModeOptions}
                value={viewMode}
                onChange={(val) => {
                  setViewMode(val);
                  addToast('info', 'View Mode Changed', `Switched layout view mode to ${val}`);
                }}
              />
            </Card.Body>
          </Card>

          <Card>
            <Card.Header title="Environment Scope Switcher" subtitle="Full width segmented control" />
            <Card.Body>
              <SegmentedControl
                options={envScopeOptions}
                value={envScope}
                onChange={(val) => {
                  setEnvScope(val);
                  addToast('success', 'Environment Switched', `Active target environment set to ${val}`);
                }}
                fullWidth
              />
            </Card.Body>
          </Card>
        </div>
      </section>

      {/* SECTION 3: DATA TABLE & PAGINATION */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>3. Scoped Data Table &amp; Pagination (`Table.module.css`)</h2>
          <Badge variant="neutral">Data Display</Badge>
        </div>

        <Card>
          <Card.Header title="Cluster Pod Node Telemetry" subtitle="Sortable column headers with custom cell rendering & page controls" />
          <Card.Body>
            <Table columns={clusterTableColumns} data={clusterTableData} pageSize={4} />
          </Card.Body>
        </Card>
      </section>

      {/* SECTION 4: SLIDE-OVER DRAWER PANEL */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>4. Scoped Slide-Over Drawer Panel (`Drawer.module.css`)</h2>
          <Badge variant="neutral">Overlay System</Badge>
        </div>

        <div className={styles.buttonRow}>
          <Button variant="primary" onClick={() => setIsDrawerOpen(true)}>
            ⚙️ Open Cluster Config Slide-Over Drawer
          </Button>
        </div>
      </section>

      {/* SECTION 5: BREADCRUMB NAVIGATION TRAIL */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>5. Scoped Breadcrumb Navigation Trail (`Breadcrumb.module.css`)</h2>
          <Badge variant="neutral">Navigation System</Badge>
        </div>

        <div className={styles.grid}>
          <Card>
            <Card.Header title="Breadcrumbs with Icons" subtitle="Icon prepends & slash separator" />
            <Card.Body>
              <Breadcrumb items={breadcrumbItems1} separator="/" />
            </Card.Body>
          </Card>
        </div>
      </section>

      {/* SECTION 6: SLIDER RANGE CONTROL */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>6. Scoped Slider Range Control (`Slider.module.css`)</h2>
          <Badge variant="neutral">Form Controls</Badge>
        </div>

        <div className={styles.grid}>
          {/* Slider 1 */}
          <Card>
            <Card.Header title="API Request Rate Limit" subtitle="Dynamic value track fill with range handle" />
            <Card.Body>
              <Slider
                label="Per-Tenant Rate Limit (Req / Sec)"
                min={1000}
                max={10000}
                step={500}
                value={rateLimitVal}
                unit="req/s"
                onChange={(val) => setRateLimitVal(val)}
              />
            </Card.Body>
          </Card>

          {/* Slider 2 */}
          <Card>
            <Card.Header title="Max Cluster Worker Pods" subtitle="Auto-scaling pod allocation control" />
            <Card.Body>
              <Slider
                label="Max Scaled Pod Instances"
                min={1}
                max={64}
                step={1}
                value={scalingPodsVal}
                unit="Pods"
                onChange={(val) => setScalingPodsVal(val)}
              />
            </Card.Body>
          </Card>
        </div>
      </section>

      {/* SECTION 7: ALERT CALLOUT BANNERS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>7. Scoped Alert Callout Banner (`Alert.module.css`)</h2>
          <Badge variant="neutral">Status Banners</Badge>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Alert
            variant="info"
            title="System Maintenance Scheduled"
            onClose={() => addToast('info', 'Alert Dismissed', 'Dismissed Info Alert')}
          >
            Routine database indexing scheduled for 02:00 UTC. Zero downtime expected across us-east-1 cluster.
          </Alert>

          <Alert
            variant="success"
            title="Deployment Complete"
            action={
              <Button size="sm" variant="primary" onClick={() => addToast('success', 'Deployment Verified', 'SLA 99.99% confirmed')}>
                View Telemetry Log
              </Button>
            }
          >
            Worker pods scaled +4 instances in 140ms. All health checks reported OK.
          </Alert>
        </div>
      </section>

      {/* SECTION 8: DROPDOWN SELECT MENU */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>8. Scoped Dropdown Select Menu (`Select.module.css`)</h2>
          <Badge variant="neutral">Form Controls</Badge>
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

      {/* SECTION 9: TOOLTIP HOVER POPUP */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>9. Scoped Tooltip Hover Popup Component (`Tooltip.module.css`)</h2>
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

      {/* SECTION 10: AVATAR & AVATAR GROUP */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>10. Scoped Avatar &amp; Avatar Group Component (`Avatar.module.css`)</h2>
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
                </AvatarGroup>
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>

      {/* SECTION 11: TABS NAVIGATION BAR */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>11. Scoped Tabs Navigation Bar Component (`Tabs.module.css`)</h2>
          <Badge variant="neutral">Navigation System</Badge>
        </div>

        <div className={styles.grid}>
          <Card>
            <Card.Header title="Underline Tabs Variant" subtitle="Default border indicator with badge pills" />
            <Card.Body>
              <Tabs tabs={demoTabs} variant="underline" onChange={(id) => addToast('info', 'Tab Switch', `Switched to ${id}`)} />
            </Card.Body>
          </Card>
        </div>
      </section>

      {/* SECTION 12: PROGRESS BAR & SKELETON LOADERS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>12. Scoped Progress Bar &amp; Skeleton Loader (`Progress.module.css`, `Skeleton.module.css`)</h2>
          <Badge variant="neutral">Feedback System</Badge>
        </div>

        <div className={styles.grid}>
          {/* Progress Card */}
          <Card>
            <Card.Header title="Progress Bar Indicators" subtitle="Animated progress bars with gradient fills" />
            <Card.Body>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Progress label="CPU Allocation Capacity" value={progressVal} showValue variant="gradient" animated />
                <Progress label="RAM Memory Usage" value={84} showValue variant="warning" />
              </div>
            </Card.Body>
          </Card>

          {/* Skeleton Loader Card */}
          <Card>
            <Card.Header title="Shimmer Skeleton Loader" subtitle="Placeholder shimmer animation during async fetches" />
            <Card.Body>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Skeleton variant="rectangular" height={80} />
                <Skeleton variant="text" count={2} />
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>

      {/* SECTION 13: FORM INPUT & TOGGLE CONTROLS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>13. Scoped Form Inputs &amp; Toggle Switch (`Input.module.css`, `Toggle.module.css`)</h2>
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
                  onChange={(e) => setInputValue(e.target.value)}
                  helperText="Unique domain prefix for cluster routing."
                  required
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
                  onChange={(val) => setToggleState1(val)}
                />
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>

      {/* SECTION 14: MODAL COMPONENT */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>14. Scoped Modal Overlay Component (`Modal.module.css`)</h2>
          <Badge variant="neutral">Overlay System</Badge>
        </div>

        <div className={styles.buttonRow}>
          <Button variant="primary" onClick={() => setIsModalOpen(true)}>
            🪟 Open Accessible Modal Dialog
          </Button>
        </div>
      </section>

      {/* SECTION 15: CARD COMPONENT Showcase */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>15. Scoped Card Component (`Card.module.css`)</h2>
          <Badge variant="neutral">Layout System</Badge>
        </div>

        <div className={styles.grid}>
          <Card interactive>
            <Card.Header title="Standard Enterprise Card" subtitle="Default surface variant with hover translation" />
            <Card.Body>
              This card demonstrates sub-component architecture (`Card.Header`, `Card.Body`, `Card.Footer`) using scoped CSS class names.
            </Card.Body>
            <Card.Footer>
              <Button size="sm" variant="primary" onClick={() => setIsModalOpen(true)}>Inspect Modal</Button>
            </Card.Footer>
          </Card>
        </div>
      </section>

      {/* SECTION 16: ACCORDION COMPONENT Showcase */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>16. Scoped Accordion Disclosure Component (`Accordion.module.css`)</h2>
          <Badge variant="neutral">Expandable FAQ</Badge>
        </div>

        <Accordion items={faqItems} />
      </section>

      {/* SECTION 17: TOAST NOTIFICATION STREAM Showcase */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>17. Scoped Toast Notification Stream Component (`Toast.module.css`)</h2>
          <Badge variant="neutral">Floating Alerts</Badge>
        </div>

        <div className={styles.buttonRow}>
          <Button size="sm" variant="outline" onClick={() => addToast('success', 'Deploy Successful', 'Worker pod us-east-1 deployed successfully in 140ms.')}>
            Trigger Success Toast
          </Button>
        </div>
      </section>

      {/* SCOPED CLASS NAME PROOFS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>🔍 CSS Modules Scope Isolation Proof</h2>
        </div>

        <div className={styles.codeSnippet}>
          {`/* Compiled Output Sample */\n.SegmentedControl__active___77a1 { background-color: var(--color-brand-light); }\n.Table__table___33x1 { border-collapse: collapse; }\n.Drawer__drawer___11z2 { backdrop-filter: blur(8px); }`}
        </div>
      </section>

      {/* DEMO SLIDE-OVER DRAWER */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="⚙️ Cluster Configuration Drawer"
        subtitle="Manage node allocation and edge routing policies"
        footer={
          <>
            <Button variant="ghost" onClick={() => setIsDrawerOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={() => { addToast('success', 'Config Saved', 'Cluster drawer settings updated.'); setIsDrawerOpen(false); }}>
              Save Configuration
            </Button>
          </>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Select label="Target Region Endpoint" options={regionOptions} value={selectedRegion} onChange={setSelectedRegion} />
          <Slider label="Max Worker Pod Scaling" min={1} max={32} value={scalingPodsVal} unit="Pods" onChange={setScalingPodsVal} />
          <Toggle label="Strict Horizontal Auto-Scaling" description="Scale worker pods automatically above 80% CPU load" checked={toggleState1} onChange={setToggleState1} />
        </div>
      </Drawer>

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
