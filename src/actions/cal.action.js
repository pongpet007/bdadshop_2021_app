import {
  ACTION_ADD,
  ACTION_REM,
  ACTION_CLR,
  ACTION_LOAD,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  FETCHING_TODOS,
} from "../reducers/Constants";

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

export function fetchToDos() {
  return (dispatch) => {
    dispatch(getTodos());
    return fetch("http://bdadshop.com/api/Home/indexnew")
      .then((res) => res.json())
      .then((json) => {
        return dispatch(getToDosSuccess(json));
      })
      .catch((err) => dispatch(getToDosFailure(err)));
  };
}

function getToDos() {
  return {
    type: FETCHING_TODOS,
  };
}

function getToDosSuccess(data) {
  return {
    type: FETCH_TODOS_SUCCESS,
    data,
  };
}

function getToDosFailure() {
  return {
    type: FETCH_TODOS_FAILURE,
  };
}

// export function fetchToDos() {
//   return (dispatch) => {
//     dispatch(getUser());
//     axios
//       .get("http://bdadshop.com/api/Home/indexnew")
//       .then(function (response) {
//         // handle your response here, create an object/array/array of objects etc...
//         // and return it in dispatch(getToDosSuccess(data over here))

//         return dispatch(getToDosSuccess(response.data));
//       })
//       .catch((err) => dispatch(getToDosFailure(err)));
//   };
// }
