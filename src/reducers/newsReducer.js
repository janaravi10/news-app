import { GOT_NEWS, NEWS_LOADING_FAILED } from "../actions/actionTypes";

const initialState = {
  news: [],
  isLoading: true,
  errorExist: false,
  error: ""
};

export function handleNews(state = initialState, action) {
  switch (action.type) {
    case GOT_NEWS:
      return Object.assign({}, state, action.payload);
    case NEWS_LOADING_FAILED:
      let newState = Object.assign({}, state, action.payload);
      newState.errorExist = true;
      delete newState.news;
      return newState;
    default:
      return state;
  }
}
