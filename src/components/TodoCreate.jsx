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
        <div className="con-1">
          {/*<span className="input-title">제목</span>*/}
          <input
            type="text"
            value={todo.title}
            onChange={titleChangeHandler}
            placeholder="제목을 입력하세요"
          />
        </div>
        <div className="con-2">
          {/*<span className="input-title">내용</span>*/}
          <input
            type="text"
            value={todo.contents}
            onChange={contentsChangeHandler}
            placeholder="내용을 입력하세요"
          />
        </div>
      </div>

      <button className="add-button" type="button" onClick={handleAddTodo}>
        추가하기
      </button>
    </form>
  );
};

export default TodoCreate;
