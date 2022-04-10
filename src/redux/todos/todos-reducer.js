import { createReducer, combineReducers } from '@reduxjs/toolkit';
import todoActions from './todos-action';

//  const todosReducer = (state = [], action) => state

const todosReducer = createReducer([], {
  [todoActions.addTaskSuccess]: (state, { payload }) => [...state, payload],
  [todoActions.deleteTaskSuccess]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
  [todoActions.complitedTaskSuccess]: (state, { payload }) =>
    state.map(item => {
      if (item.id === payload) {
        return {
          ...item,
          complited: !item.complited,
        };
      }
      return item;
    }),
});

const filterReducer = (state = '', action) => state;
const loadingReducer = (state = false, action) => state;

export const todosRootReducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
  loading: loadingReducer,
});
