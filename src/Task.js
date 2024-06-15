import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [str, setStr] = useState('');
  const [val,setVal] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement =()=>{
    setCount(count-1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDoApp</h1>
        <button onClick={increment}>追加</button>
      </header>
    </div>
  );
}


export default App;