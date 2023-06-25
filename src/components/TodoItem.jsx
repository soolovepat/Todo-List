import React from "react";

const TodoItem = ({ todo, removeTodo, doneTodo, cancleTodo }) => {
  const { id, title, contents, isDone } = todo;

  const handleRemove = () => {
    removeTodo(id);
  };

  const handleDone = () => {
    doneTodo(id);
  };

  const handleCancel = () => {
    cancleTodo(id);
  };

  return (
    <div className="todo-container" key={id}>
      <div>
        <h2 className="todo-title">{title}</h2>
        <div>{contents}</div>
        <div className="button-set">
          {isDone ? (
            <button className="cancle-button button" onClick={handleCancel}>
              취소
            </button>
          ) : (
            <>
              <button className="delete-button button" onClick={handleRemove}>
                삭제하기
              </button>
              <button className="complete-button button" onClick={handleDone}>
                완료
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
