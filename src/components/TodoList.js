import React from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import "../css/TodoList.css";

function TodoList ({addTodo,todos, onComplete, onDeleteItem, onEditItem, setLoged, userIdLogued}) {
  return (
    <div className="container">
        <div className="cabecera">
            <h1>Todo List</h1>
            <button onClick={()=>{setLoged(false)}}>Logout</button>
        </div>
        <div>
        <TodoForm addTodo={addTodo}/>
      {
        todos.map((todo, index) => {
          if(todo.user === userIdLogued){
            return <TodoItem todo={todo} key = {index} onComplete={onComplete} onDeleteItem={onDeleteItem} onEditItem={onEditItem}/>
          }
        })
      }</div>
    </div>
  );
}

export default TodoList;
