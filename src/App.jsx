import React from "react";
import GlobalStyle from "./GlobalStyle";
import Router from "./shared/Router";

const App = () => {
  return (
    <main className="layout">
      <GlobalStyle />
      <Router />
    </main>
  );
};

export default App;
