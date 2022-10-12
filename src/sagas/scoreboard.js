import { call, takeEvery, put, fork } from 'redux-saga/effects';
import * as actions from '../actions/scoreboard';

function* scoreBoard(action) {
  try {
    yield put(
      actions.scoreBoardSuccess({
        scoreBoard: action.scoreBoard,
      })
    );
  } catch (e) {
    console.log(e);
  }
}

function* watchScoreBoard() {
  yield takeEvery(actions.Types.SCOREBOARD_REQUEST, scoreBoard);
}

const scoreBoardSaga = [fork(watchScoreBoard)];

export default scoreBoardSaga;
