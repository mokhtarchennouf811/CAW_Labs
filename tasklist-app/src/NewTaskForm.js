// NewTaskForm.js
import React, { useState } from 'react';
import './styles.css'; // Import styles

function NewTaskForm({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() !== '') {
      addTask(taskText);
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <input type="text" value={taskText} onChange={handleInputChange} placeholder="Enter a new task" />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;