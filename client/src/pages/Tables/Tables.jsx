import React from 'react';
import styles from './Tables.module.scss';
import MainTable from '../../components/MainTable/MainTable';

export default function Tables() {
  return (
    <div className={styles.tables}>
      <MainTable />
    </div>
  );
}
