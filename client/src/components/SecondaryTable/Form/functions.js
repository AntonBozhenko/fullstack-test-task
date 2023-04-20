import url from '../../../url';

function getGroup(groups, id) {
  for (let i = 0; i < groups.length; i += 1) {
    if (Number(groups[i].id) === Number(id)) {
      return groups[i].name;
    }
  }
  return '';
}

export function handleChange(event, setNewAlbum) {
  if (event.target.name === 'title') {
    setNewAlbum((prev) => ({ ...prev, title: event.target.value }));
  } else if (event.target.name === 'year') {
    if (Number(event.target.value)) {
      setNewAlbum((prev) => ({ ...prev, year: event.target.value }));
    } else if (event.target.value === '') {
      setNewAlbum((prev) => ({ ...prev, year: 1 }));
    }
  } else {
    setNewAlbum((prev) => ({
      ...prev,
      groupid: event.target.value,
    }));
  }
}

export async function addAlbum(allGroups, setRowData, newAlbum, setNewAlbum) {
  try {
    const response = await fetch(
      `${url}albums`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          { ...newAlbum },
        ),
      },
    );

    if (response.ok) {
      const { id } = await response.json();
      setRowData((prev) => [
        ...prev,
        {
          ...newAlbum, id, groupid: undefined, group: getGroup(allGroups, newAlbum.groupid),
        },
      ]);

      setNewAlbum({ title: '', year: '', groupid: 1 });
    } else {
      setNewAlbum({ title: '', year: '', groupid: 1 });
    }
  } catch {
    setNewAlbum({ title: '', year: '', groupid: 1 });
  }
}
