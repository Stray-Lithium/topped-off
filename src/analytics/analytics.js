export const resetAnalytics = async () => {
	localStorage.clear();
};

export const storeNumberOfPlayers = async (numberOfPlayers) => {
	localStorage.setItem('numberOfPlayers', JSON.stringify(numberOfPlayers));
};

export const storeStartTime = async () => {
	localStorage.setItem('startTime', JSON.stringify(Date.now()));
};

export const storeRoundCount = async () => {
	let items = await JSON.parse(localStorage.getItem('roundCount'));
	localStorage.setItem('roundCount', JSON.stringify((items += 1)));
};

export const storeCompletedChallenge = async (numberOfCompleted = 1) => {
	let items = await JSON.parse(localStorage.getItem('completedChallenges'));
	localStorage.setItem(
		'completedChallenges',
		JSON.stringify((items += numberOfCompleted))
	);
};

export const storeDrank = async (numberOfDrank = 1) => {
	let items = await JSON.parse(localStorage.getItem('drank'));
	localStorage.setItem('drank', JSON.stringify((items += numberOfDrank)));
};

export const storeGameComplete = async (winningCard, numberOfCompleted = 1) => {
	let startTime = await JSON.parse(localStorage.getItem('startTime'));
	let numberOfPlayers = await JSON.parse(
		localStorage.getItem('numberOfPlayers')
	);
	let roundCount = await JSON.parse(localStorage.getItem('roundCount'));
	let completedChallenges = await JSON.parse(
		localStorage.getItem('completedChallenges')
	);
	completedChallenges += numberOfCompleted;
	let drank = await JSON.parse(localStorage.getItem('drank'));
	let completedObject = {
		numberOfPlayers,
		startTime,
		roundCount,
		completedChallenges,
		drank,
		winningCard,
		endTime: Date.now(),
		blanksCompleted: [],
		blanksDrank: [],
		cardsCompleted: [],
		cardsDrank: [],
		gameType: 'classic',
	};
	localStorage.setItem('analytics', JSON.stringify(completedObject));
};
