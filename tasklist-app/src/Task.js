// Task.js

import React, { useState } from 'react';
import './styles.css'; // Import styles

function Task({ index, task, deleteTask, addSubtask, toggleSubtask }) {
  const [subtaskText, setSubtaskText] = useState('');
  const [showSubtasks, setShowSubtasks] = useState(false);

  const handleSubtaskInputChange = (e) => {
    setSubtaskText(e.target.value);
  };

  const handleAddSubtask = () => {
    if (subtaskText.trim() !== '') {
      addSubtask(index, subtaskText);
      setSubtaskText('');
      setShowSubtasks(true); // Automatically show subtasks when adding one
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddSubtask();
    }
  };

  const handleToggleSubtask = (subtaskIndex) => {
    toggleSubtask(index, subtaskIndex);
  };

  const handleToggleSubtasksVisibility = () => {
    setShowSubtasks(!showSubtasks);
  };

  return (
    <div className={`task ${showSubtasks ? 'selected' : ''}`}>
      <div className="task-info" onClick={handleToggleSubtasksVisibility}>
        <span className="task-name">{task.text}</span>
        <button onClick={() => deleteTask(index)}>X</button>
      </div>
      {showSubtasks && (
        <div className="subtasks">
          {task.subtasks.map((subtask, subtaskIndex) => (
            <div key={subtaskIndex} className={`subtask ${subtask.done ? 'done' : ''}`}>
              <span className="subtask-name" style={{ textDecoration: subtask.done ? 'line-through' : 'none' }}>
                {subtask.text}
              </span>
              <button className="done-button" onClick={() => handleToggleSubtask(subtaskIndex)}>
                Done
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="add-subtask">
        <input
          type="text"
          value={subtaskText}
          onChange={handleSubtaskInputChange}
          onKeyDown={handleKeyDown} // Add this line to handle key events
          placeholder="Enter a subtask"
        />
        <button onClick={handleAddSubtask}>Add Subtask</button>
      </div>
    </div>
  );
}

export default Task;
