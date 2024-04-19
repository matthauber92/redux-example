import { combineReducers } from '@reduxjs/toolkit';
import counterSlice from "./counter/counterSlice.ts";

import { ICounterSlice } from './counter/counterSlice.ts'; // Assuming ICounterSlice is defined in your counterSlice file

// Define RootState interface to represent the entire Redux store's state
export interface RootState {
  counter: ICounterSlice;
}


const rootReducer = combineReducers({
  counter: counterSlice,
});

export default rootReducer;