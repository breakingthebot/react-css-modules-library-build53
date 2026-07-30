// src/components/Badge/Badge.jsx
// Reusable scoped Badge component powered by CSS Modules.
// Created: 2026-07-29

import React from 'react';
import styles from './Badge.module.css';

export const Badge = ({
  children,
  variant = 'neutral',
  hasDot = false,
  isPulse = false,
  className = '',
  ...props
}) => {
  const badgeClasses = [
    styles.badge,
    styles[variant] || styles.neutral,
    className,
  ].filter(Boolean).join(' ');

  return (
    <span className={badgeClasses} {...props}>
      {hasDot && (
        <span className={`${styles.dot} ${isPulse ? styles.pulseDot : ''}`} />
      )}
      <span>{children}</span>
    </span>
  );
};
