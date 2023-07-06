import React from "react";
import Header from "../components/Header";
import TodoCreate from "../features/TodoCreate";
import TodoList from "../features/TodoList";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <TodoCreate />
      <TodoList />
    </Layout>
  );
};

export default Home;
