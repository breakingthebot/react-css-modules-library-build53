// src/components/Skeleton/Skeleton.jsx
// Reusable scoped Skeleton Loader component powered by CSS Modules.
// Created: 2026-07-29

import React from 'react';
import styles from './Skeleton.module.css';

export const Skeleton = ({
  variant = 'text',
  width,
  height,
  count = 1,
  className = '',
}) => {
  const elements = Array.from({ length: count });

  return (
    <>
      {elements.map((_, index) => (
        <span
          key={index}
          className={`${styles.skeleton} ${styles[variant] || styles.text} ${className}`}
          style={{
            width: width ? (typeof width === 'number' ? `${width}px` : width) : undefined,
            height: height ? (typeof height === 'number' ? `${height}px` : height) : undefined,
          }}
        />
      ))}
    </>
  );
};
