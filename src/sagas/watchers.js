import { actionChannel, call, take, takeLatest } from 'redux-saga/effects';

import types from '~/constants/actionTypes';

import { loginSaga, logoutSaga } from './authSagas';
import { addTaskSaga, deleteTaskSaga, updateTaskSaga } from './taskSagas';

export function* watchAddTaskSaga() {
  const taskChain = yield actionChannel(types.ADD_TASK);
  while (true) {
    const actionObject = yield take(taskChain);
    yield call(addTaskSaga, actionObject);
  }
}

export function* watchUpdateTaskSaga() {
  yield takeLatest(types.UPDATE_TASK, updateTaskSaga);
}

export function* watchDeleteTaskSaga() {
  yield takeLatest(types.DELETE_TASK, deleteTaskSaga);
}

export function* watchLoginSaga() {
  yield takeLatest(types.LOGIN, loginSaga);
}

export function* watchLogoutSaga() {
  yield takeLatest(types.LOGOUT, logoutSaga);
}
