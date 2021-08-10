import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {fetchData} from '../../api/api';

export const fetchCovidData = createAsyncThunk(
  'counter/fetchCovidData',
  async (userId, thunkAPI) => {
    const response = await fetchData();
    return response;
  },
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    covidData: null,
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchCovidData.fulfilled]: (state, action) => {
      // Add user to the state array
      state.covidData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;
