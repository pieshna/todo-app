import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { useEffect, useState } from 'react';

function App() {

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  } , [todos]);

  const onComplete=(id) => {
    setTodos(todos.map((todo)=>{
      return todo.id === id? {...todo,completed:!todo.completed}: {...todo}
    }))
  }

  const onDeleteItem=(id) => {
    setTodos(todos.filter(todo=>todo.id!==id))
  }
  

  const addTodo=(newTodo) => {
    let newItem = {
      id: +new Date(), task : newTodo, completed: false
    }
    setTodos([...todos,newItem])
  }
  const onEditItem=(id,newValue) => {
    setTodos(todos.map(todo=>{
      return todo.id===id?{...todo,task:newValue}: {...todo}
    }))
  }
  
  return (
    <div className="App">
      <TodoList addTodo={addTodo} todos={todos} onComplete={onComplete} onDeleteItem={onDeleteItem} onEditItem={onEditItem}/>
    </div>
  );
}

export default App;
