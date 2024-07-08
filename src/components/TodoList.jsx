import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      {tasks.map((unTtask) => (
        <TodoItem key={unTtask.id} task={unTtask} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TodoList;