import {types} from '../actionTypes/types';

export const actionCreators = {
  add: item => ({
    type: types.ADD,
    payload: item,
  }),
  remove: index => ({
    type: types.REMOVE,
    payload: index,
  }),
  fetchPosts: () => async (dispatch, getState) => {
    dispatch({type: types.FETCH_POSTS_REQUEST});

    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
      );
      const posts = await response.json();
      dispatch({type: types.FETCH_POSTS_RESPONSE, payload: posts});
    } catch (error) {
      dispatch({type: types.FETCH_POSTS_RESPONSE, payload: error, error: true});
    }
  },
  clearPosts: () => async (dispatch, getState) => {
    if (getState().posts.length > 0) {
      dispatch({type: types.CLEAR_POSTS});
    }
  },
};
