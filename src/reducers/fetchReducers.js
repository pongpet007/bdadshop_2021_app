import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
} from "./Constants";

const initialState = {
  isFetching: false,
  data: [],
  isError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        isFetching: true,
        data: [],
      };
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        data: action.payload.data,
      };
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
