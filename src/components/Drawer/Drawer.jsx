// src/components/Drawer/Drawer.jsx
// Reusable scoped Slide-Over Drawer Panel Component powered by CSS Modules.
// Created: 2026-07-30

import React, { useEffect } from 'react';
import styles from './Drawer.module.css';

export const Drawer = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  footer,
  position = 'right', // 'right', 'left'
  size = 'md', // 'sm', 'md', 'lg'
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen && onClose) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div
        className={`${styles.drawer} ${styles[position] || styles.right} ${
          styles[size] || styles.md
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className={styles.header}>
          <div>
            <h3 className={styles.title}>{title}</h3>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
          {onClose && (
            <button className={styles.closeButton} onClick={onClose}>
              ✕
            </button>
          )}
        </div>

        <div className={styles.body}>{children}</div>

        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    </>
  );
};
