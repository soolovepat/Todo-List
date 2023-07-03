const ADD_TODO = "ADD_TODO";

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

const initialState = [
  { id: 1, title: "투두리스트 만들기", contents: "구조 짜기", isDone: false },
  { id: 2, title: "여행 가기", contents: "장소 정하기", isDone: true },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
  }
};
