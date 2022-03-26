import { configureStore } from '@reduxjs/toolkit';
import { stateVerbsReducer } from './reducer';

export const store = configureStore({
  reducer: {
    verbs: stateVerbsReducer,
  },
});
