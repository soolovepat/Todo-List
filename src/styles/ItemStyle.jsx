import { styled } from "styled-components";

export const StTodo = styled.div`
  min-width: 226px;

  h3 {
    margin: 0 0 10px;
  }

  .todo-text {
    margin-bottom: 14px;
  }

  .detail-link {
    margin-bottom: 24px;
  }

  a {
    font-size: 16px;
    color: #8f8f8f;
    text-decoration: none;
  }

  .todo-button > button {
    flex: 1;

    color: #444;
    background-color: #d1d1d1;
  }

  .todo-button > .complete-button {
    background-color: #57ffbc;
  }
`;
