import React, { useState } from "react";
import "./TodoCreate.css";

const TodoCreate = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const contentsChangeHandler = (event) => {
    setContents(event.target.value);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      id: Date.now(),
      title,
      contents,
      isDone: false,
    };
    setTodos([...todos, newTodo]);

    // input값 초기화
    setTitle("");
    setContents("");
  };

  return (
    <form className="text-form">
      <div className="input-area">
        <div className="con-1">
          {/*<span className="input-title">제목</span>*/}
          <input
            value={title}
            onChange={titleChangeHandler}
            placeholder="제목을 입력하세요"
          />
        </div>
        <div className="con-2">
          {/*<span className="input-title">내용</span>*/}
          <input
            value={contents}
            onChange={contentsChangeHandler}
            placeholder="내용을 입력하세요"
          />
        </div>
      </div>

      <button className="add-button" onClick={handleAddTodo}>
        추가하기
      </button>
    </form>
  );
};

export default TodoCreate;
