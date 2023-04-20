import React from 'react';
import styles from './None.module.scss';

export default function None() {
  return (
    <div className={styles.none}>
      <img src="/pictures/cat.png" alt="котэ" />
      <h1>Тут пока-что ничего нет 😊</h1>
    </div>
  );
}
