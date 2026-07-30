// src/components/Slider/Slider.jsx
// Reusable scoped Range Slider Component powered by CSS Modules.
// Created: 2026-07-30

import React from 'react';
import styles from './Slider.module.css';

export const Slider = ({
  min = 0,
  max = 100,
  step = 1,
  value = 50,
  onChange,
  label,
  showValue = true,
  unit = '',
  disabled = false,
}) => {
  const percentage = Math.min(Math.max(0, ((value - min) / (max - min)) * 100), 100);

  return (
    <div className={styles.container}>
      {(label || showValue) && (
        <div className={styles.labelRow}>
          {label && <span>{label}</span>}
          {showValue && (
            <span className={styles.valueBadge}>
              {value} {unit}
            </span>
          )}
        </div>
      )}

      <div className={styles.sliderWrapper}>
        <div className={styles.track}>
          <div className={styles.fill} style={{ width: `${percentage}%` }} />
        </div>

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange && onChange(Number(e.target.value))}
          className={styles.input}
        />
      </div>
    </div>
  );
};
