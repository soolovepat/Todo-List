import React from "react";
import Header from "../components/Header";
import TodoCreate from "../features/TodoCreate";
import TodoList from "../features/TodoList";

const Home = () => {
  return (
    <>
      <Header />
      <TodoCreate />
      <TodoList />
    </>
  );
};

export default Home;
