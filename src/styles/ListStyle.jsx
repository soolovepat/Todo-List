import { styled } from "styled-components";

export const StTodoList = styled.div`
  padding: 20px;

  section:nth-child(1) {
    margin-bottom: 50px;
  }

  .list-wrapper {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 14px;
  }
`;
