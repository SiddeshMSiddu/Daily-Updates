import React, { useState } from 'react';
import './App.css'; // Optional: Add some styles

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput.trim() !== '') {
      const newTask = { id: Date.now(), text: taskInput, completed: false };
      setTasks([...tasks, newTask]);
      setTaskInput('');
    }
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
        <div className="task-input-container">
          <input
          className='toDoInput'
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Add a new task..."
          />
          <button onClick={addTask} className='addBtn'>Add</button>
        </div>
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className={task.completed ? 'completed' : ''}>
              <span
                onClick={() => toggleTaskCompletion(task.id)}
                style={{ cursor: 'pointer' }}
              >
                {task.text}
              </span>
              <button onClick={() => removeTask(task.id)} className="delete-button">
                ✕
              </button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
