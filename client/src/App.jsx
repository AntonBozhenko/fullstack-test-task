import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import Sidebar from './components/sidebar/Sidebar';
import None from './pages/None/None';

function App() {
  return (
    <div className={styles.app}>

      <Sidebar />

      <div className={styles.content}>
        <Routes>
          <Route index element={<p>Таблицы</p>} />
          <Route path="/section2" element={<None />} />
          <Route path="/section3" element={<None />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
