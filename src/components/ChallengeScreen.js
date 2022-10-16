import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import appBackground from '../assets/app-background.png';
import { iceBlank } from '../blanks/ice';
import { oliveBlank } from '../blanks/olive';
import { martiniCard } from '../cards/martini';
import { whiskeyCard } from '../cards/whiskey';
import { mojitoCard } from '../cards/mojito';
import redCard from '../assets/red-card.png';
import whiteCard from '../assets/white-card.png';
import blueCard from '../assets/blue-card.png';
import LemonadeChallenge from './LemonadeScreen';
import { scoreBoardRequest } from '../actions/scoreboard';

const ChallengeScreen = () => {
  const dispatch = useDispatch();
  const { ingredient } = useParams();
  const [names, setNames] = useState(false);
  const [currentName, setCurrentName] = useState(false);
  const [currentCard, setCurrentCard] = useState(false);
  const [cardContent, setCardContent] = useState(false);
  const [ingredientCardToRender, setIngredientCardToRender] = useState(false);
  const [counter, setCounter] = useState(false);
  const [startTimer, setStartTimer] = useState(false);

  const ingredientRandomizer = () => {
    if (currentCard === 'whiskeyScore') {
      setIngredientCardToRender(redCard);
    }
    if (currentCard === 'martiniScore') {
      setIngredientCardToRender(blueCard);
    }
    if (currentCard === 'mojitoScore') {
      setIngredientCardToRender(whiteCard);
    }
  };

  const blankWord = () => {
    if (ingredient === 'whiskey') {
      setCardContent(whiskeyCard(iceBlank()));
    }
    if (ingredient === 'martini') {
      setCardContent(martiniCard(oliveBlank()));
    }
    if (ingredient === 'mojito') {
      setCardContent(mojitoCard());
    }
  };

  useEffect(() => {
    if (counter && startTimer) {
      const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [counter, startTimer]);

  useEffect(() => {
    if (!ingredientCardToRender) {
      ingredientRandomizer();
    }
  }, [currentCard]);

  useEffect(() => {
    if (!currentName) {
      const name = JSON.parse(localStorage.getItem('currentName'));
      setCurrentName(name);
    }
  }, [currentName]);

  useEffect(() => {
    if (!currentCard) {
      const card = JSON.parse(localStorage.getItem('currentCard'));
      setCurrentCard(card);
    }
  }, [currentCard]);

  useEffect(() => {
    if (!names) {
      const items = JSON.parse(localStorage.getItem('names'));
      setNames(items);
    }
  }, [names]);

  useEffect(() => {
    if (!cardContent) {
      blankWord();
    }
    setCounter(cardContent.timer);
  }, [cardContent]);

  const complete = () => {
    const namesCopy = names;
    namesCopy[currentName][currentCard] += 1;
    localStorage.setItem('names', JSON.stringify(namesCopy));
    dispatch(scoreBoardRequest(true));
  };

  const drinkScreen = () => {
    localStorage.setItem('drinkers', JSON.stringify([currentName]));
    return 'drink';
  };

  const challenges = () => {
    return (
      <BlankBackground>
        {ingredient === 'lemonade' ? (
          <LemonadeChallenge />
        ) : (
          <ScreenContainer>
            <Counter>{counter}</Counter>
            <BackOfCardContainer>
              <BackOfCard src={ingredientCardToRender} />
              <CardContentContainer>
                <CardTitle>{cardContent.title}</CardTitle>
                <CardContent>{`${currentName}! ${cardContent.content}`}</CardContent>
                <CardComment>{cardContent.comment}</CardComment>
              </CardContentContainer>
            </BackOfCardContainer>
            <CompleteDrinkContainer>
              {cardContent.timer && counter > 0 ? (
                <TimerButton onClick={() => setStartTimer(true)}>
                  START TIMER
                </TimerButton>
              ) : (
                <Link
                  to={{
                    pathname: `/ingredients`,
                  }}
                >
                  <ChallengeComplete
                    onClick={() => {
                      complete();
                    }}
                  >
                    COMPLETE
                  </ChallengeComplete>
                </Link>
              )}
              <Link
                to={{
                  pathname: `/${drinkScreen()}`,
                }}
              >
                <Drink>DRINK</Drink>
              </Link>
            </CompleteDrinkContainer>
          </ScreenContainer>
        )}
      </BlankBackground>
    );
  };

  if (names && currentName && cardContent) {
    return <ScreenBackground>{challenges()}</ScreenBackground>;
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

const BlankBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
`;

const Counter = styled.h1`
  font-size: 5rem;
  margin: 0px;
`;

const TimerButton = styled.button`
  color: black;
  background-color: rgba(255, 255, 255, 0.5);
  // background-color: #ee3347;
  font-size: 22px;
  padding: 14px 0px 14px 0px;
  letter-spacing: 2px;
  width: 50vw;
  margin-top: 20px;
  border-radius: 10px;
  border: solid 3px black;
  font-family: SunbirdBlack;
  box-shadow: rgba(0, 0, 0, 0.2) -2px -5px 0px inset;
`;

const CompleteDrinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChallengeComplete = styled.button`
  color: black;
  background-color: rgba(255, 255, 255, 0.5);
  // background-color: #ee3347;
  font-size: 22px;
  padding: 14px 0px 14px 0px;
  letter-spacing: 2px;
  width: 50vw;
  margin-top: 20px;
  border-radius: 10px;
  border: solid 3px black;
  font-family: SunbirdBlack;
  box-shadow: rgba(0, 0, 0, 0.2) -2px -5px 0px inset;
`;

const Drink = styled.button`
  color: black;
  background-color: rgba(255, 255, 255, 0.5);
  // background-color: #ee3347;
  font-size: 22px;
  padding: 12px 0px 12px 0px;
  letter-spacing: 2px;
  width: 44vw;
  margin-top: 10px;
  border-radius: 10px;
  border: solid 3px black;
  font-family: SunbirdBlack;
  box-shadow: rgba(0, 0, 0, 0.2) -2px -5px 0px inset;
`;

const BackOfCardContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackOfCard = styled.img`
  width: 80vw;
`;

const CardContentContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const CardTitle = styled.p`
  font-size: 26px;
  text-align: center;
  width: 80%;
  text-decoration: underline;
`;

const CardContent = styled.p`
  font-size: 22px;
  text-align: center;
  width: 70%;
`;

const CardComment = styled.p`
  font-size: 20px;
  text-align: center;
  width: 80%;
  font-style: italic;
`;

export default ChallengeScreen;
