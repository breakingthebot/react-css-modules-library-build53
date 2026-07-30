// src/components/Progress/Progress.jsx
// Reusable scoped Progress Bar component powered by CSS Modules.
// Created: 2026-07-29

import React from 'react';
import styles from './Progress.module.css';

export const Progress = ({
  value = 0,
  max = 100,
  variant = 'brand',
  size = 'md',
  showValue = false,
  animated = false,
  label,
}) => {
  const percentage = Math.min(Math.max(0, (value / max) * 100), 100);

  return (
    <div className={styles.container}>
      {(label || showValue) && (
        <div className={styles.labelRow}>
          {label && <span>{label}</span>}
          {showValue && <span className={styles.valueText}>{Math.round(percentage)}%</span>}
        </div>
      )}

      <div className={`${styles.track} ${styles[size] || styles.md}`}>
        <div
          className={`${styles.bar} ${styles[variant] || styles.brand} ${
            animated ? styles.animated : ''
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
