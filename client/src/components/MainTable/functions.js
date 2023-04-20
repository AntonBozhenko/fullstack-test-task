/* eslint-disable no-param-reassign */
import url from '../../url';

export const columnDefs = [
  { headerName: 'id', width: 60, field: 'id' },
  { headerName: 'Название', width: 300, field: 'name' },
  { headerName: 'Страна', width: 140, field: 'country' },
];

export async function fetchData(signal, offset, setDataIsOver, gridApi, setRowData) {
  try {
    const response = await fetch(`${url}groups/${offset}`, { signal });

    if (response.ok) {
      const result = await response.json();

      if (!result.length) {
        setDataIsOver(true);
      }

      if (offset > 0) {
        gridApi.current.applyTransaction({ add: result });
      } else {
        setRowData(result);
      }
    } else {
      setRowData([{ id: 'что-то', name: 'пошло', country: 'не так' }]);
    }
  } catch {
    setRowData([{ id: 'что-то', name: 'пошло', country: 'не так' }]);
  }
}

export const onGridReady = (params, gridApi) => {
  gridApi.current = params.api;
};

export const incrementOffset = (event, dataIsOver, offset, setOffset) => {
  if (!dataIsOver) {
    if (event.top >= 123 + (41 * offset)) setOffset((prev) => prev + 10);
  }
};
