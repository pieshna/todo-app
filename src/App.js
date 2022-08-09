import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { useState } from 'react';

function App() {

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')))

  const onComplete=(id) => {
    setTodos(todos.map((todo)=>{
      return todo.id === id? {...todo,completed:!todo.completed}: {...todo}
    }))
  }

  const onDeleteItem=(id) => {
    setTodos(todos.filter(todo=>todo.id!==id))
  }



  return (
    <div className="App">
      <TodoForm/>
      <TodoList todos={todos} onComplete={onComplete} onDeleteItem={onDeleteItem} />
    </div>
  );
}

export default App;
