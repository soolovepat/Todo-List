import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import TodoEdit from "../components/TodoEdit";
import { editTodo } from "../Redux/modules/todos";
import { StDetail } from "../styles/DetailStyle";

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
