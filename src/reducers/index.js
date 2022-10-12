import { combineReducers } from 'redux';
import ScoreBoardReducer from './nav';

export default combineReducers({
  ScoreBoard: ScoreBoardReducer,
});
