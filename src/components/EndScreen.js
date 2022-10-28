import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { sendGame } from '../firebase';

const EndScreen = () => {
	const [winningNames, setWinningNames] = useState(false);
	const [winningCard, setWinningCard] = useState(false);
	const [analytics, setAnalytics] = useState(false);
	const [sendAnalytics, setSendAnalytics] = useState(false);

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

	useEffect(() => {
		if (!analytics) {
			const data = JSON.parse(localStorage.getItem('analytics'));
			setAnalytics(data);
		}
	}, [analytics]);

	useEffect(() => {
		if (!sendAnalytics) {
			const data = JSON.parse(localStorage.getItem('sendAnalytics'));
			setSendAnalytics(data);
		}
	}, [sendAnalytics]);

	// const ending = async () => {
	// 	const items = await JSON.parse(localStorage.getItem('analytics'));
	// 	ending(items);
	// };

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

	const endClick = () => {
		if (sendAnalytics) {
			sendGame(analytics);
		}
	};

	console.log(winningNames, winningCard, analytics, sendAnalytics);

	if (winningNames && winningCard && analytics) {
		return (
			<ScreenContainer>
				<h1>{`${titleMaker()} you topped off ${winningCardMaker()}, congrats!`}</h1>
				<Link
					to={{
						pathname: `/`,
					}}
				>
					<button onClick={() => endClick()}>quit</button>
				</Link>
			</ScreenContainer>
		);
	}
};

const ScreenContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
`;

const StartGame = styled.button`
	color: black;
	background-color: #ee3347;
	font-size: 26px;
	padding: 12px 0px 12px 0px;
	width: 50vw;
	letter-spacing: 5px;
	border-radius: 10px;
	border: solid 3px black;
	font-family: SunbirdBlack;
	margin-bottom: 20px;
	box-shadow: rgba(0, 0, 0, 0.2) -2px -5px 0px inset;
`;

export default EndScreen;
