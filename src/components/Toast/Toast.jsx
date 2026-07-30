// src/components/Toast/Toast.jsx
// Reusable scoped Toast component powered by CSS Modules.
// Created: 2026-07-29

import React, { useEffect } from 'react';
import styles from './Toast.module.css';

const icons = {
  success: '🟢',
  warning: '🟡',
  danger: '🔴',
  info: '🔵',
};

export const Toast = ({
  title,
  message,
  type = 'info',
  duration = 4000,
  onClose,
}) => {
  useEffect(() => {
    if (duration && onClose) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  return (
    <div className={`${styles.toast} ${styles[type] || styles.info}`}>
      <span className={styles.icon}>{icons[type] || '🔵'}</span>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        {message && <p className={styles.message}>{message}</p>}
      </div>
      {onClose && (
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>
      )}
      {duration && (
        <div
          className={styles.progressBar}
          style={{ animationDuration: `${duration}ms` }}
        />
      )}
    </div>
  );
};
