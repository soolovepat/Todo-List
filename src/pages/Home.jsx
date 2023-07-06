import React from "react";
import Header from "../components/Header";
import TodoCreate from "../components/TodoCreate";
import TodoList from "../components/TodoList";

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
