import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, doneTodo, cancleTodo }) => {
  return (
    <div className="list-container">
      <h2 className="list-titl">Working..</h2>
      <div className="list-wrapper">
        {todos
          .filter((todo) => !todo.isDone)
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              doneTodo={doneTodo}
            />
          ))}
      </div>

      <h2 className="list-titl">Done..!!</h2>
      <div className="list-wrapper">
        {todos
          .filter((todo) => todo.isDone)
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              cancleTodo={cancleTodo}
            />
          ))}
      </div>
    </div>
  );
};

export default TodoList;
