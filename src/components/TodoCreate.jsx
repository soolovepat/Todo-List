import React, { useState } from "react";
import "./TodoCreate.css";

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
    setTodos([...todos, newTodo]);

    // input값 초기화
    setTodo({ title: "", contents: "" });
  };

  return (
    <form className="text-form">
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
    </form>
  );
};

export default TodoCreate;
