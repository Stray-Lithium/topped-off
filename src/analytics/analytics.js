export const resetAnalytics = async () => {
	localStorage.clear();
};

export const storeCardsAndBlanksEmptyArray = () => {
	localStorage.setItem('blanksDrank', JSON.stringify([]));
	localStorage.setItem('blanksCompleted', JSON.stringify([]));
	localStorage.setItem('cardsDrank', JSON.stringify([]));
	localStorage.setItem('cardsCompleted', JSON.stringify([]));
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

export const storeCard = async (idArray, completed) => {
	console.log('storing card');
	if (completed) {
		let items = await JSON.parse(localStorage.getItem('cardsCompleted'));
		let newArray = [];
		idArray.forEach((id) => {
			newArray.push(id);
		});
		localStorage.setItem(
			'cardsCompleted',
			JSON.stringify([...items, ...newArray])
		);
	} else {
		let items = await JSON.parse(localStorage.getItem('cardsDrank'));
		let newArray = [];
		idArray.forEach((id) => {
			newArray.push(id);
		});
		localStorage.setItem('cardsDrank', JSON.stringify([...items, ...newArray]));
	}
};

export const storeBlank = async (idArray, completed) => {
	if (completed) {
		let items = await JSON.parse(localStorage.getItem('blanksCompleted'));
		let newArray = [];
		idArray.forEach((id) => {
			newArray.push(id);
		});
		localStorage.setItem(
			'blanksCompleted',
			JSON.stringify([...items, ...newArray])
		);
	} else {
		let items = await JSON.parse(localStorage.getItem('blanksDrank'));
		let newArray = [];
		idArray.forEach((id) => {
			newArray.push(id);
		});
		localStorage.setItem(
			'blanksDrank',
			JSON.stringify([...items, ...newArray])
		);
	}
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
	let blanksCompleted = await JSON.parse(
		localStorage.getItem('blanksCompleted')
	);
	let blanksDrank = await JSON.parse(localStorage.getItem('blanksDrank'));
	let cardsCompleted = await JSON.parse(localStorage.getItem('cardsCompleted'));
	let cardsDrank = await JSON.parse(localStorage.getItem('cardsDrank'));

	let completedObject = {
		numberOfPlayers,
		startTime,
		roundCount,
		completedChallenges,
		drank,
		winningCard,
		endTime: Date.now(),
		blanksCompleted,
		blanksDrank,
		cardsCompleted,
		cardsDrank,
		gameType: 'classic',
	};
	localStorage.setItem('analytics', JSON.stringify(completedObject));
};
