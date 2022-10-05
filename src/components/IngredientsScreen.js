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

const IngredientsScreen = () => {
  return (
    <ScreenBackground>
      <ScreenContainer>
        <Title>Choose Ingredient</Title>
        <IngredientsContainer>
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
        </IngredientsContainer>
      </ScreenContainer>
    </ScreenBackground>
  );
};

const ScreenBackground = styled.div`
  display: flex;
  color: white;
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

export default IngredientsScreen;
