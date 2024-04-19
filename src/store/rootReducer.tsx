import { combineReducers } from '@reduxjs/toolkit';
import counterSlice from "./counter/counterSlice.ts";

import { ICounterSlice } from './counter/counterSlice.ts';

export interface RootState {
  counter: ICounterSlice;
}


const rootReducer = combineReducers({
  counter: counterSlice,
});

export default rootReducer;