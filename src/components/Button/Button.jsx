// src/components/Button/Button.jsx
// Reusable scoped Button component powered by CSS Modules.
// Created: 2026-07-29

import React from 'react';
import styles from './Button.module.css';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  icon = null,
  onClick,
  ...props
}) => {
  const classNames = [
    styles.button,
    styles[variant] || styles.primary,
    styles[size] || styles.md,
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classNames}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...props}
    >
      {isLoading && <span className={styles.spinner} />}
      {!isLoading && icon && <span className={styles.icon}>{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
