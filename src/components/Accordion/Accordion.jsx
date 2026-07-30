// src/components/Accordion/Accordion.jsx
// Reusable scoped Accordion component powered by CSS Modules.
// Created: 2026-07-29

import React, { useState } from 'react';
import styles from './Accordion.module.css';

export const Accordion = ({ items = [], allowMultiple = false }) => {
  const [openIndexes, setOpenIndexes] = useState([0]);

  const toggleIndex = (index) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        return (
          <div
            key={index}
            className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
          >
            <button
              className={styles.header}
              onClick={() => toggleIndex(index)}
              aria-expanded={isOpen}
            >
              <span>{item.title}</span>
              <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}>
                ▼
              </span>
            </button>
            <div
              className={`${styles.contentWrapper} ${
                isOpen ? styles.contentWrapperOpen : ''
              }`}
            >
              <div className={styles.contentInner}>
                <div className={styles.content}>{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
