import React from "react";

const TodoItem = ({ task, onDelete, onToggle }) => {
  const handleDelete = () => {
    onDelete(task.id);
  };
  const handleToggle = () => {
    onToggle(task.id);
  };

  return (
    <div>
      <input type="checkbox" checked={task.completed} onChange={handleToggle}/>
      <span>{task.description}</span>
      <button className= "btn-borrar" onClick={handleDelete}>Eliminar</button>
    </div>
  );
};

export default TodoItem;