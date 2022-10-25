import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import appBackground from './assets/app-background.png';
import StartScreen from './components/StartScreen';
import NamesScreen from './components/NamesScreen';
import IngredientsScreen from './components/IngredientsScreen';
import Rules from './components/RulesScreen';
import ChallengeScreen from './components/ChallengeScreen';
import LemonadeScreen from './components/LemonadeScreen';
import LemonadeChallenge from './components/LemonadeChallenge';
import DrinkScreen from './components/DrinkScreen';
import ScoreScreen from './components/ScoreScreen';
import LemonadeWhoCompleted from './components/LemonadeWhoCompleted';

function App() {
	// const scoreBoard = useSelector((state) => state.ScoreBoard.scoreBoard);
	const [names, setNames] = useState([]);

	useEffect(() => {
		const items = JSON.parse(localStorage.getItem('names'));
		if (items && names.length === 0) {
			setNames(items);
		}
	}, []);

	return (
		<ScreenBackground>
			{/* {scoreBoard ? <ScoreScreen /> : <></>} */}
			<Routes>
				<Route path='/' element={<StartScreen />}></Route>
				<Route exact path='/names' element={<NamesScreen />}></Route>
				<Route
					exact
					path='/ingredients'
					element={<IngredientsScreen />}
				></Route>
				<Route exact path='/rules' element={<Rules />}></Route>
				<Route
					exact
					path='/challenge/:ingredient'
					element={<ChallengeScreen />}
				></Route>
				<Route
					exact
					path='/lemonade-screen'
					element={<LemonadeScreen />}
				></Route>
				<Route
					exact
					path='/lemonade-challenge'
					element={<LemonadeChallenge />}
				></Route>
				<Route
					exact
					path='/lemonade-completed'
					element={<LemonadeWhoCompleted />}
				></Route>
				<Route exact path='/drink' element={<DrinkScreen />}></Route>
			</Routes>
		</ScreenBackground>
	);
}

const ScreenBackground = styled.div`
	display: flex;
	color: black;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	// height: 100vh;
	min-height: -webkit-fill-available;
	width: 100vw;
	background-image: url(${appBackground});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
`;

export default App;
