import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ScoreScreen = ({ names }) => {
  const scoreNamesArray = () => {
    const newArray = [];
    Object.values(names).forEach((player) => {
      newArray.push(player);
    });
    return newArray;
  };
  const scoreNameArray = scoreNamesArray();

  return (
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
  );
};

const Title = styled.h1`
  font-family: SunbirdBlack;
  letter-spacing: 2px;
  text-align: center;
  font-size: 26px;
  margin-bottom: 30px;
  width: 80%;
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

export default ScoreScreen;
