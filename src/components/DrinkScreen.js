import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
          <Title>How many times must {drinkTitle()} drink?</Title>
          <DrinkCountContainer>
            {reveal ? (
              <DrinkNumberContainer>
                <DrinkNumber>{drinkNumber}</DrinkNumber>
                <Link
                  to={{
                    pathname: `/ingredients`,
                  }}
                >
                  <NextRoundButton>Next Round!</NextRoundButton>
                </Link>
              </DrinkNumberContainer>
            ) : (
              <DrinkCountCover>
                <RevealText onClick={() => revealClick()}>
                  Tap to reveal!
                </RevealText>
              </DrinkCountCover>
            )}
          </DrinkCountContainer>
        </ScreenContainer>
      </ScreenBackground>
    );
  }
};

const ScreenBackground = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #808184;
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
  height: 200px;
  width: 120px;
  background-color: black;
`;

const RevealText = styled.h4``;

const DrinkNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DrinkNumber = styled.h1``;

const NextRoundButton = styled.button`
  margin-top: 40px;
  color: white;
  background-color: #ee3347;
  font-size: 40px;
  padding: 10px;
  border-radius: 20px;
  border: solid 3px black;
  font-family: SunbirdRegular;
  box-shadow: rgba(0, 0, 0, 0.2) -2px -5px 0px inset;
`;

export default DrinkScreen;
