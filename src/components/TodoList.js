import React from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import "../css/TodoList.css";

function TodoList ({addTodo,todos, onComplete, onDeleteItem, onEditItem}) {
  return (
    <div className="container">
        <div className="cabecera">
            <h1>Todo List</h1>
        </div>
        <div>
        <TodoForm addTodo={addTodo}/>
      {
        todos.map((todo, index) => (
            <TodoItem todo={todo} key = {index} onComplete={onComplete} onDeleteItem={onDeleteItem} onEditItem={onEditItem}/>
        ))
      }</div>
    </div>
  );
}

export default TodoList;
