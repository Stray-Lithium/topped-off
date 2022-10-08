import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { lemonPrompts } from '../blanks/lemon';
import { iceBlank } from '../blanks/ice';
import { oliveBlank } from '../blanks/olive';
import { martiniCard } from '../cards/martini';
import { whiskeyCard } from '../cards/whiskey';
import { mojitoCard } from '../cards/mojito';
import { lemonadeCard } from '../cards/lemonade';

const ChallengeScreen = () => {
  const { ingredient } = useParams();
  const [names, setNames] = useState([]);
  const [currentName, setCurrentName] = useState('');
  const [currentCard, setCurrentCard] = useState('');
  const [lemonPlayers, setLemonPlayers] = useState([]);
  const [scoreUpdate, setScoreUpdate] = useState(false);

  useEffect(() => {
    const name = JSON.parse(localStorage.getItem('currentName'));
    setCurrentName(name);
  }, []);

  useEffect(() => {
    const card = JSON.parse(localStorage.getItem('currentCard'));
    setCurrentCard(card);
  }, []);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('names'));
    setNames(items);
  }, [scoreUpdate]);

  const nameArray = () => {
    const newArray = [];
    Object.keys(names).forEach((name) => {
      newArray.push({ name });
    });
    return newArray;
  };
  const checkboxNames = nameArray();

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

  const chellenges = () => {
    return (
      <BlankBackground>
        {ingredient === 'lemonade' ? (
          <ScreenContainer>
            <Title>{lemonPrompts[0]}?</Title>
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
                Confirm
              </ConfirmButton>
            </Link>
          </ScreenContainer>
        ) : (
          <ScreenContainer>
            <BlankWord>{`${currentName}! ${blankWord()}`}</BlankWord>
            <ChallengeComplete
              onClick={() => {
                complete();
              }}
            >
              Complete!
            </ChallengeComplete>
            <Drink>Drink!</Drink>
          </ScreenContainer>
        )}
      </BlankBackground>
    );
  };

  const score = Object.values(names);

  if (Object.values(names).length && currentName !== '') {
    return (
      <ScreenBackground>
        {!scoreUpdate ? (
          chellenges()
        ) : (
          <ScreenContainer>
            <Title>Scoreboard</Title>
            <CheckboxContainer>
              <Names>
                {score.map((player) => {
                  return (
                    <CheckboxSpacing>
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
            </CheckboxContainer>
            <Link
              to={{
                pathname: `/ingredients`,
              }}
            >
              <ConfirmButton>Confirm</ConfirmButton>
            </Link>
          </ScreenContainer>
        )}
      </ScreenBackground>
    );
  }
};

const ScreenBackground = styled.div`
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #808184;
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
  text-align: center;
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
  // margin: 0px;
  margin-bottom: 40px;
  box-shadow: rgba(0, 0, 0, 0.2) -2px -5px 0px inset;
`;

const ChallengeComplete = styled.button`
  color: white;
  background-color: #ee3347;
  font-size: 24px;
  padding: 14px;
  border-radius: 10px;
  border: solid 3px black;
  font-family: SunbirdRegular;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) -2px -5px 0px inset;
`;

const Drink = styled.button`
  color: white;
  background-color: #ee3347;
  font-size: 24px;
  padding: 14px;
  border-radius: 10px;
  border: solid 3px black;
  font-family: SunbirdRegular;
  margin-bottom: 20px;
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
  overflow-y: auto;
`;

const CheckboxSpacing = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
`;

const Names = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  // justify-content: space-between;
  width: 50%;
`;

const CheckboxName = styled.h2`
  font-size: 28px;
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

const ConfirmButton = styled.button`
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

export default ChallengeScreen;
