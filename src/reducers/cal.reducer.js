import { ACTION_ADD, ACTION_REM, ACTION_CLR } from "../reducers/Constants";
import axios from "axios";
const getdata = async () => {
  axios
    .get("http://bdadshop.com/api/Home/indexnew")
    .then((response) => {
      // handle success
      // alert(JSON.stringify(response.data));
      // if (response.data.bannervip.length > 0) {
      return response.data.bannervip;
      // }
    })
    .catch((error) => {
      // handle error
      alert(error.message);
    });
  // .finally(function () {
  //   // always executed
  //   alert("Finally called");
  // });
};
const initialState = {
  count: 0,
  x: getdata(),
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_ADD:
      return { ...state, count: state.count + 1 };

    case ACTION_REM:
      return { ...state, count: state.count - 1 };

    case ACTION_CLR:
      return { ...state, count: payload };

    default:
      return state;
  }
};
