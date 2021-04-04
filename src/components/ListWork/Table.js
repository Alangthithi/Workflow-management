import React from 'react';

const Table = (props) => {
  const data = JSON.parse(localStorage.getItem('listWork'))
  return data.map((todo, index) => {
    return (
      <tbody>
        <tr>
          <td>{index}</td>
          <td>{todo.name}</td>
          <td>{todo.status ? 'Kích hoạt' : 'Ẩn'}</td>
          <td>
            <button>Sửa</button>
          </td>
        </tr>
      </tbody>
    )
  });
}

export default Table;
