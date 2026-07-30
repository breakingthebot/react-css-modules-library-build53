// src/components/Tooltip/Tooltip.jsx
// Reusable scoped Tooltip Hover Popup Component powered by CSS Modules.
// Created: 2026-07-30

import React, { useState, useRef } from 'react';
import styles from './Tooltip.module.css';

export const Tooltip = ({
  children,
  content,
  position = 'top', // 'top', 'bottom', 'left', 'right'
  delay = 150,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef(null);

  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  return (
    <div
      className={styles.container}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}

      {isVisible && content && (
        <div className={`${styles.tooltip} ${styles[position] || styles.top}`}>
          <span>{content}</span>
          <span className={styles.arrow} />
        </div>
      )}
    </div>
  );
};
