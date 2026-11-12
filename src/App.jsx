
import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") {
      alert("Please enter a task!");
      return;
    }

    const newTask = {
      id: Date.now(),
      title: task,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  return (
    <div className="app">
      <header className="header">
        <h1>📚 Student Task Manager</h1>
        <p>Organize your studies and stay productive!</p>
      </header>

      <main className="container">
        <section className="task-input">
          <h2>Add Your Task</h2>

          <input
            type="text"
            placeholder="Enter your task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button onClick={addTask}>Add Task</button>
        </section>

        <section className="task-summary">
          <div className="summary-card">
            <h3>{tasks.length}</h3>
            <p>Total Tasks</p>
          </div>

          <div className="summary-card">
            <h3>{tasks.filter((t) => !t.completed).length}</h3>
            <p>Pending Tasks</p>
          </div>

          <div className="summary-card">
            <h3>{tasks.filter((t) => t.completed).length}</h3>
            <p>Completed Tasks</p>
          </div>
        </section>

        <section className="task-list">
          <h2>My Tasks</h2>

          {tasks.length === 0 ? (
            <p className="empty-message">
              No tasks added yet. Start by adding your first task!
            </p>
          ) : (
            tasks.map((item) => (
              <div className="task-item" key={item.id}>
                <span>{item.title}</span>
              </div>
            ))
          )}
        </section>
      </main>

      <footer>
        <p>© 2026 Student Task Manager</p>
      </footer>
    </div>
  );
}

export default App;
