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

  const handleAddTodo = () => {
    const newTodo = {
      id: todos[todos.length - 1].id + 1,
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
            type="text"
            value={title}
            onChange={titleChangeHandler}
            placeholder="제목을 입력하세요"
          />
        </div>
        <div className="con-2">
          {/*<span className="input-title">내용</span>*/}
          <input
            type="text"
            value={contents}
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
