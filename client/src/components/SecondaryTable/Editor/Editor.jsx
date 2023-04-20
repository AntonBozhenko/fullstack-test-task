/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Editor.module.scss';

import {
  deleteAlbum,
  edit,
  getId, handleChange, startEdit,
} from './functions';

export default function Editor({
  allGroups,
  setActiveAlbum,
  activeAlbum,
  isEditing,
  setIsEditing,
  editedAlbum,
  setEditedAlbum,
  setRowData,
}) {
  return (
    <div className={styles.editor}>
      <input
        disabled={!isEditing}
        name="title"
        type="text"
        onChange={(event) => { handleChange(event, setEditedAlbum); }}
        value={editedAlbum.title || activeAlbum.title}
      />
      <input
        disabled={!isEditing}
        name="year"
        type="number"
        onChange={(event) => { handleChange(event, setEditedAlbum); }}
        value={editedAlbum.year || activeAlbum.year}
      />
      <select
        disabled={!isEditing}
        name="groups"
        id="groups"
        onChange={(event) => { handleChange(event, setEditedAlbum, allGroups); }}
        value={editedAlbum.groupid || getId(allGroups, activeAlbum.group)}
      >
        {allGroups.map(({ id, name }) => (
          <option key={id} value={id}>{name}</option>
        ))}
      </select>
      {
        !isEditing
          ? (
            <button
              disabled={!activeAlbum.id}
              type="button"
              onClick={() => { startEdit(setIsEditing, activeAlbum, setEditedAlbum); }}
            >
              Начать изменение
            </button>
          )
          : (
            <button
              type="button"
              onClick={() => {
                edit(editedAlbum, setRowData, setEditedAlbum, setIsEditing, setActiveAlbum);
              }}
            >
              изменить
            </button>
          )
      }
      <button
        type="button"
        onClick={
          () => deleteAlbum(activeAlbum, setRowData, setEditedAlbum, setIsEditing, setActiveAlbum)
          }
        disabled={!activeAlbum.id}
      >
        удалить
      </button>
    </div>
  );
}
