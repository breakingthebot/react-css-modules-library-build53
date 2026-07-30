// src/components/Avatar/Avatar.jsx
// Reusable scoped Avatar & AvatarGroup Component powered by CSS Modules.
// Created: 2026-07-30

import React, { useState } from 'react';
import styles from './Avatar.module.css';

export const Avatar = ({
  src,
  name = '',
  size = 'md',
  status,
  bordered = false,
  className = '',
}) => {
  const [imgError, setImgError] = useState(false);

  const getInitials = (str) => {
    if (!str) return 'U';
    const parts = str.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return str.substring(0, 2).toUpperCase();
  };

  const showImage = src && !imgError;

  return (
    <div
      className={`${styles.avatar} ${styles[size] || styles.md} ${
        bordered ? styles.bordered : ''
      } ${className}`}
      title={name}
    >
      {showImage ? (
        <img
          src={src}
          alt={name || 'Avatar'}
          className={styles.image}
          onError={() => setImgError(true)}
        />
      ) : (
        <span className={styles.initials}>{getInitials(name)}</span>
      )}

      {status && (
        <span
          className={`${styles.statusDot} ${styles[`statusDot_${size}`]} ${
            styles[status] || styles.online
          }`}
        />
      )}
    </div>
  );
};

export const AvatarGroup = ({ children, max = 4, size = 'md' }) => {
  const avatarArray = React.Children.toArray(children);
  const visibleAvatars = avatarArray.slice(0, max);
  const remainingCount = avatarArray.length - max;

  return (
    <div className={styles.group}>
      {visibleAvatars.map((child, index) => (
        <div key={index} className={styles.groupItem}>
          {React.cloneElement(child, { size, bordered: true })}
        </div>
      ))}

      {remainingCount > 0 && (
        <div
          className={`${styles.counter} ${styles[size] || styles.md}`}
          title={`${remainingCount} more users`}
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
};
