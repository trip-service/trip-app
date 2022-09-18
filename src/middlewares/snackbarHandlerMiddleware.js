import isEmpty from 'lodash/isEmpty';
import Toast from 'react-native-root-toast';

export const snackbarHandlerMiddleware = () => next => action => {
  const { snackbar, ...nextAction } = action;

  if (action['@@redux-saga/SAGA_ACTION'] && !isEmpty(snackbar)) {
    const toast = Toast.show(snackbar.text, {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: false,
      hideOnPress: false,
      delay: 0,
    });
    setTimeout(function () {
      Toast.hide(toast);
  }, 1000);
  }

  return next(nextAction);
};
