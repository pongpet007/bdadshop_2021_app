import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
} from "../reducers/Constants";

import axios from "axios";

const fetchPostsStarted = (data) => ({
  type: FETCHING_DATA,
  payload: {
    isLoading: true,
  },
});

const getToDosSuccess = (data) => ({
  type: FETCHING_DATA_SUCCESS,
  type: { data },
});

const getToDosFailure = (data) => ({
  type: FETCHING_DATA_FAILURE,
  payload: {
    error,
  },
});

export const fetchToDos = () => {
  return (dispatch) => {
    dispatch(fetchPostsStarted());
    axios
      .get("http://bdadshop.com/api/Home/indexnew")
      .then((response) => {
        // handle your response here, create an object/array/array of objects etc...
        // and return it in dispatch(getToDosSuccess(data over here))
        return dispatch(getToDosSuccess(response.data));
      })
      .catch((err) => dispatch(getToDosFailure(err.message)));
  };
};
