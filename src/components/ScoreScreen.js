import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { scoreBoardRequest } from '../actions/scoreboard';
import blueBackground from '../assets/martini-background.png';
import redBackground from '../assets/whiskey-background.png';
import whiteBackground from '../assets/mojito-background.png';
import yellowBackground from '../assets/lemonade-background.png';
import {
	mojitoIconSorter,
	martiniIconSorter,
	whiskeyIconSorter,
	lemonadeIconSorter,
} from '../helper-functions.js/score-icons';
import title from '../assets/scoreboard.png';
import audio from '../assets/audio/click.mp3';

const ScoreScreen = ({ roundEnd }) => {
	const dispatch = useDispatch();
	const currentCard = useSelector((state) => state.CardColor.cardColor);
	const [names, setNames] = useState(false);
	const [cardColor, setCardColor] = useState(false);
	const audioToPlay = new Audio(audio);

	useEffect(() => {
		const items = JSON.parse(localStorage.getItem('names'));
		if (items && !names) {
			setNames(items);
		}
	}, [names]);

	useEffect(() => {}, [currentCard]);

	const backgroundColor = () => {
		if (currentCard === 'whiskeyScore') {
			setCardColor(redBackground);
		}
		if (currentCard === 'martiniScore') {
			setCardColor(blueBackground);
		}
		if (currentCard === 'mojitoScore') {
			setCardColor(whiteBackground);
		}
		if (currentCard === 'lemonadeScore') {
			setCardColor(yellowBackground);
		}
	};
	if (!cardColor) {
		backgroundColor();
	}

	const scoreNamesArray = () => {
		const newArray = [];
		Object.values(names).forEach((player) => {
			newArray.push(player);
		});
		return newArray;
	};
	const scoreNameArray = scoreNamesArray();

	const nextRoundClick = () => {
		audioToPlay.play();
		dispatch(scoreBoardRequest(false));
	};

	return (
		<ScreenBackground style={{ backgroundImage: `url(${cardColor})` }}>
			<ScoreboardContainer>
				<ScoreButton onClick={() => nextRoundClick()}>Close</ScoreButton>
				<Title src={title} />
				<ScoreList>
					{scoreNameArray.map((player) => {
						return (
							<EachPersonsScoreContainer>
								<ScoreNameContainer>
									<ScoreName>{player.name}</ScoreName>
								</ScoreNameContainer>
								<IconsContainer>
									<IconDiv>
										<Score
											src={whiskeyIconSorter(`wi${player.whiskeyScore}`)}
										/>
									</IconDiv>
									<IconDiv>
										<Score
											src={lemonadeIconSorter(`le${player.lemonadeScore}`)}
										/>
									</IconDiv>
									<IconDiv>
										<Score
											src={martiniIconSorter(`ma${player.martiniScore}`)}
										/>
									</IconDiv>
									<IconDiv>
										<Score src={mojitoIconSorter(`mo${player.mojitoScore}`)} />
									</IconDiv>
								</IconsContainer>
							</EachPersonsScoreContainer>
						);
					})}
				</ScoreList>
				{roundEnd ? (
					<Link
						to={{
							pathname: `/ingredients`,
						}}
					>
						<NextRoundButton onClick={() => nextRoundClick()}>
							Next Round!
						</NextRoundButton>
					</Link>
				) : (
					<></>
				)}
			</ScoreboardContainer>
		</ScreenBackground>
	);
};

const ScreenBackground = styled.div`
	position: absolute;
	top: 0px;
	display: flex;
	color: black;
	flex-direction: column;
	align-items: center;
	min-height: 100vh;
	min-height: -webkit-fill-available;
	width: 100vw;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	z-index: 2;
`;

const ScoreboardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 90%;
`;

const Title = styled.img`
	width: 80vw;
	margin-bottom: 10px;
	margin-top: 80px;
`;

const ScoreList = styled.div`
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 40px;
	width: 100%;
	height: 60vh;
	// border: solid 4px #ee3347;
	// outline: 5px solid black;
	// background-color: #808184;
`;

const EachPersonsScoreContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 96%;
	padding-bottom: 8px;
	border: solid 4px black;
	background-color: rgba(0, 0, 0, 0.2);
	border-radius: 30px;
	margin-bottom: 20px;
`;

const IconsContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: space-between;
	justify-content: space-evenly;
	width: 100%;
`;

const IconDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-bottom: 2px;
	border-bottom: 3px solid black;
`;

const ScoreNameContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

const ScoreName = styled.p`
	font-size: 24px;
	letter-spacing: 2px;
	text-align: center;
	width: 100%;
	margin: 10px;
`;

const Score = styled.img`
	height: 50px;
`;

const ScoreButton = styled.button`
	position: absolute;
	left: 10px;
	top: 10px;
	width: 100px;
	background-color: #ee3347;
	font-size: 20px;
	border-radius: 10px;
	border: solid 3px black;
	font-family: SunbirdBlack;
	color: black;
	box-shadow: rgba(0, 0, 0, 0.2) -2px -5px 0px inset;
	z-index: 1;
`;

const NextRoundButton = styled.button`
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

export default ScoreScreen;
