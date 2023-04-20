import url from '../../../url';

export function getId(groups, group) {
  for (let i = 0; i < groups.length; i += 1) {
    if (groups[i].name === group) {
      return groups[i].id;
    }
  }
  return '';
}

function getGroup(groups, id) {
  for (let i = 0; i < groups.length; i += 1) {
    if (Number(groups[i].id) === Number(id)) {
      return groups[i].name;
    }
  }
  return '';
}

export function startEdit(setIsEditing, activeAlbum, setEditedAlbum) {
  setIsEditing(true);
  setEditedAlbum({ ...activeAlbum, groupid: getId(activeAlbum.group) });
}

export function handleChange(event, setEditedAlbum, allGroups) {
  if (event.target.name === 'title') {
    setEditedAlbum((prev) => ({ ...prev, title: event.target.value }));
  } else if (event.target.name === 'year') {
    if (Number(event.target.value)) {
      setEditedAlbum((prev) => ({ ...prev, year: event.target.value }));
    } else if (event.target.value === '') {
      setEditedAlbum((prev) => ({ ...prev, year: 1 }));
    }
  } else {
    setEditedAlbum((prev) => ({
      ...prev,
      group: getGroup(allGroups, event.target.value),
      groupid: event.target.value,
    }));
  }
}

function endEditing(func1, func2) {
  func1({
    id: '', title: '', year: '', group: '',
  });
  func2(false);
}

export async function edit(editedAlbum, setRowData, setEditedAlbum, setIsEditing, setActiveAlbum) {
  try {
    const response = await fetch(
      `${url}albums`,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          editedAlbum,
        ),
      },
    );

    if (response.ok) {
      setRowData((prev) => prev.map((el) => {
        if ((el.id) === editedAlbum.id) {
          return { ...editedAlbum, groupid: undefined };
        }
        return el;
      }));

      setActiveAlbum({ ...editedAlbum, groupid: undefined });

      endEditing(setEditedAlbum, setIsEditing);
    } else {
      endEditing(setEditedAlbum, setIsEditing);
    }
  } catch {
    endEditing(setEditedAlbum, setIsEditing);
  }
}

export async function deleteAlbum(album, setRowData, setEditedAlbum, setIsEditing, setActiveAlbum) {
  try {
    const response = await fetch(
      `${url}albums`,
      {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          { id: album.id },
        ),
      },
    );

    if (response.ok) {
      setRowData((prev) => prev.filter((el) => el.id !== album.id));

      setActiveAlbum({
        id: '', title: '', year: '', group: '',
      });

      endEditing(setEditedAlbum, setIsEditing);
    } else {
      endEditing(setEditedAlbum, setIsEditing);
    }
  } catch {
    endEditing(setEditedAlbum, setIsEditing);
  }
}
