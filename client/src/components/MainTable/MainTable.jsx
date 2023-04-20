import React, { useEffect, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import styles from './MainTable.module.scss';

import {
  columnDefs, fetchData, incrementOffset, onGridReady,
} from './functions';

export default function MainTable() {
  const gridApi = useRef(null);
  const [offset, setOffset] = useState(0);
  const [rowData, setRowData] = useState([]);
  const [dataIsOver, setDataIsOver] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    (async () => {
      await fetchData(signal, offset, setDataIsOver, gridApi, setRowData);
    })();

    return () => {
      controller.abort();
    };
  }, [offset]);

  return (
    <div className={`${styles.main} ag-theme-alpine-dark`}>
      <h1>Группы</h1>
      <AgGridReact
        ref={gridApi}
        rowData={rowData}
        columnDefs={columnDefs}
        rowSelection="single"
        onGridReady={(params) => { onGridReady(params, gridApi); }}
        onBodyScroll={(event) => { incrementOffset(event, dataIsOver, offset, setOffset); }}
      />
    </div>
  );
}
