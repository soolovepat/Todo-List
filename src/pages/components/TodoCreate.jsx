import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { addTodo } from "../../Redux/modules/todos";

const TodoCreate = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [todo, setTodo] = useState({ title: "", desc: "" });

  const titleChangeHandler = (event) => {
    setTodo({ ...todo, title: event.target.value });
  };

  const descChangeHandler = (event) => {
    setTodo({ ...todo, desc: event.target.value });
  };

  const handleAddTodo = () => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 0;
    const newTodo = {
      id: lastId + 1,
      ...todo,
      isDone: false,
    };
    if (todo.title !== "" && todo.desc !== "") {
      dispatch(addTodo(newTodo));
    } else {
      alert("입력해주세요 !");
    }

    // input값 초기화
    setTodo({ title: "", desc: "" });
  };

  return (
    <StForm>
      <div className="input-area">
        <input
          type="text"
          value={todo.title}
          onChange={titleChangeHandler}
          placeholder="제목을 입력하세요"
        />

        <input
          type="text"
          value={todo.desc}
          onChange={descChangeHandler}
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
    font-size: 18px;
    line-height: 52px;

    color: #444;
    background-color: #57ffbc;
  }
`;
