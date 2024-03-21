// import { createStore } from "redux";
// import { createSlice, configureStore } from "@reduxjs/toolkit"; //Before separting file we used this.

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === 'toggle'){
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter
//     }
//   }
//   return state;
// };

const store = configureStore({
  // reducer: counterSlice.reducer,
  //use this if we want to merge multiple reducers.
  reducer: { counter: counterReducer, auth: authReducer },
});

// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;
export default store;
