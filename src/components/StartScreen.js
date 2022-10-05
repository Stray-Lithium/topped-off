import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/topped-logo-red.png';

const StartScreen = () => {
  const [start, setStart] = useState(false);
  const [rules, setRules] = useState(false);

  const startClicked = () => {
    setStart(true);
  };

  const rulesClicked = () => {
    setRules(true);
  };

  return (
    <ScreenContainer>
      <Logo src={logo} />
      <Link to='/names'>
        <StartGame
          onClick={() => startClicked()}
          style={start ? styles.shadow : {}}
        >
          Start Game
        </StartGame>
      </Link>
      <Link to='/rules'>
        <Rules
          onClick={() => rulesClicked()}
          style={rules ? styles.shadow : {}}
        >
          Rules
        </Rules>
      </Link>
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
  height: 100vh;
  width: 100%;
  background-color: #808184;
`;

const Logo = styled.img`
  width: 250px;
  height: auto;
  margin-top: 20px;
  margin-bottom: 50px;
`;

const StartGame = styled.button`
  color: white;
  background-color: #ee3347;
  font-size: 40px;
  padding: 20px;
  border-radius: 10px;
  border: solid 3px black;
  font-family: SunbirdRegular;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) -2px -5px 0px inset;
`;

const Rules = styled.button`
  color: white;
  background-color: #ee3347;
  font-size: 40px;
  padding: 14px;
  border-radius: 10px;
  border: solid 3px black;
  font-family: SunbirdRegular;
  box-shadow: rgba(0, 0, 0, 0.2) -2px -5px 0px inset;
`;

export default StartScreen;
