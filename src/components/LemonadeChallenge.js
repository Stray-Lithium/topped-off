import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { lemonadeCard } from '../cards/lemonade';

const LemonadeChallenge = () => {
  const [names, setNames] = useState([]);
  const [lemonNames, setLemonNames] = useState([]);
  const [completedNames, setCompletedNames] = useState([]);
  const [challenge, setChallenge] = useState(false);
  const [scoreUpdate, setScoreUpdate] = useState(false);

  const titleMaker = () => {
    const lemonLength = lemonNames.length;
    let title = '';
    lemonNames.forEach((name, index) => {
      console.log(name, index);
      if (lemonLength === 1 || index === lemonLength - 1) {
        title += `${name},`;
      } else if (index === lemonLength - 2) {
        title += `${name} and `;
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

  if (lemonNames.length && challenge) {
    return (
      <ScreenBackground>
        {!scoreUpdate ? (
          <ScreenContainer>
            <BlankWord>
              {titleMaker()} {challenge}
            </BlankWord>
            <Title>Who completed this challenge?</Title>
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
            <ConfirmButton onClick={() => confirm()}>Confirm</ConfirmButton>
          </ScreenContainer>
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
                      <CheckboxName>{player.lemonadeScore}</CheckboxName>
                    </CheckboxSpacing>
                  );
                })}
              </Checkboxes>
            </CheckboxContainer>
            <Link
              to={{
                pathname: `/${drinkScreen()}`,
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
  width: 90%;
`;

const Title = styled.h1`
  margin: 0px;
  text-align: center;
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

export default LemonadeChallenge;
