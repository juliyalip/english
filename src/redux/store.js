import { configureStore } from '@reduxjs/toolkit';
import { stateVerbsReducer, adverbsReducer } from './reducer';

export const store = configureStore({
  reducer: {
    verbs: stateVerbsReducer,
    adverbs: adverbsReducer,
  },
});
