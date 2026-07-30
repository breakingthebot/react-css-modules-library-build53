// src/components/SegmentedControl/SegmentedControl.jsx
// Reusable scoped Segmented Control Switcher Component powered by CSS Modules.
// Created: 2026-07-30

import React from 'react';
import styles from './SegmentedControl.module.css';

export const SegmentedControl = ({
  options = [],
  value,
  onChange,
  size = 'md', // 'sm', 'md', 'lg'
  fullWidth = false,
  className = '',
}) => {
  return (
    <div
      className={`${styles.container} ${styles[size] || styles.md} ${
        fullWidth ? styles.fullWidth : ''
      } ${className}`}
      role="tablist"
    >
      {options.map((option) => {
        const isActive = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            disabled={option.disabled}
            className={`${styles.button} ${isActive ? styles.active : ''}`}
            onClick={() => !option.disabled && onChange && onChange(option.value)}
          >
            {option.icon && <span>{option.icon}</span>}
            <span>{option.label}</span>
          </button>
        );
      })}
    </div>
  );
};
