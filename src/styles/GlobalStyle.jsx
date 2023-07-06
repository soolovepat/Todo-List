import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  font-family: "Noto Sans KR", sans-serif, -apple-system, BlinkMacSystemFont,
    "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

main {
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
}

input {
    padding: 0 24px;
    font-size: 18px;
    line-height: 52px;
    color: #fff;
    border: 0;
    border-radius: 24px;
    background-color: #222;
  }

input:focus {
  outline: none;
}

ul {
  margin: 0;
  padding: 0;
}

button {
  font-family: "Noto Sans KR", sans-serif;
  padding: 0 12px;
  border: 0;
  border-radius: 52px;
  font-size: 16px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: -1px;
}

.todo-button {
    display: flex;
    gap: 10px;
  }

.todo-head {
  margin: 20px 30px;
  display: flex;
  justify-content: space-between;
}

.shadow-box {
  padding: 24px;
  display: flex;
  flex-direction: column;

  border-radius: 14px;
  background-color: #fff;
  box-shadow: 4px 12px 30px 6px rgba(0, 0, 0, 0.09);
}
`;

export default GlobalStyle;
