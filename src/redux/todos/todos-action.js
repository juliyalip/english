import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const deleteTaskRequest = createAction('task/deleteRequest');
const deleteTaskSuccess = createAction('task/deleteSuccess');
const deleteTaskError = createAction('task/deleteError');
const complitedTaskSuccess = createAction('task/complitedSuccess');

const addTaskReguest = createAction('task/addRequest');

const addTaskSuccess = createAction('task/addSuccess', text => ({
  payload: {
    text,
    id: shortid.generate(),
    complited: false,
  },
}));
const addTaskError = createAction('task/addError');

const todoActions = {
  addTaskReguest,
  addTaskSuccess,
  addTaskError,
  deleteTaskRequest,
  deleteTaskSuccess,
  deleteTaskError,
  complitedTaskSuccess,
};

export default todoActions;
