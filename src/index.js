import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './fonts/Hanoded-Sunbird-Regular.ttf';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartScreen from './components/StartScreen';
import NamesScreen from './components/NamesScreen';
import IngredientsScreen from './components/IngredientsScreen';
import Rules from './components/RulesScreen';
import ChallengeScreen from './components/ChallengeScreen';
import LemonadeChallenge from './components/LemonadeChallenge';
import DrinkScreen from './components/DrinkScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
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
          path='/lemonade-challenge'
          element={<LemonadeChallenge />}
        ></Route>
        <Route exact path='/drink' element={<DrinkScreen />}></Route>
      </Routes>
    </Router>
    {/* <Router>
    <App />
    </Router> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
