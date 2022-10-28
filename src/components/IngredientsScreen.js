import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import lemonadeCard from '../assets/lemonade-card.png';
import mojitoCard from '../assets/mojito-card.png';
import whiskeyCard from '../assets/whiskey-card.png';
import martiniCard from '../assets/martini-card.png';
import blueBackground from '../assets/martini-background.png';
import redBackground from '../assets/whiskey-background.png';
import whiteBackground from '../assets/mojito-background.png';
import yellowBackground from '../assets/lemonade-background.png';
import { useDispatch } from 'react-redux';
import { scoreBoardRequest } from '../actions/scoreboard';
import { storeRoundCount } from '../analytics/analytics';
import audio from '../assets/audio/click.mp3';
import { cardColorRequest } from '../actions/card-color';

const IngredientsScreen = () => {
	const dispatch = useDispatch();
	const [names, setNames] = useState([]);
	const [cocktailCard, setIngredientCard] = useState('');
	const [ingredientCardToRender, setIngredientCardToRender] = useState(false);
	const [ingredientImageToRender, setIngredientImageToRender] = useState(false);
	const audioToPlay = new Audio(audio);

	const ingredientRandomizer = () => {
		const cards = ['lemonade', 'whiskey', 'martini', 'mojito'];
		const randomWordIndex = Math.floor(Math.random() * cards.length) + 0;
		const card = cards[randomWordIndex];
		if (card === 'whiskey') {
			setIngredientCardToRender(redBackground);
			setIngredientImageToRender(whiskeyCard);
			dispatch(cardColorRequest('whiskeyScore'));
		}
		if (card === 'martini') {
			setIngredientCardToRender(blueBackground);
			setIngredientImageToRender(martiniCard);
			dispatch(cardColorRequest('martiniScore'));
		}
		if (card === 'mojito') {
			setIngredientCardToRender(whiteBackground);
			setIngredientImageToRender(mojitoCard);
			dispatch(cardColorRequest('mojitoScore'));
		}
		if (card === 'lemonade') {
			setIngredientCardToRender(yellowBackground);
			setIngredientImageToRender(lemonadeCard);
			dispatch(cardColorRequest('lemonadeScore'));
		}
		setIngredientCard(card);
	};

	useEffect(() => {
		if (!ingredientCardToRender && !ingredientImageToRender) {
			ingredientRandomizer();
		}
		const items = JSON.parse(localStorage.getItem('names'));
		if (items && names.length === 0) {
			setNames(items);
		}
	}, [names]);

	const storeCurrentCard = () => {
		audioToPlay.play();
		storeRoundCount();
		localStorage.setItem('currentCard', JSON.stringify(`${cocktailCard}Score`));
		const lengthOfNames = Object.values(names).length;
		const randomNameIndex = Math.floor(Math.random() * lengthOfNames) + 0;
		const name = Object.keys(names)[randomNameIndex];
		localStorage.setItem('currentName', JSON.stringify(`${name}`));
	};

	const scoreButtonClick = () => {
		audioToPlay.play();
		dispatch(scoreBoardRequest(true));
	};

	if (ingredientCardToRender) {
		return (
			<ScreenBackground
				style={{ backgroundImage: `url(${ingredientCardToRender})` }}
			>
				<ScoreButton onClick={() => scoreButtonClick()}>Score</ScoreButton>
				<ScreenContainer>
					{ingredientCardToRender && ingredientImageToRender ? (
						<Link
							to={{
								pathname: `${
									cocktailCard === 'lemonade'
										? '/lemonade-screen'
										: `/challenge/${cocktailCard}`
								}`,
							}}
						>
							<BackOfCardContainer onClick={() => storeCurrentCard()}>
								<BackOfCard src={ingredientImageToRender} />
							</BackOfCardContainer>
						</Link>
					) : (
						<></>
					)}
				</ScreenContainer>
			</ScreenBackground>
		);
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
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
`;

const ScreenContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 90%;
`;

const BackOfCardContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const BackOfCard = styled.img`
	width: 70vw;
`;

const ScoreButton = styled.button`
	position: absolute;
	left: 10px;
	top: 10px;
	width: 100px;
	// background-color: rgba(255, 255, 255, 0.5);
	background-color: #ee3347;
	font-size: 20px;
	border-radius: 10px;
	border: solid 3px black;
	font-family: SunbirdBlack;
	color: black;
	box-shadow: rgba(0, 0, 0, 0.2) -2px -5px 0px inset;
	z-index: 1;
`;

export default IngredientsScreen;
