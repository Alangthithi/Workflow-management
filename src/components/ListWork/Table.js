import React, { useState } from 'react';

const Table = (props) => {
  const { removeItem } = props;
  const data = JSON.parse(localStorage.getItem('listWork')) || [];
  const [edit, setEdit] = useState({
    id: null,
    name: '',
    status: ''
  })
  const handleClick = (id) => {
    const dataId = data.find(e => e.id === id);
    setEdit(dataId);
  }

  return data.map((todo, index) => (
    <tr key={todo.id}>
      <td>{index + 1}</td>
      <td>{todo.name}</td>
      <td>{todo.status ? 'Kích hoạt' : 'Ẩn'}</td>
      <td>
        <button onClick={() => handleClick(todo.id)}>Sửa</button>
        <button onClick={() => removeItem(todo.id)}>Xóa</button>
      </td>
    </tr>
  )
  );
}

export default Table;
