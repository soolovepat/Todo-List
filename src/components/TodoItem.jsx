import React from "react";
import { removeTodo, toggleTodo } from "../Redux/modules/todos";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { StTodo } from "../styles/ItemStyle";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const { id, title, desc, isDone } = todo;

  const handleRemove = () => {
    dispatch(removeTodo(id));
  };

  const handleToggle = () => {
    dispatch(toggleTodo(id));
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };

  const truncatedTitle = truncateText(title, 11);
  const truncatedDesc = truncateText(desc, 13);

  return (
    <StTodo className="shadow-box" key={id}>
      <h3>{truncatedTitle}</h3>
      <div className="todo-text">{truncatedDesc}</div>
      <div className="detail-link">
        <Link to={`/${id}`}>자세히보기 &gt;</Link>
      </div>
      <div className="todo-button">
        {isDone ? (
          <>
            <button className="delete-button" onClick={handleRemove}>
              삭제하기
            </button>
            <button className="cancel-button" onClick={handleToggle}>
              취소
            </button>
          </>
        ) : (
          <>
            <button className="delete-button" onClick={handleRemove}>
              삭제하기
            </button>
            <button className="complete-button" onClick={handleToggle}>
              완료
            </button>
          </>
        )}
      </div>
    </StTodo>
  );
};

export default TodoItem;
