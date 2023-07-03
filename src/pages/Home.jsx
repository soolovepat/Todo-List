import React, { useState } from "react";
import TodoHead from "./components/TodoHead";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

function Home() {
  return (
    <div>
      <TodoHead />
      <TodoCreate />
      {/* <TodoList todos={todos} setTodos={setTodos} /> */}
    </div>
  );
}

export default Home;
