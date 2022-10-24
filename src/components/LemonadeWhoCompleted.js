import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { scoreBoardRequest } from '../actions/scoreboard';

const LemonadeWhoCompleted = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [names, setNames] = useState(false);
  const [lemonNames, setLemonNames] = useState(false);
  const [completedNames, setCompletedNames] = useState([]);
  const handleOnSubmit = useCallback(
    (ingredientsOrDrink) =>
      navigate(`/${ingredientsOrDrink}`, { replace: true }),
    [navigate]
  );

  useEffect(() => {
    if (!lemonNames) {
      const lemonNames = JSON.parse(localStorage.getItem('lemonNames'));
      setLemonNames(lemonNames);
    }
    if (!names) {
      const names = JSON.parse(localStorage.getItem('names'));
      setNames(names);
    }
  }, [lemonNames, names]);

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
    if (lemonNames.length !== completedNames.length) {
      let drinkers = [];
      lemonNames.forEach((player) => {
        if (!completedNames.includes(player)) {
          drinkers.push(player);
        }
      });
      localStorage.setItem('drinkers', JSON.stringify(drinkers));
      handleOnSubmit('drink');
    } else {
      dispatch(scoreBoardRequest(true));
      handleOnSubmit('ingredients');
    }
  };

  if (lemonNames) {
    return (
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
    );
  }
};

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

export default LemonadeWhoCompleted;