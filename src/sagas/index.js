import { all } from 'redux-saga/effects';
import scoreBoardSaga from './scoreboard';
import cardColorSaga from './card-color';

export default function* routeSaga() {
	yield all([...scoreBoardSaga, ...cardColorSaga]);
}
