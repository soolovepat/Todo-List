import React from "react";
import TodoHead from "./components/TodoHead";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

const Home = () => {
  return (
    <div>
      <TodoHead />
      <TodoCreate />
      <TodoList />
    </div>
  );
};

export default Home;
