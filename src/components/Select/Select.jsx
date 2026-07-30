// src/components/Select/Select.jsx
// Reusable scoped Dropdown Select Component powered by CSS Modules.
// Created: 2026-07-30

import React, { useState, useRef, useEffect } from 'react';
import styles from './Select.module.css';

export const Select = ({
  options = [],
  value,
  onChange,
  placeholder = 'Select an option...',
  label,
  error,
  searchable = false,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredOptions = searchable
    ? options.filter((opt) =>
        opt.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options;

  const handleSelect = (option) => {
    if (option.disabled) return;
    if (onChange) onChange(option.value);
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div className={styles.container} ref={containerRef}>
      {label && <label className={styles.label}>{label}</label>}

      <button
        type="button"
        disabled={disabled}
        className={`${styles.trigger} ${isOpen ? styles.triggerOpen : ''} ${
          error ? styles.triggerError : ''
        }`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <span className={styles.selectedContent}>
          {selectedOption ? (
            <>
              {selectedOption.icon && <span>{selectedOption.icon}</span>}
              <span>{selectedOption.label}</span>
            </>
          ) : (
            <span className={styles.placeholder}>{placeholder}</span>
          )}
        </span>

        <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          {searchable && (
            <div className={styles.searchBox}>
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
                autoFocus
              />
            </div>
          )}

          {filteredOptions.length === 0 ? (
            <div className={styles.option} style={{ opacity: 0.6 }}>
              No options found
            </div>
          ) : (
            filteredOptions.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <div
                  key={opt.value}
                  className={`${styles.option} ${
                    isSelected ? styles.optionSelected : ''
                  } ${opt.disabled ? styles.optionDisabled : ''}`}
                  onClick={() => handleSelect(opt)}
                >
                  <div className={styles.optionLeft}>
                    {opt.icon && <span>{opt.icon}</span>}
                    <span>{opt.label}</span>
                  </div>
                  {isSelected && <span className={styles.checkmark}>✓</span>}
                </div>
              );
            })
          )}
        </div>
      )}

      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};
