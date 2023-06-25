import React, { useState } from "react";
import "./App.css";
import TodoHead from "./components/TodoHead";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "투두리스트 만들기", contents: "구조 짜기", isDone: false },
    { id: 2, title: "여행 가기", contents: "장소 정하기", isDone: true },
  ]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const doneTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: true } : todo
    );
    setTodos(updatedTodos);
  };

  const cancleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: false } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <TodoHead />
      <TodoCreate addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        doneTodo={doneTodo}
        cancleTodo={cancleTodo}
      />
    </div>
  );
};

export default App;
