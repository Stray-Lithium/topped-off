import { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import appBackground from '../assets/app-background.png';
import { iceBlank } from '../blanks/ice';
import { oliveBlank } from '../blanks/olive';
import { martiniCard } from '../cards/martini';
import { whiskeyCard } from '../cards/whiskey';
import { mojitoCard } from '../cards/mojito';
import redCard from '../assets/red-card.png';
import whiteCard from '../assets/white-card.png';
import blueCard from '../assets/blue-card.png';
import LemonadeChallenge from './LemonadeScreen';
import { scoreBoardRequest } from '../actions/scoreboard';
import { cardColorRequest } from '../actions/card-color';
import {
	storeBlank,
	storeCard,
	storeCompletedChallenge,
	storeGameComplete,
} from '../analytics/analytics';
import audio from '../assets/audio/click.mp3';

const ChallengeScreen = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { ingredient } = useParams();
	const [names, setNames] = useState(false);
	const [currentName, setCurrentName] = useState(false);
	const [currentCard, setCurrentCard] = useState(false);
	const [cardContent, setCardContent] = useState(false);
	const [ingredientCardToRender, setIngredientCardToRender] = useState(false);
	const [counter, setCounter] = useState(false);
	const [startTimer, setStartTimer] = useState(false);
	const handleOnSubmit = useCallback(
		(scoreOrEnd) => navigate(`/${scoreOrEnd}`, { replace: true }),
		[navigate]
	);
	const audioToPlay = new Audio(audio);

	const ingredientRandomizer = () => {
		if (currentCard === 'whiskeyScore') {
			setIngredientCardToRender(redCard);
		}
		if (currentCard === 'martiniScore') {
			setIngredientCardToRender(blueCard);
		}
		if (currentCard === 'mojitoScore') {
			setIngredientCardToRender(whiteCard);
		}
	};

	const blankWord = () => {
		if (ingredient === 'whiskey') {
			setCardContent(whiskeyCard(iceBlank()));
		}
		if (ingredient === 'martini') {
			setCardContent(martiniCard(oliveBlank()));
		}
		if (ingredient === 'mojito') {
			setCardContent(mojitoCard());
		}
	};

	useEffect(() => {
		if (counter && startTimer) {
			const timer =
				counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
			return () => clearInterval(timer);
		}
	}, [counter, startTimer]);

	useEffect(() => {
		if (!ingredientCardToRender) {
			ingredientRandomizer();
		}
	}, [currentCard]);

	useEffect(() => {
		if (!currentName) {
			const name = JSON.parse(localStorage.getItem('currentName'));
			setCurrentName(name);
		}
	}, [currentName]);

	useEffect(() => {
		if (!currentCard) {
			const card = JSON.parse(localStorage.getItem('currentCard'));
			setCurrentCard(card);
		}
	}, [currentCard]);

	useEffect(() => {
		if (!names) {
			const items = JSON.parse(localStorage.getItem('names'));
			setNames(items);
		}
	}, [names]);

	useEffect(() => {
		if (!cardContent) {
			blankWord();
		}
		setCounter(cardContent.timer);
	}, [cardContent]);

	console.log(cardContent)

	const complete = () => {
		audioToPlay.play();
		storeCard([cardContent.id], true);
		if (currentCard !== 'mojitoScore') {
			storeBlank([cardContent.blankId], true);
		}
		const namesCopy = names;
		namesCopy[currentName][currentCard] += 1;
		if (namesCopy[currentName][currentCard] === 4) {
			handleOnSubmit('end-screen');
			localStorage.setItem('winningNames', JSON.stringify([currentName]));
			storeGameComplete(currentCard);
		} else {
			localStorage.setItem('names', JSON.stringify(namesCopy));
			dispatch(scoreBoardRequest(true));
			handleOnSubmit('ingredients');
			storeCompletedChallenge();
		}
	};

	const drinkScreen = () => {
		localStorage.setItem('drinkers', JSON.stringify([currentName]));
		return 'drink';
	};

	const startButtonClick = () => {
		audioToPlay.play();
		setStartTimer(true);
	};

	const doneButtonClick = () => {
		audioToPlay.play();
		setCounter(0);
	};

	const drinkClicked = () => {
		audioToPlay.play();
		storeCard([cardContent.id], false);
		if (currentCard !== 'mojitoScore') {
			storeBlank([cardContent.blankId], false);
		}
	};

	const challenges = () => {
		return (
			<BlankBackground>
				{ingredient === 'lemonade' ? (
					<LemonadeChallenge />
				) : (
					<ScreenContainer>
						<BackOfCardContainer>
							<Counter>{counter}</Counter>
							<BackOfCard src={ingredientCardToRender} />
							<CardContentContainer>
								<CardTitle>{cardContent.title}</CardTitle>
								<CardContent>{`${currentName}! ${cardContent.content}`}</CardContent>
								<CardComment>{cardContent.comment}</CardComment>
							</CardContentContainer>
						</BackOfCardContainer>
						<CompleteDrinkContainer>
							{cardContent.timer && counter > 0 ? (
								counter < cardContent.timer ? (
									<TimerButtonBlack onClick={() => doneButtonClick()}>
										DONE
									</TimerButtonBlack>
								) : (
									<TimerButton onClick={() => startButtonClick()}>
										START
									</TimerButton>
								)
							) : (
								<ChallengeComplete
									onClick={() => {
										complete();
									}}
								>
									COMPLETE
								</ChallengeComplete>
							)}
							<Link
								to={{
									pathname: `/${drinkScreen()}`,
								}}
							>
								<Drink onClick={() => drinkClicked()}>DRINK</Drink>
							</Link>
						</CompleteDrinkContainer>
					</ScreenContainer>
				)}
			</BlankBackground>
		);
	};

	if (names && currentName && cardContent) {
		return <ScreenBackground>{challenges()}</ScreenBackground>;
	}
};

const ScreenBackground = styled.div`
	display: flex;
	color: black;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	min-height: -webkit-fill-available;
	width: 100vw;
	background-image: url(${appBackground});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
`;

const BlankBackground = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	width: 100%;
`;

const ScreenContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 90%;
`;

const TimerButton = styled.button`
	color: black;
	// background-color: rgba(255, 255, 255, 0.5);
	background-color: #ee3347;
	font-size: 22px;
	padding: 14px 0px 14px 0px;
	letter-spacing: 2px;
	width: 50vw;
	margin-top: 20px;
	border-radius: 10px;
	border: solid 3px black;
	font-family: SunbirdBlack;
	box-shadow: rgba(0, 0, 0, 0.2) -2px -5px 0px inset;
`;

const TimerButtonBlack = styled.button`
	color: black;
	// background-color: rgba(255, 255, 255, 0.5);
	background-color: black;
	font-size: 22px;
	padding: 14px 0px 14px 0px;
	letter-spacing: 2px;
	width: 50vw;
	margin-top: 20px;
	color: #ee3347;
	border-radius: 10px;
	border: solid 3px #ee3347;
	font-family: SunbirdBlack;
	box-shadow: rgba(0, 0, 0, 0.2) -2px -5px 0px inset;
`;

const CompleteDrinkContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ChallengeComplete = styled.button`
	color: black;
	// background-color: rgba(255, 255, 255, 0.5);
	background-color: #ee3347;
	font-size: 22px;
	padding: 14px 0px 14px 0px;
	letter-spacing: 2px;
	width: 50vw;
	margin-top: 20px;
	border-radius: 10px;
	border: solid 3px black;
	font-family: SunbirdBlack;
	box-shadow: rgba(0, 0, 0, 0.2) -2px -5px 0px inset;
`;

const Drink = styled.button`
	color: black;
	// background-color: rgba(255, 255, 255, 0.5);
	background-color: #ee3347;
	font-size: 22px;
	padding: 12px 0px 12px 0px;
	letter-spacing: 2px;
	width: 44vw;
	margin-top: 10px;
	margin-bottom: 20px;
	border-radius: 10px;
	border: solid 3px black;
	font-family: SunbirdBlack;
	box-shadow: rgba(0, 0, 0, 0.2) -2px -5px 0px inset;
`;

const BackOfCardContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
`;

const Counter = styled.h1`
	position: absolute;
	right: -20px;
	top: -40px;
	font-size: 6rem;
	margin: 0px;
	transform: rotate(15deg);
`;

const BackOfCard = styled.img`
	width: 86vw;
`;

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

export default ChallengeScreen;
