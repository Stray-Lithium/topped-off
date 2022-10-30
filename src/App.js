import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Routes, Route, Navigate } from 'react-router-dom';
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
import EndScreen from './components/EndScreen';
// import { doc, getDoc } from 'firebase/firestore';

const App = () => {
	const scoreBoard = useSelector((state) => state.ScoreBoard.scoreBoard);
	const [names, setNames] = useState([]);
	// const docRef = doc(db, 'cards');
	// const docSnap = await getDoc(docRef);

	useEffect(() => {
		const items = JSON.parse(localStorage.getItem('names'));
		if (items && names.length === 0) {
			setNames(items);
		}
	}, [scoreBoard]);

	{
		/* <h1>heloo</h1> */
	}
	// if (docSnap.exists()) {
	// 	console.log('Document data:', docSnap.data());
	// } else {
	// 	// doc.data() will be undefined in this case
	// 	console.log('No such document!');
	// }

	return (
		<ScreenBackground>
			{scoreBoard ? <ScoreScreen /> : <></>}
			<Routes>
				<Route exact path='/' element={<StartScreen />} />
				<Route exact path='/names' element={<NamesScreen />} />
				<Route
					exact
					path='/ingredients'
					element={<IngredientsScreen />}
				></Route>
				<Route exact path='/rules' element={<Rules />} />
				<Route
					exact
					path='/challenge/:ingredient'
					element={<ChallengeScreen />}
				/>
				<Route exact path='/lemonade-screen' element={<LemonadeScreen />} />
				<Route
					exact
					path='/lemonade-challenge'
					element={<LemonadeChallenge />}
				/>
				<Route
					exact
					path='/lemonade-completed'
					element={<LemonadeWhoCompleted />}
				/>
				<Route exact path='/drink' element={<DrinkScreen />} />
				<Route exact path='/end-screen' element={<EndScreen />} />
				<Route path='*' element={<Navigate to='/topped-off/' replace />} />
			</Routes>
		</ScreenBackground>
	);
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

export default App;
