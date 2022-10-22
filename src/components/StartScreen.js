import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/topped-logo-red.png';
import audio from '../assets/audio/click.mp3';

const StartScreen = () => {
	const [start, setStart] = useState(false);
	const [rules, setRules] = useState(false);
	const audioToPlay = new Audio(audio);

	const startClicked = () => {
		audioToPlay.play();
		setStart(true);
	};

	const rulesClicked = () => {
		setRules(true);
	};

	return (
		<ScreenContainer>
			{/* <Logo src={logo} /> */}
			<Link to='/names'>
				<StartGame
					src={audio}
					onClick={() => startClicked()}
					style={start ? styles.shadow : {}}
				>
					PLAY
				</StartGame>
			</Link>
			{/* <Link to='/rules'>
				<Rules
					onClick={() => rulesClicked()}
					style={rules ? styles.shadow : {}}
				>
					RULES
				</Rules>
			</Link> */}
		</ScreenContainer>
	);
};

const styles = {
	shadow: {
		boxShadow: 'none',
	},
};

const ScreenContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
`;

const Logo = styled.img`
	width: 250px;
	height: auto;
	margin-top: 20px;
	margin-bottom: 50px;
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

const Rules = styled.button`
	color: black;
	background-color: #ee3347;
	font-size: 22px;
	padding: 12px 0px 12px 0px;
	letter-spacing: 4px;
	width: 44vw;
	border-radius: 10px;
	border: solid 3px black;
	font-family: SunbirdBlack;
	box-shadow: rgba(0, 0, 0, 0.2) -2px -5px 0px inset;
`;

export default StartScreen;
