import React from "react";
import { useSelector } from "react-redux";
import { useParams, Navigate } from "react-router-dom";
import { styled } from "styled-components";

function Detail() {
  const todos = useSelector((state) => state.todos);
  const params = useParams();
  const findData = todos.find((item) => {
    return item.id === parseInt(params.id);
  });
  return (
    <StDetail>
      <div>
        <span>ID : {findData.id}</span>
        <button onClick={() => Navigate("/")}>이전으로</button>
      </div>
      <h1>{findData.title}</h1>
      <p>{findData.desc}</p>
    </StDetail>
  );
}

export default Detail;

const StDetail = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
`;
