// src/components/Toggle/Toggle.jsx
// Reusable scoped Form Toggle Switch component powered by CSS Modules.
// Created: 2026-07-29

import React from 'react';
import styles from './Toggle.module.css';

export const Toggle = ({
  checked = false,
  onChange,
  label,
  description,
  disabled = false,
}) => {
  return (
    <label className={styles.container}>
      {(label || description) && (
        <div className={styles.labelWrapper}>
          {label && <span className={styles.label}>{label}</span>}
          {description && <span className={styles.description}>{description}</span>}
        </div>
      )}

      <div
        className={`${styles.switch} ${checked ? styles.switchChecked : ''}`}
        onClick={() => !disabled && onChange && onChange(!checked)}
      >
        <div
          className={`${styles.handle} ${checked ? styles.handleChecked : ''}`}
        />
      </div>
    </label>
  );
};
