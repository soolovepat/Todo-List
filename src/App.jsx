import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Router from "./shared/Router";

const App = () => {
  return (
    <main>
      <GlobalStyle />
      <Router />
    </main>
  );
};

export default App;
