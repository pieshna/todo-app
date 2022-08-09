import React from "react";
import TodoItem from "./TodoItem";
import "../css/TodoList.css";

function TodoList ({todos, onComplete, onDeleteItem}) {
  return (
    <div className="container">
        <h1>Todo List</h1>
      {
        todos.map((todo, index) => (
            <TodoItem todo={todo} key = {index} onComplete={onComplete} onDeleteItem={onDeleteItem}/>
        ))
      }
    </div>
  );
}

export default TodoList;
