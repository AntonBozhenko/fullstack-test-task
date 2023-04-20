import React from 'react';
import styles from './Tables.module.scss';
import MainTable from '../../components/MainTable/MainTable';
import SecondaryTable from '../../components/SecondaryTable/SecondaryTable';

export default function Tables() {
  return (
    <div className={styles.tables}>
      <MainTable />
      <SecondaryTable />
    </div>
  );
}
