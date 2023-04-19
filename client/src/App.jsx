import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className={styles.app}>

      <Sidebar />

      <div className={styles.content}>
        <Routes>
          <Route index element={<p>Таблицы</p>} />
          <Route path="/section2" element={<p>Графики</p>} />
          <Route path="/section3" element={<p>Отчеты</p>} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
