import React from "react";
import TodoItem from "./TodoItem";
import { styled } from "styled-components";
import { useSelector } from "react-redux";

const TodoSection = ({ title, todos, isDone }) => {
  const filteredTodos = todos.filter((todo) => todo.isDone === isDone);

  return (
    <section className="todo-section">
      <h2 className="list-title">{title}</h2>
      <ul className="list-wrapper">
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
};

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <StTodoList>
      <TodoSection title="Working..🔥" todos={todos} isDone={false} />
      <TodoSection title="Done..!🎉" todos={todos} isDone={true} />
    </StTodoList>
  );
};

export default TodoList;

const StTodoList = styled.div`
  padding: 30px;

  .working-sec {
    margin-bottom: 50px;
  }

  .list-wrapper {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 14px;
  }

  .todo-container {
    min-width: 226px;
    padding: 24px;

    display: flex;
    flex-direction: column;

    border-radius: 14px;
    background-color: #fff;
    box-shadow: 4px 12px 30px 6px rgba(0, 0, 0, 0.09);
  }

  .todo-container > h3 {
    margin: 0 0 10px;
  }

  .todo-container > .todo-text {
    margin-bottom: 20px;
  }
  .todo-button {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  .todo-button > button {
    flex: 1;

    padding: 0 12px;
    border: 0;
    border-radius: 52px;
    font-size: 16px;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: -1px;
    color: #444;
    background-color: #d1d1d1;
  }

  .todo-button > .complete-button {
    background-color: #57ffbc;
  }
`;
