import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function Detail() {
  const todos = useSelector((state) => state.todos);
  const params = useParams();
  const navigate = useNavigate();
  const findData = todos.find((item) => {
    return item.id === parseInt(params.id);
  });
  return (
    <StDetail className="shadow-box">
      <div>
        <span>ID : {findData.id}</span>
        <button onClick={() => navigate("/")}>이전으로</button>
      </div>
      <h1>{findData.title}</h1>
      <p>{findData.desc}</p>
    </StDetail>
  );
}

export default Detail;

const StDetail = styled.div`
  margin: 80px auto;
  max-width: 500px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid #ebebeb;
    padding-bottom: 14px;
  }

  button {
    color: #535353;
  }

  h1 {
    margin: 40px 0 0 0;
  }
`;
