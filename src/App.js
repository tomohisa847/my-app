import React, { useState } from 'react';
import './App.css';

function App() {
  // ステート変数の定義
  const [taskName, setTaskName] = useState(''); // 課題名
  const [limit, setLimit] = useState(''); // 期限
  const [person, setPerson] = useState(''); // 担当者
  const [tasks, setTasks] = useState([]); // 課題リスト
  const [isEditing, setIsEditing] = useState(false); // 編集モード
  const [currentIndex, setCurrentIndex] = useState(null); // 編集するタスクのインデックス

  // 新しい課題を追加する関数
  const addTask = () => {
    const newTask = { taskName, limit, person }; // 新しい課題オブジェクトを作成
    setTasks([...tasks, newTask]); // 課題リストに新しい課題を追加
    clearForm();
  };

  // 課題を編集する関数
  const editTask = (index) => {
    const task = tasks[index];
    setTaskName(task.taskName);
    setLimit(task.limit);
    setPerson(task.person);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  // 課題を更新する関数
  const updateTask = () => {
    const updatedTask = { taskName, limit, person };
    const updatedTasks = [...tasks];
    updatedTasks[currentIndex] = updatedTask;
    setTasks(updatedTasks);
    setIsEditing(false);
    clearForm();
  };

  // フォームをクリアする関数
  const clearForm = () => {
    setTaskName('');
    setLimit('');
    setPerson('');
  };

  // 課題を削除する関数
  const delTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDoApp</h1>
        {/* フォームの定義 */}
        <form onSubmit={(e) => { e.preventDefault(); isEditing ? updateTask() : addTask(); }}>
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
          <button type="submit">{isEditing ? '更新' : '追加'}</button>
        </form>
        <h2>課題リスト</h2>
        {/* 課題リストの表示 */}
        <table>
          <thead>
            <tr>
              <th>編集</th>
              <th>削除</th>
              <th>課題名</th>
              <th>期限</th>
              <th>担当</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td><button onClick={() => editTask(index)}>編集</button></td>
                <td><button onClick={() => delTask(index)}>削除</button></td>
                <td>{task.taskName}</td>
                <td>{task.limit}</td>
                <td>{task.person}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
