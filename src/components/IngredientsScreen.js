import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import yellowCard from '../assets/yellow-card.png';
import whiteCard from '../assets/white-card.png';
import redCard from '../assets/red-card.png';
import blueCard from '../assets/blue-card.png';
import lemonade from '../assets/lemonade.png';
import mojito from '../assets/mojito.png';
import whiskey from '../assets/whiskey.png';
import martini from '../assets/martini.png';
import logo from '../assets/topped-logo-red.png';
import grayCard from '../assets/gray-card.png';

const IngredientsScreen = () => {
  const [cardSpun, setCardSpun] = useState(false);
  const [names, setNames] = useState([]);
  const [cocktailCard, setIngredientCard] = useState('');
  const [ingredientCardToRender, setIngredientCardToRender] = useState(false);
  const [ingredientImageToRender, setIngredientImageToRender] = useState(false);

  const ingredientRandomizer = () => {
    console.log('invoked');
    const cards = ['lemonade', 'whiskey', 'martini', 'mojito'];
    const randomWordIndex = Math.floor(Math.random() * cards.length) + 0;
    const card = cards[randomWordIndex];
    if (card === 'whiskey') {
      setIngredientCardToRender(redCard);
      setIngredientImageToRender(whiskey);
    }
    if (card === 'martini') {
      setIngredientCardToRender(blueCard);
      setIngredientImageToRender(martini);
    }
    if (card === 'mojito') {
      setIngredientCardToRender(whiteCard);
      setIngredientImageToRender(mojito);
    }
    if (card === 'lemonade') {
      setIngredientCardToRender(yellowCard);
      setIngredientImageToRender(lemonade);
    }
    setIngredientCard(card);
  };

  useEffect(() => {
    if (!ingredientCardToRender && !ingredientImageToRender) {
      ingredientRandomizer();
    }
    const items = JSON.parse(localStorage.getItem('names'));
    if (items && names.length === 0) {
      setNames(items);
    }
  }, [names]);

  const flipCard = () => {
    const lengthOfNames = Object.values(names).length;
    const randomNameIndex = Math.floor(Math.random() * lengthOfNames) + 0;
    const name = Object.keys(names)[randomNameIndex];
    localStorage.setItem('currentName', JSON.stringify(`${name}`));
    setCardSpun(true);
  };

  const storeCurrentCard = () => {
    localStorage.setItem('currentCard', JSON.stringify(`${cocktailCard}Score`));
  };

  return (
    <ScreenBackground>
      <ScreenContainer>
        <Title>Choose Ingredient</Title>
        {cardSpun ? (
          ingredientCardToRender && ingredientImageToRender ? (
            <BackOfCardContainer>
              <BackOfCard src={ingredientCardToRender} />
              <Logo src={ingredientImageToRender} />
            </BackOfCardContainer>
          ) : (
            <></>
          )
        ) : (
          <BackOfCardContainer>
            <BackOfCard src={grayCard} />
            <Logo src={logo} />
          </BackOfCardContainer>
        )}
        {cardSpun ? (
          <Link
            to={{
              pathname: `/challenge/${cocktailCard}`,
            }}
          >
            <FlipCardButton onClick={() => storeCurrentCard()}>
              Continue!
            </FlipCardButton>
          </Link>
        ) : (
          <FlipCardButton onClick={() => flipCard()}>Flip card!</FlipCardButton>
        )}
      </ScreenContainer>
    </ScreenBackground>
  );
  // }
};

const ScreenBackground = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #6d6e70;
`;

const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

const Title = styled.h1`
  margin-bottom: 60px;
`;

const IngredientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HalfCocktails = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const CardContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Card = styled.img`
  opacity: 60%;
  margin-bottom: 40px;
  width: 40vw;
  filter: drop-shadow(2px 5px 0px #222);
`;

const Ingredient = styled.img`
  position: absolute;
  margin-bottom: 40px;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 20vw;
`;

const BackOfCardContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackOfCard = styled.img`
  opacity: 60%;
  width: 70vw;
  filter: drop-shadow(2px 5px 0px #222);
`;

const Logo = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 40vw;
`;

const FlipCardButton = styled.button`
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

export default IngredientsScreen;

{
  /* <IngredientsContainer>
          <HalfCocktails>
            <Link
              to={{
                pathname: `/challenge/lemonade`,
              }}
            >
              <CardContainer>
                <Card src={yellowCard} />
                <Ingredient src={lemonade} />
              </CardContainer>
            </Link>
            <Link
              to={{
                pathname: `/challenge/whiskey`,
              }}
            >
              <CardContainer>
                <Card src={redCard} />
                <Ingredient src={whiskey} />
              </CardContainer>
            </Link>
          </HalfCocktails>
          <HalfCocktails>
            <Link
              to={{
                pathname: `/challenge/martini`,
              }}
            >
              <CardContainer>
                <Card src={blueCard} />
                <Ingredient src={martini} />
              </CardContainer>
            </Link>
            <Link
              to={{
                pathname: `/challenge/mojito`,
              }}
            >
              <CardContainer>
                <Card src={whiteCard} />
                <Ingredient src={mojito} />
              </CardContainer>
            </Link>
          </HalfCocktails>
        </IngredientsContainer> */
}
