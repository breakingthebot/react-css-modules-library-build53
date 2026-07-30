// src/components/Breadcrumb/Breadcrumb.jsx
// Reusable scoped Breadcrumb Navigation Component powered by CSS Modules.
// Created: 2026-07-30

import React from 'react';
import styles from './Breadcrumb.module.css';

export const Breadcrumb = ({
  items = [],
  separator = '/',
  className = '',
}) => {
  return (
    <nav className={`${styles.nav} ${className}`} aria-label="Breadcrumb">
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1 || item.active;
          return (
            <li key={index} className={styles.item}>
              {isLast ? (
                <span className={`${styles.link} ${styles.active}`} aria-current="page">
                  {item.icon && <span className={styles.icon}>{item.icon}</span>}
                  <span>{item.label}</span>
                </span>
              ) : (
                <a href={item.href || '#'} className={styles.link}>
                  {item.icon && <span className={styles.icon}>{item.icon}</span>}
                  <span>{item.label}</span>
                </a>
              )}

              {!isLast && <span className={styles.separator}>{separator}</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
