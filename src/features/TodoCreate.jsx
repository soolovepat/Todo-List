import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/modules/todos";
import { StForm } from "../styles/CreateStyle";

const TodoCreate = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [todo, setTodo] = useState({ title: "", desc: "" });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleAddTodo = () => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 0;
    const newTodo = {
      id: lastId + 1,
      ...todo,
      isDone: false,
      isEdit: false,
    };
    todo.title !== "" && todo.desc !== ""
      ? dispatch(addTodo(newTodo))
      : alert("입력해주세요 !");

    // input값 초기화
    setTodo({ title: "", desc: "" });
  };

  return (
    <StForm>
      <div className="input-area">
        <input
          type="text"
          name="title"
          value={todo.title}
          onChange={changeHandler}
          placeholder="제목을 입력하세요"
        />

        <input
          type="text"
          name="desc"
          value={todo.desc}
          onChange={changeHandler}
          placeholder="내용을 입력하세요"
        />
      </div>

      <button className="add-button" type="button" onClick={handleAddTodo}>
        추가하기
      </button>
    </StForm>
  );
};

export default TodoCreate;
