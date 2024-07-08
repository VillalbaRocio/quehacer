import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import AgregarList from "./components/AgregarLista";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    console.log(tasks)
  }, [tasks]);

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="lista-container">
      <h2>Lista de Tareas</h2>
      <AgregarList setTasks= {setTasks} tasks= {tasks}/>
      <TodoList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
    </div>
  );
};

export default App;