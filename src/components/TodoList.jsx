import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todos, removeTodo, doneTodo, cancleTodo }) => {
  const workingFilter = todos.filter((todo) => !todo.isDone);
  const doneFilter = todos.filter((todo) => todo.isDone);

  const renderTodoItems = (filteredTodos, onRemove, onToggle) => {
    return filteredTodos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        removeTodo={onRemove}
        doneTodo={onToggle}
        cancleTodo={onToggle} // cancleTodo가 필요한 경우에도 onToggle로 사용
      />
    ));
  };

  return (
    <div className="todo-list">
      <section className="working-sec">
        <h2 className="list-titl">Working..🔥</h2>
        <div className="list-wrapper">
          {renderTodoItems(workingFilter, removeTodo, doneTodo)}
        </div>
      </section>
      <section className="done-sec">
        <h2 className="list-titl">Done..!🎉</h2>
        <div className="list-wrapper">
          {renderTodoItems(doneFilter, removeTodo, cancleTodo)}
        </div>
      </section>
    </div>
  );
};

export default TodoList;
