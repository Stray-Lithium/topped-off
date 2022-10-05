import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import StartScreen from './components/StartScreen';
import NamesScreen from './components/NamesScreen';
import IngredientsScreen from './components/IngredientsScreen';
import Rules from './components/RulesScreen';
import ChallengeScreen from './components/ChallengeScreen';

function App() {
  return (
    <Routes>
      <Route path='/' element={<StartScreen />}></Route>
      <Route exact path='/names' element={<NamesScreen />}></Route>
      <Route exact path='/ingredients' element={<IngredientsScreen />}></Route>
      <Route exact path='/rules' element={<Rules />}></Route>
      <Route
        exact
        path='/challenge/:ingredient'
        element={<ChallengeScreen />}
      ></Route>
    </Routes>
  );
}

export default App;
