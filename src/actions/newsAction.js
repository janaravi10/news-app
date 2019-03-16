import { GOT_NEWS, NEWS_LOADING_FAILED, SETTINGS_UPDATE } from "./actionTypes";
import axios from "axios";
export const getNews = () => {
  return dispatch => {
    axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=e12c815d5ca54ead874a01c0feb3d58d").then(res => {
      if (res.data.status === "ok") {
        dispatch({
          type: GOT_NEWS,
          payload: { news: res.data.articles, isLoading: false }
        });
      } else {
        dispatch({
          type: NEWS_LOADING_FAILED,
          payload: {
            isLoading: false,
            error: "Something went wrong :("
          }
        });
      }
    });
  };
};
export const setLanguage = language => {
  return dispatch => {
    // set language to the local storage
    localStorage.setItem("language", language);

    dispatch({
      type: SETTINGS_UPDATE,
      payload: {
        language: language
      }
    });
    getNews()(dispatch);
  };
};
