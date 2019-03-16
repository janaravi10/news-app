import {
  GOT_NEWS,
  NEWS_LOADING_FAILED,
  SETTINGS_UPDATE
} from "../actions/actionTypes";

const initialState = {
  news: [],
  isLoading: true,
  errorExist: false,
  error: "",
  language: ""
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
    case SETTINGS_UPDATE:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
