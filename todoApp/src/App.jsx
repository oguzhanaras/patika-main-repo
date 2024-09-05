import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Learn JavaScript', completed: true },
    { id: 2, title: 'Learn React', completed: false },
    { id: 3, title: 'Have a life!', completed: false },
  ]);

  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all'); // Add state for filtering

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: tasks.length + 1,
          title: newTask,
          completed: false,
        },
      ]);
      setNewTask('');
    }
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map(
        (task) => task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleAll = () => {
    const allCompleted = tasks.every(task => task.completed);
    setTasks(tasks.map(task => ({
      ...task, 
      completed: !allCompleted
    })));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  const showTasks = (status) => {
    setFilter(status);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return false;
  });

  const allCompleted = tasks.length > 0 && tasks.every(task => task.completed);
  const remainingCount = filteredTasks.filter(task => !task.completed).length;

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form onSubmit={addTask}>
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
          </form>
        </header>

        <section className="main">
          <input 
            className="toggle-all" 
            type="checkbox" 
            id="toggle-all" 
            checked={allCompleted}
            readOnly
          />
          <label htmlFor="toggle-all" onClick={toggleAll}>Mark all as complete</label>
          <ul className="todo-list">
            {filteredTasks.map((task) => (
              <li key={task.id} className={task.completed ? 'completed' : ''}>
                <div className="view">
                  <input 
                    className="toggle" 
                    type="checkbox" 
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                  />
                  <label>{task.title}</label>
                  <button className="destroy" onClick={() => deleteTask(task.id)}></button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <footer className="footer">
          <span className="todo-count">
            <strong>{remainingCount}</strong> item{remainingCount !== 1 ? 's' : ''} left
          </span>

          <ul className="filters">
            <li>
              <a href="#/" className={filter === 'all' ? 'selected' : ''} onClick={() => showTasks("all")}>All</a>
            </li>
            <li>
              <a href="#/" className={filter === 'active' ? 'selected' : ''} onClick={() => showTasks("active")}>Active</a>
            </li>
            <li>
              <a href="#/" className={filter === 'completed' ? 'selected' : ''} onClick={() => showTasks("completed")}>Completed</a>
            </li>
          </ul>

          <button className="clear-completed" onClick={clearCompleted}>
            Clear completed
          </button>
        </footer>
      </section>
    </>
  );
}

export default App;
