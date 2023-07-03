import React, { useState } from "react";
import TodoHead from "./components/TodoHead";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

function Home() {
  const [todos, setTodos] = useState([
    { id: 1, title: "투두리스트 만들기", contents: "구조 짜기", isDone: false },
    { id: 2, title: "여행 가기", contents: "장소 정하기", isDone: true },
  ]);

  return (
    <div>
      <TodoHead />
      <TodoCreate todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default Home;