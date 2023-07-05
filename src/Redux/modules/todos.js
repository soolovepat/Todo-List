const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const EDIT_TODO = "EDIT_TODO";
const EDIT_SAVE_TODO = "EDIT_SAVE_TODO";

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const removeTodo = (payload) => {
  return { type: REMOVE_TODO, payload };
};

export const toggleTodo = (payload) => {
  return { type: TOGGLE_TODO, payload };
};

export const editTodo = (payload) => {
  return { type: EDIT_TODO, payload };
};

export const editSaveTodo = (payload) => {
  return { type: EDIT_SAVE_TODO, payload };
};

const initialState = [
  {
    id: 1,
    title: "투두리스트 만들기",
    desc: "구조 짜기",
    isDone: false,
    isEdit: false,
  },
  {
    id: 2,
    title: "여행 가기",
    desc: "장소 정하기",
    isDone: true,
    isEdit: false,
  },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    case EDIT_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isEdit: !todo.isEdit } : todo
      );
    case EDIT_SAVE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    default:
      return state;
  }
};

export default todos;
