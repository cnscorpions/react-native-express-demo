import {types} from '../actionTypes/types';

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  const {todos} = state;
  const {type, payload} = action;
  switch (type) {
    case types.ADD:
      return {
        ...state,
        todos: [payload, ...todos],
      };
      break;
    case types.REMOVE:
      return {
        ...state,
        todos: todos.filter((todo, index) => index !== payload),
      };
      break;
    default:
      return state;
      break;
  }
};

export default todoReducer;
