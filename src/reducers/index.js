import { combineReducers } from 'redux';
import ScoreBoardReducer from './scoreboard';
import CardColorReducer from './card-color';

export default combineReducers({
	ScoreBoard: ScoreBoardReducer,
	CardColor: CardColorReducer,
});
