export const Types = {
  SCOREBOARD_REQUEST: 'SCOREBOARD_REQUEST',
  SCOREBOARD_SUCCESS: 'SCOREBOARD_SUCCESS',
};

export const scoreBoardRequest = (scoreBoard) => ({
  type: Types.SCOREBOARD_REQUEST,
  scoreBoard,
});

export const scoreBoardSuccess = ({ scoreBoard }) => ({
  type: Types.SCOREBOARD_SUCCESS,
  scoreBoard: { scoreBoard },
});
