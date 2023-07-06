import React from "react";
import TodoHead from "../components/TodoHead";
import TodoCreate from "../components/TodoCreate";
import TodoList from "../components/TodoList";

const Home = () => {
  return (
    <>
      <TodoHead />
      <TodoCreate />
      <TodoList />
    </>
  );
};

export default Home;
