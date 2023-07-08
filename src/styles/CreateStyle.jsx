import { styled } from "styled-components";

export const StForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    padding: 0 24px;
    border-radius: 24px;
    width: 300px;
  }

  .input-area {
    display: flex;
    justify-content: space-between;
  }

  input:nth-child(2) {
    margin-left: 30px;
  }

  .add-button {
    padding: 0 24px;
    font-size: 18px;
    line-height: 52px;

    color: #444;
    background-color: #57ffbc;
  }
`;
