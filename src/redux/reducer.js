import { createReducer } from '@reduxjs/toolkit';
import stateVerbs from '../component/main/data/stateVerbs';
import { complitedVerbSuccess } from './action';

export const stateVerbsReducer = createReducer(stateVerbs, {
  [complitedVerbSuccess]: (
    state,
    { payload }, // в payload кинем ID
  ) =>
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
