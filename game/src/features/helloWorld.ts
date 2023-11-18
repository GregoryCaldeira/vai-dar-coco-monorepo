import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  value: string;
}

const initialState: CounterState = {
  value: 'hello world',
};

export const helloWorldSlice = createSlice({
  name: 'helloWorld',
  initialState,
  reducers: {},
});

export default helloWorldSlice.reducer;
