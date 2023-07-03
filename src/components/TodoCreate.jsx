import React, { useState } from "react";
import { styled } from "styled-components";

const TodoCreate = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState({ title: "", contents: "" });

  const titleChangeHandler = (event) => {
    setTodo({ ...todo, title: event.target.value });
  };

  const contentsChangeHandler = (event) => {
    setTodo({ ...todo, contents: event.target.value });
  };

  const handleAddTodo = () => {
    const newTodo = {
      id: todos[todos.length - 1].id + 1,
      ...todo,
      isDone: false,
    };
    if (todo.title !== "" && todo.contents !== "") {
      setTodos([...todos, newTodo]);
    }

    // input값 초기화
    setTodo({ title: "", contents: "" });
  };

  return (
    <StForm className="text-form">
      <div className="input-area">
        <input
          type="text"
          value={todo.title}
          onChange={titleChangeHandler}
          placeholder="제목을 입력하세요"
        />

        <input
          type="text"
          value={todo.contents}
          onChange={contentsChangeHandler}
          placeholder="내용을 입력하세요"
        />
      </div>

      <button className="add-button" type="button" onClick={handleAddTodo}>
        추가하기
      </button>
    </StForm>
  );
};

export default TodoCreate;

const StForm = styled.form`
  padding: 30px;
  border-radius: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 4px 12px 30px 6px rgba(0, 0, 0, 0.09);

  input {
    padding: 0 24px;
    font-size: 18px;
    line-height: 52px;
    color: #fff;
    border: 0;
    border-radius: 22px;
    background-color: #222;
  }

  .input-area {
    display: flex;
    justify-content: space-between;
  }

  input:nth-child(2) {
    margin-left: 30px;
  }

  .add-button {
    padding: 0 24px;
    border: 0;
    border-radius: 52px;
    font-size: 18px;
    font-weight: 500;
    line-height: 52px;
    letter-spacing: -1px;
    color: #444;
    background-color: #57ffbc;
  }
`;
