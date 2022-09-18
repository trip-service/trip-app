import { call, put } from 'redux-saga/effects';
import { loginResult } from '~/apis/api';

import types from '~/constants/actionTypes';

const okLogin = (payload) => ({
  type: types.LOGIN_SUCCESS,
  payload,
  snackbar: {
    type: "info",
    text: "登入成功"
  },
});

const errLogin = ({ message }) => {
  return {
    type: types.LOGIN_ERROR,
    payload: {
      message,
    },
    snackbar: {
      type: "info",
      text: message
    },
  };
};

export function* loginSaga({payload}) {
  try {
    const result = yield call(loginResult, payload);
    yield put(okLogin(result));
  } catch (error) {
    const errorAction = errLogin(error);
    yield put(errorAction);
  }
}

const okLogout = () => ({
  type: types.LOGOUT_SUCCESS,
});

const errLogout = ({ message }) => {
  return {
    type: types.LOGOUT_ERROR,
    payload: {
      message,
    },
  };
};

export function* logoutSaga() {
  try {
    yield put(okLogout());
  } catch (error) {
    const errorAction = errLogout(error);
    yield put(errorAction);
  }
}
