// src/components/Alert/Alert.jsx
// Reusable scoped Alert Callout Component powered by CSS Modules.
// Created: 2026-07-30

import React, { useState } from 'react';
import styles from './Alert.module.css';

const defaultIcons = {
  info: 'ℹ️',
  success: '✅',
  warning: '⚠️',
  danger: '🚨',
};

export const Alert = ({
  variant = 'info',
  title,
  children,
  icon,
  action,
  onClose,
  bordered = true,
  className = '',
}) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const handleClose = () => {
    setDismissed(true);
    if (onClose) onClose();
  };

  return (
    <div
      className={`${styles.alert} ${styles[variant] || styles.info} ${
        bordered ? styles.bordered : ''
      } ${className}`}
      role="alert"
    >
      <span className={styles.icon}>{icon || defaultIcons[variant] || 'ℹ️'}</span>

      <div className={styles.content}>
        {title && <h4 className={styles.title}>{title}</h4>}
        <div className={styles.message}>{children}</div>
        {action && <div className={styles.action}>{action}</div>}
      </div>

      {onClose && (
        <button
          type="button"
          aria-label="Dismiss alert"
          className={styles.closeButton}
          onClick={handleClose}
        >
          ✕
        </button>
      )}
    </div>
  );
};
