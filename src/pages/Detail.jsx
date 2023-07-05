import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import TodoEdit from "../components/TodoEdit";
import { editTodo } from "../Redux/modules/todos";

function Detail() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const params = useParams();
  const navigate = useNavigate();
  const findData = todos.find((item) => {
    return item.id === parseInt(params.id);
  });
  const handleEditToggle = () => {
    dispatch(editTodo(findData.id));
  };

  return (
    <StDetail className="shadow-box">
      {findData.isEdit ? (
        <>
          <TodoEdit todo={findData} onEditToggle={handleEditToggle} />
        </>
      ) : (
        <>
          <div className="top-title">
            <span>ID : {findData.id}</span>
            <div className="todo-button">
              <button className="edit-button" onClick={handleEditToggle}>
                수정하기
              </button>
              <button onClick={() => navigate("/")}>이전으로</button>
            </div>
          </div>
          <h1>{findData.title}</h1>
          <p>{findData.desc}</p>
        </>
      )}
    </StDetail>
  );
}

export default Detail;

const StDetail = styled.div`
  margin: 80px auto;
  max-width: 500px;

  .top-title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid #ebebeb;
    padding-bottom: 14px;
  }

  button {
    color: #535353;
    max-width: fit-content;
  }

  h1 {
    margin: 40px 0 0 0;
  }

  p {
    margin-bottom: 40px;
  }
`;
