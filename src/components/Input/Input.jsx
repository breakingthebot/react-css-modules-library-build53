// src/components/Input/Input.jsx
// Reusable scoped Form Input component powered by CSS Modules.
// Created: 2026-07-29

import React from 'react';
import styles from './Input.module.css';

export const Input = ({
  label,
  placeholder,
  type = 'text',
  error,
  helperText,
  icon,
  addon,
  disabled = false,
  required = false,
  value,
  onChange,
  ...props
}) => {
  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label}>
          <span>
            {label}
            {required && <span className={styles.required}>*</span>}
          </span>
        </label>
      )}

      <div
        className={`${styles.inputWrapper} ${
          error ? styles.inputWrapperError : ''
        }`}
      >
        {addon && <span className={styles.addon}>{addon}</span>}
        {icon && <span className={styles.icon}>{icon}</span>}
        <input
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={onChange}
          className={styles.input}
          {...props}
        />
      </div>

      {error ? (
        <span className={styles.errorText}>{error}</span>
      ) : (
        helperText && <span className={styles.helperText}>{helperText}</span>
      )}
    </div>
  );
};
