import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import appBackground from '../assets/app-background.png';
import { lemonBlankFill } from '../blanks/lemon';
import { iceBlank } from '../blanks/ice';
import { oliveBlank } from '../blanks/olive';
import { martiniCard } from '../cards/martini';
import { whiskeyCard } from '../cards/whiskey';
import { mojitoCard } from '../cards/mojito';
import { lemonadeCard } from '../cards/lemonade';
import redCard from '../assets/red-card.png';
import whiteCard from '../assets/white-card.png';
import blueCard from '../assets/blue-card.png';
import yellowCard from '../assets/yellow-card.png';

const ChallengeScreen = () => {
  const { ingredient } = useParams();
  const [names, setNames] = useState([]);
  const [currentName, setCurrentName] = useState(false);
  const [currentCard, setCurrentCard] = useState('');
  const [lemonPlayers, setLemonPlayers] = useState([]);
  const [lemonFill, setLemonFill] = useState(false);
  const [scoreUpdate, setScoreUpdate] = useState(false);
  const [ingredientCardToRender, setIngredientCardToRender] = useState(false);

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
    if (currentCard === 'lemonadeScore') {
      setIngredientCardToRender(yellowCard);
    }
    // setIngredientCard(card);
  };

  useEffect(() => {
    if (!ingredientCardToRender) {
      ingredientRandomizer();
    }
  }, [currentCard]);

  useEffect(() => {
    if (!currentName) {
      const asyncCurrentName = async () => {
        const name = await JSON.parse(localStorage.getItem('currentName'));
        console.log(name);
        setCurrentName(name);
      };
      asyncCurrentName();
    }
  }, [currentName]);

  useEffect(() => {
    const card = JSON.parse(localStorage.getItem('currentCard'));
    console.log(card);
    setCurrentCard(card);
  }, []);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('names'));
    setNames(items);
  }, [scoreUpdate]);

  useEffect(() => {
    if (!lemonFill) {
      setLemonFill(lemonBlankFill().toUpperCase());
    }
  }, [currentCard]);

  const nameArray = () => {
    const newArray = [];
    Object.keys(names).forEach((name) => {
      newArray.push({ name });
    });
    return newArray;
  };
  const checkboxNames = nameArray();

  const scoreNamesArray = () => {
    const newArray = [];
    Object.values(names).forEach((player) => {
      newArray.push(player);
    });
    return newArray;
  };
  const scoreNameArray = scoreNamesArray();

  const blankWord = () => {
    if (ingredient === 'whiskey') {
      return whiskeyCard(iceBlank());
    }
    if (ingredient === 'martini') {
      return martiniCard(oliveBlank());
    }
    if (ingredient === 'mojito') {
      return mojitoCard();
    }
    return lemonadeCard();
  };

  const checkboxClick = (e, checkName) => {
    const addToCheck = e.target.checked;
    if (addToCheck) {
      setLemonPlayers([...lemonPlayers, checkName]);
    } else {
      let filter = lemonPlayers.filter((player) => player !== checkName);
      setLemonPlayers(filter);
      console.log(filter, 'filter');
    }
  };

  const confirmLemonade = () => {
    localStorage.setItem('lemonNames', JSON.stringify(lemonPlayers));
  };

  const complete = () => {
    const namesCopy = names;
    console.log(namesCopy[currentName][currentCard], 'example');
    namesCopy[currentName][currentCard] += 1;
    localStorage.setItem('names', JSON.stringify(namesCopy));
    setScoreUpdate(true);
  };

  const drinkScreen = () => {
    localStorage.setItem('drinkers', JSON.stringify([currentName]));
    return 'drink';
  };

  const chellenges = () => {
    return (
      <BlankBackground>
        {ingredient === 'lemonade' ? (
          <ScreenContainer>
            <Title>{lemonFill}?</Title>
            <CheckboxContainer>
              <Names>
                {checkboxNames.map((name) => {
                  return (
                    <CheckboxSpacing>
                      <CheckboxName>{name.name}</CheckboxName>
                    </CheckboxSpacing>
                  );
                })}
              </Names>
              <Checkboxes>
                {checkboxNames.map((name) => {
                  return (
                    <CheckboxSpacing>
                      <Checkbox
                        type='checkbox'
                        onClick={(e) => checkboxClick(e, name.name)}
                      />
                    </CheckboxSpacing>
                  );
                })}
              </Checkboxes>
            </CheckboxContainer>
            <Link
              to={{
                pathname: `/lemonade-challenge`,
              }}
            >
              <ConfirmButton onClick={() => confirmLemonade()}>
                CONFIRM
              </ConfirmButton>
            </Link>
          </ScreenContainer>
        ) : (
          <ScreenContainer>
            <BackOfCardContainer>
              <BackOfCard src={ingredientCardToRender} />
              <CardContentContainer>
                <CardContent>{`${currentName}! ${blankWord()}`}</CardContent>
              </CardContentContainer>
            </BackOfCardContainer>
            <ChallengeComplete
              onClick={() => {
                complete();
              }}
            >
              COMPLETE
            </ChallengeComplete>
            <Link
              to={{
                pathname: `/${drinkScreen()}`,
              }}
            >
              <Drink>DRINK</Drink>
            </Link>
          </ScreenContainer>
        )}
      </BlankBackground>
    );
  };

  const score = Object.values(names);
  console.log(scoreNameArray);

  if (Object.values(names).length && currentName && lemonFill) {
    return (
      <ScreenBackground>
        {!scoreUpdate ? (
          chellenges()
        ) : (
          <ScreenContainer>
            <Title>SCOREBOARD</Title>
            <ScoreboardContainer>
              {scoreNameArray.map((player) => {
                return (
                  <EachPersonsScoreContainer>
                    <IconsContainer>
                      <IconDiv>
                        <Score>{player.whiskeyScore}</Score>
                      </IconDiv>
                      <IconDiv>
                        <Score>{player.lemonadeScore}</Score>
                      </IconDiv>
                      <IconDiv>
                        <Score>{player.martiniScore}</Score>
                      </IconDiv>
                      <IconDiv>
                        <Score>{player.mojitoScore}</Score>
                      </IconDiv>
                    </IconsContainer>
                    <ScoreNameContainer>
                      <ScoreName>{player.name}</ScoreName>
                    </ScoreNameContainer>
                  </EachPersonsScoreContainer>
                );
              })}
            </ScoreboardContainer>
            {/* <Score>
              <Names>
                {score.map((player) => {
                  return (
                    <ScoreBoardContainer>
                      <CheckboxName>{player.name}</CheckboxName>
                    </CheckboxSpacing>
                  );
                })}
              </Names>
              <Checkboxes>
                {score.map((player) => {
                  return (
                    <CheckboxSpacing>
                      <CheckboxName>{player[currentCard]}</CheckboxName>
                    </CheckboxSpacing>
                  );
                })}
              </Checkboxes>
            </CheckboxContainer> */}
            <Link
              to={{
                pathname: `/ingredients`,
              }}
            >
              <ConfirmButton>CONFIRM</ConfirmButton>
            </Link>
          </ScreenContainer>
        )}
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

const Title = styled.h1`
  font-family: SunbirdBlack;
  letter-spacing: 2px;
  text-align: center;
  font-size: 26px;
  margin-bottom: 30px;
  width: 80%;
`;

const Name = styled.h1`
  background-color: #ee3347;
  padding: 16px;
  font-size: 26px;
  width: 40%;
  border-radius: 10px;
  border: solid 3px black;
  font-family: SunbirdRegular;
  text-align: center;
  margin: 0px;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) -2px -5px 0px inset;
`;

const BlankWord = styled.h1`
  text-align: center;
  background-color: #ee3347;
  padding: 20px;
  font-size: 26px;
  border-radius: 10px;
  border: solid 3px black;
  font-family: SunbirdRegular;
  margin-bottom: 40px;
  box-shadow: rgba(0, 0, 0, 0.2) -2px -5px 0px inset;
`;

const ChallengeComplete = styled.button`
  color: black;
  background-color: #ee3347;
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
  background-color: #ee3347;
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

const CheckboxContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // height: 300px;
  width: 80%;
  margin-top: 40px;
  margin-bottom: 40px;
  overflow-y: auto;
`;

const CheckboxSpacing = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
`;

const Names = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  // justify-content: space-between;
  width: 50%;
`;

const CheckboxName = styled.h2`
  font-size: 24px;
  margin: 0px;
`;

const Checkboxes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  // justify-content: space-between;
  width: 30%;
`;

const Checkbox = styled.input`
  accent-color: #ee3347;
  -ms-transform: scale(2); /* IE */
  -moz-transform: scale(2); /* FF */
  -webkit-transform: scale(2); /* Safari and Chrome */
  -o-transform: scale(2); /* Opera */
  transform: scale(2);
  padding: 10px;
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
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const CardContent = styled.p`
  font-size: 22px;
  text-align: center;
  width: 70%;
`;

const ScoreboardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const EachPersonsScoreContainer = styled.div`
  width: 100%;
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-evenly;
  width: 100%;
  height: ;
`;

const IconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ScoreNameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ScoreName = styled.p`
  font-size: 20px;
`;

const Score = styled.h1`
  margin: 0px;
`;

const ConfirmButton = styled.button`
  color: black;
  background-color: #ee3347;
  font-size: 22px;
  padding: 12px 0px 12px 0px;
  letter-spacing: 3px;
  margin-top: 20px;
  margin-bottom: 40px;
  width: 44vw;
  border-radius: 10px;
  border: solid 3px black;
  font-family: SunbirdBlack;
  box-shadow: rgba(0, 0, 0, 0.2) -2px -5px 0px inset;
`;

export default ChallengeScreen;
