import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface ICounterSlice {
  value: number;
}

const initialState: ICounterSlice = {
  value: 0
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrement: state => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
