import { styled } from "styled-components";

export const StForm = styled.form`
  padding: 30px;
  border-radius: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 4px 12px 30px 6px rgba(0, 0, 0, 0.09);

  input {
    padding: 0 24px;
    border-radius: 24px;
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
