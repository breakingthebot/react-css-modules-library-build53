// src/components/Card/Card.jsx
// Reusable scoped Card component powered by CSS Modules with sub-components.
// Created: 2026-07-29

import React from 'react';
import styles from './Card.module.css';

export const Card = ({
  children,
  variant = 'default',
  interactive = false,
  className = '',
  ...props
}) => {
  const cardClasses = [
    styles.card,
    styles[variant] || '',
    interactive ? styles.interactive : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

Card.Header = ({ title, subtitle, action, className = '' }) => (
  <div className={`${styles.header} ${className}`}>
    <div>
      {title && <h3 className={styles.title}>{title}</h3>}
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
    {action && <div>{action}</div>}
  </div>
);

Card.Body = ({ children, className = '' }) => (
  <div className={`${styles.body} ${className}`}>{children}</div>
);

Card.Footer = ({ children, className = '' }) => (
  <div className={`${styles.footer} ${className}`}>{children}</div>
);
