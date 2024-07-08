import React, { useState } from "react";

const AgregarList = ({ setTasks, tasks }) => {
  const [taskDescription, setTaskDescription] = useState("");

  const addTask = (taskDescription) => {
    const newTask = {
      id: Math.random(),
      description: taskDescription,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskDescription.trim()) {
      addTask(taskDescription);
      setTaskDescription("");
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input type="text" value={taskDescription} onChange={(e) => handleChange(e)} />
      <div className="button-container">
        <button className="btn-agregar" type="submit">Agregar</button>
      </div>
    </form>
  );
};

export default AgregarList;