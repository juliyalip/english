import { createReducer, combineReducers } from '@reduxjs/toolkit';
import stateVerbs from '../component/main/data/stateVerbs';
import adverbs from '../component/main/data/adverbs';
import { complitedVerbSuccess } from './action';

export const stateVerbsReducer = createReducer(stateVerbs, {
  [complitedVerbSuccess]: (state, { payload }) =>
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

export const adverbsReducer = createReducer(adverbs, {
  [complitedVerbSuccess]: (state, { payload }) =>
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
