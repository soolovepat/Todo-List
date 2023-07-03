import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ul {
  margin: 0;
  padding: 0;
}

button {
  font-family: "Noto Sans KR", sans-serif;
}

.layout {
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
}

.todo-head {
  margin: 20px 30px;
  display: flex;
  justify-content: space-between;
}
`;

export default GlobalStyle;
