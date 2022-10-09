import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import appBackground from '../assets/app-background.png';

const DrinkScreen = () => {
  const [drinkers, setDrinkers] = useState([]);
  const [reveal, setReveal] = useState(false);
  const [drinkNumber, setDrinkNumber] = useState(0);

  useEffect(() => {
    const drinkers = JSON.parse(localStorage.getItem('drinkers'));
    setDrinkers(drinkers);
  }, []);

  const drinkTitle = () => {
    let title = '';
    drinkers.forEach((player, index) => {
      if (drinkers.length === 1 || index === drinkers.length - 1) {
        title += `${player}`;
      } else {
        title += `${player} and `;
      }
    });
    return title;
  };

  const revealClick = () => {
    const drinkNumber = Math.floor(Math.random() * 3) + 1;
    setDrinkNumber(drinkNumber);
    setReveal(true);
  };

  if (drinkers.length > 0) {
    return (
      <ScreenBackground>
        <ScreenContainer>
          <Title>HOW MANY TIMES MUST {drinkTitle()} DRINK?</Title>
          <DrinkCountContainer>
            {reveal ? (
              <DrinkNumberContainer>
                <NumberContainer>
                  <DrinkNumber>{drinkNumber}</DrinkNumber>
                </NumberContainer>
                <Link
                  to={{
                    pathname: `/ingredients`,
                  }}
                >
                  <NextRoundButton>NEXT ROUND</NextRoundButton>
                </Link>
              </DrinkNumberContainer>
            ) : (
              <DrinkCountCover onClick={() => revealClick()}>
                <RevealText>?</RevealText>
              </DrinkCountCover>
            )}
          </DrinkCountContainer>
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
  min-height: -webkit-fill-available;
  width: 100vw;
  background-image: url(${appBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 90%;
`;

const Title = styled.h1`
  text-align: center;
`;

const DrinkCountContainer = styled.div`
height 240px;
`;

const DrinkCountCover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 120px;
  background-color: #ee3347;
  border: 3px solid black;
  border-radius: 10px;
`;

const RevealText = styled.h1`
  font-size: 200px;
`;

const DrinkNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NumberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 200px;
`;

const DrinkNumber = styled.p`
  font-size: 100px;
`;

const NextRoundButton = styled.button`
  color: black;
  background-color: #ee3347;
  font-size: 22px;
  padding: 12px 0px 12px 0px;
  letter-spacing: 3px;
  width: 60vw;
  border-radius: 10px;
  border: solid 3px black;
  font-family: SunbirdBlack;
  box-shadow: rgba(0, 0, 0, 0.2) -2px -5px 0px inset;
`;

export default DrinkScreen;
