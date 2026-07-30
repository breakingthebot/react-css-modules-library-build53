// src/components/Tabs/Tabs.jsx
// Reusable scoped Tabs Navigation Component powered by CSS Modules.
// Created: 2026-07-30

import React, { useState } from 'react';
import styles from './Tabs.module.css';

export const Tabs = ({
  tabs = [],
  defaultActiveId,
  variant = 'underline', // 'underline', 'pills', 'segmented'
  onChange,
}) => {
  const [activeId, setActiveId] = useState(
    defaultActiveId || (tabs.length > 0 ? tabs[0].id : null)
  );

  const handleTabClick = (id, disabled) => {
    if (disabled) return;
    setActiveId(id);
    if (onChange) onChange(id);
  };

  const activeTabItem = tabs.find((t) => t.id === activeId);

  return (
    <div className={styles.container}>
      <div
        className={`${styles.tabList} ${
          variant === 'segmented' ? styles.segmented : ''
        }`}
        role="tablist"
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeId;
          const tabVariantClass =
            variant === 'underline'
              ? styles.underlineTab
              : variant === 'pills'
              ? styles.pillsTab
              : styles.segmentedTab;

          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              disabled={tab.disabled}
              className={`${styles.tab} ${tabVariantClass} ${
                isActive ? styles.activeTab : ''
              } ${tab.disabled ? styles.disabled : ''}`}
              onClick={() => handleTabClick(tab.id, tab.disabled)}
            >
              {tab.icon && <span className={styles.icon}>{tab.icon}</span>}
              <span>{tab.label}</span>
              {tab.badge !== undefined && (
                <span style={{ marginLeft: '4px' }}>{tab.badge}</span>
              )}
            </button>
          );
        })}
      </div>

      {activeTabItem && (
        <div className={styles.tabPanel} role="tabpanel">
          {activeTabItem.content}
        </div>
      )}
    </div>
  );
};
