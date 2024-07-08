import React from "react";

const EliminarTarea = ({ tasks, onDelete }) => {
  const handleDelete = (taskId) => {
    onDelete(taskId);
  };

  return (
    <div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}> {task.description}
            <button onClick={() => handleDelete(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default EliminarTarea;