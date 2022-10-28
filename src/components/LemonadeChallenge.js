import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { lemonadeCard } from '../cards/lemonade';
import yellowCard from '../assets/yellow-card.png';
import audio from '../assets/audio/click.mp3';

const LemonadeScreen = () => {
	const [names, setNames] = useState([]);
	const [lemonNames, setLemonNames] = useState([]);
	const [challenge, setChallenge] = useState(false);
	const audioToPlay = new Audio(audio);

	const titleMaker = () => {
		const lemonLength = lemonNames.length;
		let title = '';
		lemonNames.forEach((name, index) => {
			if (lemonLength === 1) {
				console.log('first');
				title += `${name},`;
			} else if (index === lemonLength - 2) {
				title += `${name} and `;
			} else {
				title += `${name}, `;
			}
		});
		return title;
	};

	useEffect(() => {
		const lemonNames = JSON.parse(localStorage.getItem('lemonNames'));
		const names = JSON.parse(localStorage.getItem('names'));
		setLemonNames(lemonNames);
		setNames(names);
		if (!challenge) {
			setChallenge(lemonadeCard());
		}
	}, []);

	const scoreNamesArray = () => {
		const newArray = [];
		Object.values(names).forEach((player) => {
			newArray.push(player);
		});
		return newArray;
	};
	const scoreNameArray = scoreNamesArray();

	const okClick = () => {
		audioToPlay.play();
		localStorage.setItem('LemonadeBlankAndCardId', JSON.stringify(challenge));
	};

	if (lemonNames.length && challenge && scoreNameArray) {
		return (
			<ScreenContainer>
				<BackOfCardContainer>
					<BackOfCard src={yellowCard} />
					<CardContentContainer>
						<CardTitle>{challenge.title}</CardTitle>
						<CardContent>{`${titleMaker()} ${challenge.content}`}</CardContent>
						<CardComment>{challenge.comment}</CardComment>
					</CardContentContainer>
				</BackOfCardContainer>
				<Link
					to={{
						pathname: `/lemonade-completed`,
					}}
				>
					<ConfirmButton onClick={() => okClick()}>OK</ConfirmButton>
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
	width: 90%;
	margin-top: 20px;
`;

const BackOfCardContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const BackOfCard = styled.img`
	width: 80vw;
`;

// const CardContentContainer = styled.div`
// 	position: absolute;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	width: 100%;
// 	height: 100%;
// `;

const CardContentContainer = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
`;

const CardTitle = styled.p`
	font-size: 26px;
	text-align: center;
	width: 80%;
	// text-decoration: underline;
`;

const CardContent = styled.p`
	font-size: 22px;
	text-align: center;
	width: 70%;
`;

const CardComment = styled.p`
	font-size: 20px;
	text-align: center;
	width: 80%;
	font-style: italic;
`;

// const CardContent = styled.p`
// 	font-size: 22px;
// 	text-align: center;
// 	width: 70%;
// `;

const ConfirmButton = styled.button`
	color: black;
	background-color: #ee3347;
	font-size: 22px;
	padding: 12px 0px 12px 0px;
	letter-spacing: 3px;
	margin-top: 20px;
	margin-bottom: 40px;
	width: 44vw;
	border-radius: 10px;
	border: solid 3px black;
	font-family: SunbirdBlack;
	box-shadow: rgba(0, 0, 0, 0.2) -2px -5px 0px inset;
`;

export default LemonadeScreen;
