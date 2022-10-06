import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { lemonBlanks, lemonPrompts } from '../blanks/lemon';
import { iceBlank } from '../blanks/ice';
import { oliveBlank } from '../blanks/olive';
import { mojitoBlanks } from '../blanks/mojito';
import { martiniCard } from '../cards/martini';
import { whiskeyCard } from '../cards/whiskey';
import { mojitoCard } from '../cards/mojito';
import { lemonadeCard } from '../cards/lemonade';

const ChallengeScreen = () => {
  const { ingredient } = useParams();
  const [names, setNames] = useState([]);
  const [lemonPlayers, setLemonPlayers] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('names'));
    if (items && names.length === 0) {
      setNames(items);
    }
  }, [names]);

  const nameArray = () => {
    const newArray = [];
    Object.keys(names).forEach((name) => {
      newArray.push({ name });
    });
    return newArray;
  };
  const checkboxNames = nameArray();

  const currentName = () => {
    const lengthOfNames = Object.values(names).length;
    const randomNameIndex = Math.floor(Math.random() * lengthOfNames) + 0;
    const name = Object.keys(names)[randomNameIndex];
    return name;
  };

  const blankWord = () => {
    // let blankData = lemonBlanks;
    if (ingredient === 'whiskey') {
      // const ice = iceBlank();
      // const whiskey = whiskeyCard(ice);
      return whiskeyCard(iceBlank());
    }
    if (ingredient === 'martini') {
      // const olive = oliveBlank();
      // const martini = martiniCard(olive);
      return martiniCard(oliveBlank());
    }
    if (ingredient === 'mojito') {
      // const mojito = mojitoCard();
      return mojitoCard();
    }
    // const randomWordIndex = Math.floor(Math.random() * blankData.length) + 0;
    // const challenge = blankData[randomWordIndex];
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

  const confirm = () => {
    localStorage.setItem('lemonNames', JSON.stringify(lemonPlayers));
  };

  if (Object.values(names).length) {
    return (
      <ScreenBackground>
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
              <ConfirmButton onClick={() => confirm()}>Confirm</ConfirmButton>
            </Link>
            {/* <BlankWord>{lemonadeCard(blankWord())}</BlankWord> */}
          </ScreenContainer>
        ) : (
          <ScreenContainer>
            {/* <Title>This challenge is for</Title>
            <Name>{`${currentName()}!`}</Name> */}
            <BlankWord>{`${currentName()}! ${blankWord()}`}</BlankWord>
            <ChallengeComplete>Complete!</ChallengeComplete>
            <Drink>Drink!</Drink>
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
