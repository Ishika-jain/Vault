import React, { useState, useEffect } from 'react';

const KanbanBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('kanbanTasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('kanbanTasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTaskTitle.trim() === '') {
      return;
    }
    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      status: 'todo',
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
  };

  const handleTaskTitleChange = (taskId, title) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, title };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const handleTaskStatusChange = (taskId, status) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="kanban-board">
      <form onSubmit={handleAddTask} className="task-form form">
        <input
          type="text"
          placeholder="Enter Company Name"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <button className='but' type="submit">Add</button>
      </form>

      <div className='kanban'>
      <div className="column">
        <h2>Applied</h2>
        {tasks
          .filter((task) => task.status === 'todo')
          .map((task) => (
            <div key={task.id} className="task">
              <input
                type="text"
                value={task.title}
                onChange={(e) => handleTaskTitleChange(task.id, e.target.value)}
              />
              <select
                value={task.status}
                onChange={(e) => handleTaskStatusChange(task.id, e.target.value)}
              >
                <option value="todo">Applied</option>
                <option value="inprogress">Selected</option>
                <option value="done">Rejected</option>
              </select>
              <button  className='but' onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </div>
          ))}
      </div>
      <div className="column">
        <h2>Selected</h2>
        {tasks
          .filter((task) => task.status === 'inprogress')
          .map((task) => (
            <div key={task.id} className="task">
              <input
                type="text"
                value={task.title}
                onChange={(e) => handleTaskTitleChange(task.id, e.target.value)}
              />
              <select
                value={task.status}
                onChange={(e) => handleTaskStatusChange(task.id, e.target.value)}
              >
                <option value="todo">Applied</option>
                <option value="inprogress">Selected</option>
                <option value="done">Rejected</option>
              </select>
              <button  className='but' onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </div>
          ))}
      </div>
      <div className="column">
        <h2>Rejected</h2>
        {tasks
          .filter((task) => task.status === 'done')
          .map((task) => (
            <div key={task.id} className="task">
              <input
                type="text"
                value={task.title}
                onChange={(e) => handleTaskTitleChange(task.id, e.target.value)}
              />
              <select
                value={task.status}
                onChange={(e) => handleTaskStatusChange(task.id, e.target.value)}
              >
                <option value="todo">Applied</option>
                <option value="inprogress">Selected</option>
                <option value="done">Rejected</option>
              </select>
              <button className='but' onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </div>
          ))}
      </div>
      </div>
    </div>
  );
};

export default KanbanBoard;
