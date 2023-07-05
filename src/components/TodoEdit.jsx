import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editSaveTodo } from "../Redux/modules/todos";
import { styled } from "styled-components";

const TodoEdit = ({ todo, onEditToggle }) => {
  const dispatch = useDispatch();
  const [editedTodo, setEditedTodo] = useState(todo);

  const handleTitleChange = (event) => {
    setEditedTodo({ ...editedTodo, title: event.target.value });
  };

  const handleDescChange = (event) => {
    setEditedTodo({ ...editedTodo, desc: event.target.value });
  };

  const handleSave = () => {
    if (editedTodo.title !== "" && editedTodo.desc !== "") {
      dispatch(editSaveTodo({ id: todo.id, ...editedTodo }));
      onEditToggle();
    } else {
      alert("입력해주세요 !");
    }
  };

  return (
    <StEditForm>
      <div className="input-edit-area">
        <input
          type="text"
          value={editedTodo.title}
          onChange={handleTitleChange}
          placeholder="제목을 입력하세요"
        />
        <input
          type="text"
          value={editedTodo.desc}
          onChange={handleDescChange}
          placeholder="내용을 입력하세요"
        />
      </div>

      <div>
        <button onClick={handleSave} type="button">
          저장하기
        </button>
        <button onClick={onEditToggle} type="button">
          취소
        </button>
      </div>
    </StEditForm>
  );
};

export default TodoEdit;

const StEditForm = styled.form`
  display: flex;
  flex-direction: column;

  .input-edit-area {
    border-radius: 24px;
    background-color: #222;
    padding: 30px;
  }

  input {
    height: fit-content;
    margin: 0 0 20px 0;
  }

  input:first-child {
    margin: 0px 0 20px 0;
    border-bottom: 1px solid #dadada;
  }
`;
