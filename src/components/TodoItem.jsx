import React from "react";

const TodoItem = ({ todo, removeTodo, toggleTodo }) => {
  const { id, title, contents, isDone } = todo;

  const handleRemove = () => {
    removeTodo(id);
  };

  const handleToggle = () => {
    toggleTodo(id);
  };

  return (
    <div className="todo-container" key={id}>
      <h3>{title}</h3>
      <div className="todo-text">{contents}</div>
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
    </div>
  );
};

export default TodoItem;
