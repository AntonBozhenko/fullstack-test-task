/* eslint-disable no-param-reassign */
import url from '../../url';

export const columnDefs = [
  { headerName: 'id', width: 60, field: 'id' },
  { headerName: 'Название', width: 300, field: 'title' },
  { headerName: 'Год', width: 140, field: 'year' },
  { headerName: 'Группа', width: 200, field: 'group' },
];

export async function fetchData(signal, setRowData, setAllGroups) {
  try {
    const response = await fetch(`${url}albums`, { signal });
    const responseGroups = await fetch(`${url}groups`, { signal });

    if (response.ok && responseGroups.ok) {
      const result = await response.json();
      const resultGroups = await responseGroups.json();

      setRowData(result);
      setAllGroups(resultGroups);
    } else {
      setRowData([{
        id: 'что-то', title: 'пошло', year: 'не', group: 'так',
      }]);
    }
  } catch {
    setRowData([{
      id: 'что-то', title: 'пошло', year: 'не', group: 'так',
    }]);
  }
}
