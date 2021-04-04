
import './App.css';
import React, { useState } from 'react';
import ListWork from './components/ListWork';
import AddWork from './components/AddWork';

function App() {
  const [state, setstate] = useState(false);
  const initialFormState = JSON.parse(localStorage.getItem('listWork')) || [];
  const [todos, setTodos] = useState(initialFormState);

  const addTodo = todo => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    localStorage.setItem('listWork', JSON.stringify(newTodos));
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          Quản lý công việc
        </div>
        {state ? <AddWork onSubmit={addTodo} /> : null}
        <ListWork setstate={setstate} state={state} />
        <hr />
      </header>
    </div>
  );
}

export default App;
