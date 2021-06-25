import {
  ACTION_ADD,
  ACTION_REM,
  ACTION_CLR,
  ACTION_LOAD,
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
} from "../reducers/Constants";
import loadData from "./api";

import axios from "axios";

export const setStateToADD = () => ({
  type: ACTION_ADD,
});

export const setStateToREM = () => ({
  type: ACTION_REM,
});

export const setStateToCLR = (payload) => ({
  type: ACTION_CLR,
  payload,
});

export const setStateToLoad = () => ({
  type: ACTION_LOAD,
});

export const add = () => {
  // do something
  return (dispatch) => {
    setTimeout(() => {
      dispatch(setStateToADD());
    }, 1000);
  };
};

export const remove = () => {
  // do something
  return (dispatch) => {
    setTimeout(() => {
      dispatch(setStateToREM());
    }, 1000);
  };
};

export const clear = (payload) => {
  // do something
  return (dispatch) => {
    dispatch(setStateToCLR(payload));
  };
};

// const fetchPostsStarted = (data) => ({
//   type: FETCHING_DATA,
//   payload: {
//     isLoading: true,
//   },
// });

// const getToDosSuccess = (data) => ({
//   type: FETCHING_DATA_SUCCESS,
//   type: { data },
// });

// const getToDosFailure = (data) => ({
//   type: FETCHING_DATA_FAILURE,
//   payload: {
//     error,
//   },
// });

// export const fetchToDos = () => {
//   return (dispatch) => {
//     dispatch(fetchPostsStarted());
//     axios
//       .get("http://bdadshop.com/api/Home/indexnew")
//       .then((response) => {
//         // handle your response here, create an object/array/array of objects etc...
//         // and return it in dispatch(getToDosSuccess(data over here))
//         return dispatch(getToDosSuccess(response.data));
//       })
//       .catch((err) => dispatch(getToDosFailure(err.message)));
//   };
// };

export const fetchData = () => {
  return (dispatch) => {
    dispatch(setStateToFetching());
    loadData()
      .then((result) => {
        dispatch(setStateToSuccess(result));
      })
      .catch((error) => {
        dispatch(setStateToFailure());
      });
  };
};
// export function fetchToDos() {
//   return (dispatch) => {
//     dispatch(getTodos());
//     return fetch("http://bdadshop.com/api/Home/indexnew")
//       .then((res) => res.json())
//       .then((json) => {
//         return dispatch(getToDosSuccess(json));
//       })
//       .catch((err) => dispatch(getToDosFailure(err)));
//   };
// }

// function getToDos() {
//   return {
//     type: FETCHING_TODOS,
//   };
// }

// function getToDosSuccess(data) {
//   return {
//     type: FETCH_TODOS_SUCCESS,
//     data,
//   };
// }

// function getToDosFailure() {
//   return {
//     type: FETCH_TODOS_FAILURE,
//   };
// }
