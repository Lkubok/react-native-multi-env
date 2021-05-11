import {configureStore} from '@reduxjs/toolkit';

import counterSlice from './slices/counterSlice';
const createFlipperDebugger = require('redux-flipper').default;

export const configureStore({
  reducer: {
    counter: counterSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(createFlipperDebugger()),
});
