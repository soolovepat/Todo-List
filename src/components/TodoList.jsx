import React from "react";
import TodoItem from "./TodoItem";
import { styled } from "styled-components";
import "./TodoList.css";

const TodoSection = ({ title, todos, removeTodo, toggleTodo, isDone }) => {
  const filteredTodos = todos.filter((todo) => todo.isDone === isDone);

  return (
    <section className="todo-section">
      <h2 className="list-title">{title}</h2>
      <ul className="list-wrapper">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        ))}
      </ul>
    </section>
  );
};

const TodoList = ({ todos, setTodos }) => {
  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list">
      <TodoSection
        title="Working..🔥"
        todos={todos}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
        isDone={false}
      />
      <TodoSection
        title="Done..!🎉"
        todos={todos}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
        isDone={true}
      />
    </div>
  );
};

export default TodoList;
