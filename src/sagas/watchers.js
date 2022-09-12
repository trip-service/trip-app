import { takeLatest } from 'redux-saga/effects';

import types from '~/constants/actionTypes';

import { loginSaga, logoutSaga } from './authSagas';

// export function* watchAddTaskSaga() {
//   const taskChain = yield actionChannel(types.ADD_TASK);
//   while (true) {
//     const actionObject = yield take(taskChain);
//     yield call(addTaskSaga, actionObject);
//   }
// }

export function* watchLoginSaga() {
  yield takeLatest(types.LOGIN, loginSaga);
}

export function* watchLogoutSaga() {
  yield takeLatest(types.LOGOUT, logoutSaga);
}
