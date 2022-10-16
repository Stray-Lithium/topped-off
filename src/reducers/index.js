import { combineReducers } from 'redux';
import ScoreBoardReducer from './scoreboard';

export default combineReducers({
  ScoreBoard: ScoreBoardReducer,
});
