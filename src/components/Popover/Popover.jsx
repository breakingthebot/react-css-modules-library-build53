// src/components/Popover/Popover.jsx
// Reusable scoped Popover Panel Component powered by CSS Modules.
// Created: 2026-07-30

import React, { useState, useRef, useEffect } from 'react';
import styles from './Popover.module.css';

export const Popover = ({
  trigger,
  title,
  children,
  position = 'bottomLeft', // 'bottomLeft', 'bottomRight', 'topLeft', 'topRight'
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`${styles.container} ${className}`} ref={containerRef}>
      <div
        className={styles.triggerWrapper}
        onClick={() => setIsOpen(!isOpen)}
      >
        {trigger}
      </div>

      {isOpen && (
        <div
          className={`${styles.popover} ${
            styles[position] || styles.bottomLeft
          }`}
          role="dialog"
        >
          {title && (
            <div className={styles.header}>
              <h4 className={styles.title}>{title}</h4>
              <button
                className={styles.closeButton}
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>
          )}

          <div className={styles.body}>{children}</div>
        </div>
      )}
    </div>
  );
};
