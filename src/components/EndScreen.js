import { useState, useEffect } from 'react';
import styled from 'styled-components';

const EndScreen = () => {
	const [winningNames, setWinningNames] = useState(false);
	const [winningCard, setWinningCard] = useState(false);

	useEffect(() => {
		if (!winningNames) {
			const names = JSON.parse(localStorage.getItem('winningNames'));
			setWinningNames(names);
		}
	}, [winningNames]);

	useEffect(() => {
		if (!winningCard) {
			const currentCard = JSON.parse(localStorage.getItem('currentCard'));
			setWinningCard(currentCard);
		}
	}, [winningCard]);

	const ending = async () => {
		const items = await JSON.parse(localStorage.getItem('analytics'));
		console.log(items, 'end');
	};
	ending();

	const titleMaker = () => {
		const winnersLength = winningNames.length;
		let title = '';
		winningNames.forEach((name, index) => {
			if (winningNames === 1) {
				console.log('first');
				title += `${name},`;
			} else if (index === winnersLength - 2) {
				title += `${name} and `;
			} else {
				title += `${name}, `;
			}
		});
		return title;
	};

	const winningCardMaker = () => {
		console.log(winningCard, 'winning card');
		if (winningCard === 'mojitoScore') {
			return 'Mojito';
		}
		if (winningCard === 'martiniScore') {
			return 'Martini';
		}
		if (winningCard === 'lemonadeScore') {
			return 'Lemonade';
		}
		if (winningCard === 'whiskeyScore') {
			return 'Whiskey';
		}
	};

	if (winningNames && winningCard) {
		return (
			<h1>{`${titleMaker()} you topped off ${winningCardMaker()}, congrats!`}</h1>
		);
	}
};

export default EndScreen;
