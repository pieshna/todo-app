import React, { useState } from "react";
import "../css/TodoItem.css";

function TodoItem({ todo, onComplete, onDeleteItem, onEditItem }) {
  const [valor, setValor] = useState(todo.task);
  const [editando, setEditando] = useState(false);
  const getStyle = () => {
    return {
      textDecoration: todo.completed ? "line-through" : "none",
      backgroundColor: todo.completed ? "#f4f4f4" : "#fff",
      color: todo.completed ? "#aaa" : "#000",
    };
  };

  const submitUpdate = () => {
    onEditItem(todo.id, valor);
    setEditando(false);
  };
  const handleOnChange = (e) => {
    setValor(e.target.value);
  };

  return (
    <div className="item" style={getStyle()}>
      {editando ? (
        <div className="editar">
          <input type="text" value={valor} onChange={handleOnChange} />
          <button onClick={submitUpdate}>Guardar</button>
          <button
            onClick={() => {
              setEditando(false);
            }}
          >
            Cancelar
          </button>
        </div>
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onComplete(todo.id)}
          />
          <p>{todo.task}</p>
          <button
            className="eliminar"
            onClick={() => {
              onDeleteItem(todo.id);
            }}
          >
            x
          </button>
          <button
            className="editar"
            onClick={() => {
              setEditando(true);
              setValor(todo.task);
            }}
          >
            Editar
          </button>
        </>
      )}
    </div>
  );
}

export default TodoItem;
