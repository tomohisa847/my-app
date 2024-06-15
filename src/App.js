import React, { useState } from 'react';
import './App.css';

function App() {
  const [taskName, setTaskName] = useState('');
  const [limit, setLimit] = useState('');
  const [person, setPerson] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const newTask = { taskName, limit, person };
    setTasks([...tasks,newTask]);
    setTaskName('');
    setLimit('');
    setPerson('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDoApp</h1>
        <form onSubmit={(e) => { e.preventDefault(); addTask(); }}>
          <div>
            <label>課題名: </label>
            <input type="text" value={taskName} onChange={(e) => {setTaskName(e.target.value)}} />
          </div>
          <div>
            <label>期限: </label>
            <input type="text" value={limit} onChange={(e) => {setLimit(e.target.value)}} />
          </div>
          <div>
            <label>担当: </label>
            <input type="text" value={person} onChange={(e) => {setPerson(e.target.value)}} />
          </div>
          <button type="submit">追加</button>
        </form>
        <h2>課題リスト</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <p>課題名: {task.taskName}</p>
              <p>期限: {task.limit}</p>
              <p>担当: {task.person}</p>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
