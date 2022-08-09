import "./App.css";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";
import Register from "./Auth/Register";
import Login from "./Auth/Login";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const [loged, setLoged] = useState(false);
  const [clickedRegister, setClickedRegister] = useState(false);
  const [userIdLogued, setUserIdLogued] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const onComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, completed: !todo.completed }
          : { ...todo };
      })
    );
  };

  const onDeleteItem = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (newTodo) => {
    let newItem = {
      id: +new Date(),
      task: newTodo,
      completed: false,
      user: userIdLogued,
    };
    setTodos([...todos, newItem]);
  };
  const onEditItem = (id, newValue) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, task: newValue } : { ...todo };
      })
    );
  };
  const onRegister = (user) => {
    setUsers([...users, user]);
    setClickedRegister(false);
    setUserIdLogued(user.id);
    setLoged(true);
  };
  const onLogin = (user) => {
    const userExist = users.find((u) => u.email === user.email);
    if (userExist) {
      users.find((u) => {
        if (u.email === user.email && u.password === user.password) {
          console.log("loged in");
          setUserIdLogued(u.id);
          setLoged(true);
        } else if (u.email === user.email && u.password !== user.password) {
          alert("Email o contraseña incorrectos");
        }
      });
    } else {
      alert("no existe el usuario");
    }
  };

  return (
    <div className="App">
      {console.log(userIdLogued)}
      {loged ? (
        <TodoList
          userIdLogued={userIdLogued}
          setLoged={setLoged}
          addTodo={addTodo}
          todos={todos}
          onComplete={onComplete}
          onDeleteItem={onDeleteItem}
          onEditItem={onEditItem}
        />
      ) : clickedRegister ? (
        <Register
          register={onRegister}
          setClickedRegister={setClickedRegister}
        />
      ) : (
        <Login login={onLogin} setClickedRegister={setClickedRegister} />
      )}
    </div>
  );
}

export default App;
