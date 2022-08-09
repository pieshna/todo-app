import React from "react";
import "../css/TodoItem.css";

function TodoItem({ todo, onComplete, onDeleteItem }) {
  const getStyle = () => {
    return {
      textDecoration: todo.completed ? "line-through" : "none",
      backgroundColor: todo.completed ? "#f4f4f4" : "#fff",
      color: todo.completed ? "#aaa" : "#000",
    };
  };

  return (
    <div className="item" style={getStyle()}>
        <input type="checkbox"  checked={todo.completed} onChange={()=> onComplete(todo.id)} />
      {todo.task}
      <button className="eliminar" onClick={() => {onDeleteItem(todo.id)}}>x</button>
    </div>
  );
}

export default TodoItem;
