import React, { useState } from 'react';
import './App.css';

function App() {
  // ステート変数の定義
  const [taskName, setTaskName] = useState(''); // 課題名
  const [limit, setLimit] = useState(''); // 期限
  const [person, setPerson] = useState(''); // 担当者
  const [tasks, setTasks] = useState([]); // 課題リスト

  // 新しい課題を追加する関数
  const addTask = () => {
    const newTask = { taskName, limit, person }; // 新しい課題オブジェクトを作成
    setTasks([...tasks, newTask]); // 課題リストに新しい課題を追加
    // フォームをクリアする
    setTaskName('');
    setLimit('');
    setPerson('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDoApp</h1>
        {/* フォームの定義 */}
        <form onSubmit={(e) => { e.preventDefault(); addTask(); }}>
          <div>
            <label>課題名: </label>
            <input type="text" value={taskName} onChange={(e) => { setTaskName(e.target.value) }} />
          </div>
          <div>
            <label>期限: </label>
            <input type="text" value={limit} onChange={(e) => { setLimit(e.target.value) }} />
          </div>
          <div>
            <label>担当: </label>
            <input type="text" value={person} onChange={(e) => { setPerson(e.target.value) }} />
          </div>
          <button type="submit">追加</button>
        </form>
        <h2>課題リスト</h2>
        {/* 課題リストの表示 */}
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
