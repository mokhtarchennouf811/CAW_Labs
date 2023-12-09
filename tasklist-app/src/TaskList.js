// TaskList.js

import React, { useState } from 'react';
import NewTaskForm from './NewTaskForm';
import Task from './Task';
import './styles.css';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    setTasks([...tasks, { text: taskText, subtasks: [] }]);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const addSubtask = (taskIndex, subtaskText) => {
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex].subtasks.push({ text: subtaskText, done: false });
    setTasks(updatedTasks);
  };

  const toggleSubtask = (taskIndex, subtaskIndex) => {
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex].subtasks[subtaskIndex].done = !updatedTasks[taskIndex].subtasks[subtaskIndex].done;
    setTasks(updatedTasks);
  };

  return (
    <div className="task-list">
      <h2 className="title">Task List</h2> {/* Add the title here */}
      <NewTaskForm addTask={addTask} />
      {tasks.map((task, index) => (
        <Task
          key={index}
          index={index}
          task={task}
          deleteTask={deleteTask}
          addSubtask={addSubtask}
          toggleSubtask={toggleSubtask}
        />
      ))}
    </div>
  );
}

export default TaskList;
