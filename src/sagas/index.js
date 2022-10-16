import { all } from 'redux-saga/effects';
import scoreBoardSaga from './scoreboard';

export default function* routeSaga() {
  yield all([...scoreBoardSaga]);
}
