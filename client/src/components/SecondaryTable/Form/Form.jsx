/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { addAlbum, handleChange } from './functions';
import styles from './Form.module.scss';

export default function Form({ allGroups, setRowData }) {
  const [newAlbum, setNewAlbum] = useState({ title: '', year: '', groupid: 1 });

  return (
    <div className={styles.form}>
      <input
        name="title"
        type="text"
        placeholder="название"
        onChange={(event) => { handleChange(event, setNewAlbum); }}
        value={newAlbum.title}
      />
      <input
        name="year"
        type="number"
        placeholder="год"
        onChange={(event) => { handleChange(event, setNewAlbum); }}
        value={newAlbum.year}
      />
      <select
        name="groups"
        id="groups"
        onChange={(event) => { handleChange(event, setNewAlbum); }}
        value={newAlbum.groupid}
      >
        {allGroups.map(({ id, name }) => (
          <option key={id} value={id}>{name}</option>
        ))}
      </select>
      <button
        type="button"
        onClick={() => addAlbum(allGroups, setRowData, newAlbum, setNewAlbum)}
        disabled={
          !newAlbum.title.length || !newAlbum.year.length
          }
      >
        добавить
      </button>
    </div>
  );
}
