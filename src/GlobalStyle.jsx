import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
main {
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
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
