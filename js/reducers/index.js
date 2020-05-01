import {combineReducers} from 'redux';
import todoReducer from './todos';
import postReducer from './posts';

const rootReducer = combineReducers({
  todos: todoReducer,
  posts: postReducer,
});

export default rootReducer;
