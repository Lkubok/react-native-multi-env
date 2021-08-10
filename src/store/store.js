// import {Platform} from 'react-native';
import {configureStore} from '@reduxjs/toolkit';

import counterSlice from './slices/counterSlice';
// const createFlipperDebugger = require('redux-flipper').default;

// const isMobile = Platform.OS === 'android' || Platform.OS === 'ios';

// import {fetchData} from '../api/api';

// const fetchCovidData = createAsyncThunk(
//   'users/fetchByIdStatus',
//   async (userId, thunkAPI) => {
//     const response = await fetchData();
//     return response.data;
//   },
// );

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware().concat(isMobile && createFlipperDebugger()),
});
