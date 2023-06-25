import React, { useState } from "react";

const TodoCreate = ({ addTodo }) => {
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
    addTodo(newTodo);
    setTitle("");
    setContents("");
  };

  return (
    <form>
      <span>제목</span>
      <input value={title} onChange={titleChangeHandler} />
      <span>내용</span>
      <input value={contents} onChange={contentsChangeHandler} />
      <button onClick={handleAddTodo}>추가하기</button>
    </form>
  );
};

export default TodoCreate;
