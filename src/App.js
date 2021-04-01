
import './App.css';
import React, { useState } from 'react';
import ListWork from './components/ListWork';
import AddWork from './components/AddWork';

function App() {
  const [state, setstate] = useState(false);
  console.log("🚀 ~ file: App.js ~ line 8 ~ App ~ state", state)
  return (
    <div className="App">
      <header className="App-header">
        <div>
          Quản lý công việc
        </div>
        <ListWork setstate={setstate} state={state} />
        {state ? <AddWork /> : null}
        <hr />
      </header>
    </div>
  );
}

export default App;
