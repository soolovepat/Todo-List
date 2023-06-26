import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todos, setTodos }) => {
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

  const cancelTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: false } : todo
    );
    setTodos(updatedTodos);
  };

  const workingFilter = todos.filter((todo) => !todo.isDone);
  const doneFilter = todos.filter((todo) => todo.isDone);

  const renderTodoItems = (filteredTodos, onRemove, onToggle) => {
    return filteredTodos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        removeTodo={onRemove}
        doneTodo={onToggle}
        cancelTodo={onToggle} // cancelTodo가 필요한 경우에도 onToggle로 사용
      />
    ));
  };

  return (
    <div className="todo-list">
      <section className="working-sec">
        <h2 className="list-title">Working..🔥</h2>
        <ul className="list-wrapper">
          {renderTodoItems(workingFilter, removeTodo, doneTodo)}
        </ul>
      </section>
      <section className="done-sec">
        <h2 className="list-title">Done..!🎉</h2>
        <ul className="list-wrapper">
          {renderTodoItems(doneFilter, removeTodo, cancelTodo)}
        </ul>
      </section>
    </div>
  );
};

export default TodoList;
