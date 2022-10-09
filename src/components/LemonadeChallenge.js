import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import appBackground from '../assets/app-background.png';
import { lemonadeCard } from '../cards/lemonade';
import yellowCard from '../assets/yellow-card.png';

const LemonadeChallenge = () => {
  const [names, setNames] = useState([]);
  const [lemonNames, setLemonNames] = useState([]);
  const [completedNames, setCompletedNames] = useState([]);
  const [challenge, setChallenge] = useState(false);
  const [scoreUpdate, setScoreUpdate] = useState(false);
  const [whoCompleted, setWhoCompleted] = useState(false);

  const titleMaker = () => {
    const lemonLength = lemonNames.length;
    let title = '';
    lemonNames.forEach((name, index) => {
      if (lemonLength === 1) {
        console.log('first');
        title += `${name},`;
      } else if (index === lemonLength - 2) {
        title += `${name} and `;
      } else {
        title += `${name}, `;
      }
    });
    return title;
  };

  useEffect(() => {
    const lemonNames = JSON.parse(localStorage.getItem('lemonNames'));
    const names = JSON.parse(localStorage.getItem('names'));
    setLemonNames(lemonNames);
    setNames(names);
    if (!challenge) {
      setChallenge(lemonadeCard());
    }
  }, [scoreUpdate]);

  const checkboxClick = (e, checkName) => {
    const addToCheck = e.target.checked;
    if (addToCheck) {
      setCompletedNames([...completedNames, checkName]);
    } else {
      let filter = completedNames.filter((player) => player !== checkName);
      setCompletedNames(filter);
    }
  };

  const confirm = () => {
    const namesCopy = names;
    completedNames.forEach((name) => {
      namesCopy[name].lemonadeScore += 1;
    });
    localStorage.setItem('names', JSON.stringify(namesCopy));
    setScoreUpdate(true);
  };

  const score = Object.values(names);

  const scoreNamesArray = () => {
    const newArray = [];
    Object.values(names).forEach((player) => {
      newArray.push(player);
    });
    return newArray;
  };
  const scoreNameArray = scoreNamesArray();

  const drinkScreen = () => {
    if (lemonNames.length !== completedNames.length) {
      let drinkers = [];
      lemonNames.forEach((player) => {
        if (!completedNames.includes(player)) {
          drinkers.push(player);
        }
      });
      localStorage.setItem('drinkers', JSON.stringify(drinkers));
      return 'drink';
    } else {
      return 'ingredients';
    }
  };

  if (lemonNames.length && challenge && scoreNameArray) {
    return (
      <ScreenBackground>
        {!scoreUpdate ? (
          !whoCompleted ? (
            <ScreenContainer>
              <BackOfCardContainer>
                <BackOfCard src={yellowCard} />
                <CardContentContainer>
                  <CardContent>
                    {titleMaker()} {challenge}
                  </CardContent>
                </CardContentContainer>
              </BackOfCardContainer>
              <ConfirmButton onClick={() => setWhoCompleted(true)}>
                OK
              </ConfirmButton>
            </ScreenContainer>
          ) : (
            <ScreenContainer>
              <Title>WHO COMPLETED THE CHALLENGE?</Title>
              <CheckboxContainer>
                <Names>
                  {lemonNames.map((name) => {
                    return (
                      <CheckboxSpacing>
                        <CheckboxName>{name}</CheckboxName>
                      </CheckboxSpacing>
                    );
                  })}
                </Names>
                <Checkboxes>
                  {lemonNames.map((name) => {
                    return (
                      <CheckboxSpacing>
                        <Checkbox
                          type='checkbox'
                          onClick={(e) => checkboxClick(e, name)}
                        />
                      </CheckboxSpacing>
                    );
                  })}
                </Checkboxes>
              </CheckboxContainer>
              <ConfirmButton onClick={() => confirm()}>CONFIRM</ConfirmButton>
            </ScreenContainer>
          )
        ) : (
          <ScreenContainer>
            <ScoreboardContainer>
              <Title>SCOREBOARD</Title>
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
            <Link
              to={{
                pathname: `/${drinkScreen()}`,
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

const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin-top: 20px;
`;

const Title = styled.h1`
  font-family: SunbirdBlack;
  letter-spacing: 2px;
  text-align: center;
  font-size: 26px;
  width: 80%;
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

const CheckboxContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

export default LemonadeChallenge;
