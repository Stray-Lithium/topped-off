import { Types } from '../actions/scoreboard';

const INITIAL_STATE = { scoreBoard: false };

const ScoreBoardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.SCOREBOARD_SUCCESS:
      return action.scoreBoard;
    default:
      return state;
  }
};

export default ScoreBoardReducer;
