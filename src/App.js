
import './App.css';
import React, { useState } from 'react';
import ListWork from './components/ListWork';
import AddWork from './components/AddWork';
import EditWork from './components/EditWork';

function App() {
  const [state, setState] = useState(false);
  const initialFormState = JSON.parse(localStorage.getItem('listWork')) || [];
  const [todos, setTodos] = useState(initialFormState);

  const addTodo = todo => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    localStorage.setItem('listWork', JSON.stringify(newTodos));
  }

  const removeItem = (id) => {
    const removeArr = [...todos].filter(e => e.id !== id);
    setTodos(removeArr);
    localStorage.setItem('listWork', JSON.stringify(removeArr));
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          Quản lý công việc
        </div>
        {state ? <AddWork onSubmit={addTodo} /> : null}
        <EditWork />

        <ListWork removeItem={removeItem} setState={setState} state={state} />
        <hr />

      </header>
    </div>
  );
}

export default App;
