import { combineReducers } from "redux";
import calReducer from "./cal.reducer";
import loadReducer from "./load.reducer";

// import React from "react";
// import { AppRegistry } from "react-native";
// import App from "../../App";
// import { name as appName } from "./../../app.json";

// // Redux begin
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
// import thunk from "redux-thunk";
// import reducers from "../reducers";
// import { AppRegistry } from "react-native";
// // Redux End

// const store = createStore(reducers, applyMiddleware(thunk, logger));

// const ReduxApp = () => (
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

// AppRegistry.registerComponent(appName, () => ReduxApp);

export default combineReducers({ calReducer, loadReducer });
