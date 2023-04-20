import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import Editor from './Editor/Editor';
import Form from './Form/Form';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import styles from './SecondaryTable.module.scss';

import {
  columnDefs, fetchData,
} from './functions';

export default function SecondaryTable() {
  const [rowData, setRowData] = useState([]);
  const [allGroups, setAllGroups] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedAlbum, setEditedAlbum] = useState({});
  const [activeAlbum, setActiveAlbum] = useState({
    id: '', title: '', year: '', group: '',
  });

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    (async () => {
      await fetchData(signal, setRowData, setAllGroups);
    })();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className={`${styles.secondary} ag-theme-alpine-dark`}>
      <h1>Альбомы</h1>
      <Form
        allGroups={allGroups}
        setRowData={setRowData}
      />
      <Editor
        activeAlbum={activeAlbum}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        editedAlbum={editedAlbum}
        setEditedAlbum={setEditedAlbum}
        setRowData={setRowData}
        setActiveAlbum={setActiveAlbum}
        allGroups={allGroups}
      />
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        onCellClicked={(event) => {
          setActiveAlbum(event.data);
          setIsEditing(false);
          setEditedAlbum({
            id: '', title: '', year: '', group: '',
          });
        }}
        rowSelection="single"
      />
    </div>
  );
}
