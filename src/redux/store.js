import { configureStore } from '@reduxjs/toolkit';
import { stateVerbsReducer, adverbsReducer } from './reducer';
import { todosRootReducer } from './todos/todos-reducer';

export const store = configureStore({
  reducer: {
    verbs: stateVerbsReducer,
    adverbs: adverbsReducer,
    taski: todosRootReducer,
  },
});
