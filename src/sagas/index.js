import { all } from 'redux-saga/effects';

export default function* routeSaga() {
  yield all([...scoreBoardSaga]);
}