import axios from "axios";

import {
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  FETCHING_TODOS,
} from "../reducers/Constants";

const initialState = {
  count: 0,
  todos: [],
  isFetching: false,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_TODOS:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        todos: action.data,
      };
    case FETCH_TODOS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};
