import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import Sidebar from './components/sidebar/Sidebar';
import None from './pages/None/None';
import Tables from './pages/Tables/Tables';

export default function App() {
  return (
    <div className={styles.app}>

      <Sidebar />

      <div className={styles.content}>
        <Routes>
          <Route index element={<Tables />} />
          <Route path="/section2" element={<None />} />
          <Route path="/section3" element={<None />} />
        </Routes>
      </div>

    </div>
  );
}
