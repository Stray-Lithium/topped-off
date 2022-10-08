import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiPlus } from 'react-icons/fi';
import appBackground from '../assets/app-background.png';

const NamesScreen = () => {
  const [name, setName] = useState('');
  const [players, setPlayers] = useState({});

  useEffect(() => {}, [players]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    let playerObject = {};
    playerObject[name.toUpperCase()] = {
      name: name.toUpperCase(),
      lemonadeScore: 0,
      whiskeyScore: 0,
      martiniScore: 0,
      mojitoScore: 0,
    };
    console.log(playerObject, 'obj');
    setPlayers({ ...players, ...playerObject });
    setName('');
    event.preventDefault();
  };

  const ready = () => {
    localStorage.setItem('names', JSON.stringify(players));
  };

  const playerData = () => {
    return Object.values(players);
  };
  const playersArray = playerData();

  return (
    <ScreenBackground>
      <ScreenContainer>
        <Title>ENTER PLAYER NAMES</Title>
        <PlayersContainer>
          <PlayerTitle>PLAYERS</PlayerTitle>
          <PlayersList>
            {playersArray.map((player) => {
              return <PlayerName>{player.name}</PlayerName>;
            })}
          </PlayersList>
        </PlayersContainer>
        <InputContainer>
          <FiPlus style={styles.plusIcon} onClick={handleSubmit} />
          <Form onSubmit={handleSubmit}>
            <Input
              type='text'
              value={name}
              onChange={handleNameChange}
              placeholder='Enter Name...'
            />
          </Form>
        </InputContainer>
        <Link to='/ingredients'>
          <ReadyButton onClick={ready}>READY!</ReadyButton>
        </Link>
      </ScreenContainer>
    </ScreenBackground>
  );
};

const styles = {
  plusIcon: {
    position: 'absolute',
    right: -15,
    top: -15,
    fontSize: 26,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#ee3347',
    boxShadow: 'rgba(0, 0, 0, 0.2) -2px -5px 0px inset',
    border: 'solid 3px black',
  },
};

const ScreenBackground = styled.div`
  display: flex;
  color: black;
  flex-direction: column;
  align-items: center;
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
  width: 90%;
`;

const Title = styled.h1`
  font-family: SunbirdRegular;
  color: #ee3347;
  width: 80%;
  letter-spacing: 5px;
  text-align: center;
  font-size: 30px;
  margin-bottom: 40px;
  text-shadow: 
  /* first layer at 1px */ -1px -1px 0px #000, 0px -1px 0px #000,
    1px -1px 0px #000, -1px 0px 0px #000, 1px 0px 0px #000, -1px 1px 0px #000,
    0px 1px 0px #000, 1px 1px 0px #000,
    /* second layer at 2px */ -2px -2px 0px #000, -1px -2px 0px #000,
    0px -2px 0px #000, 1px -2px 0px #000, 2px -2px 0px #000, 2px -1px 0px #000,
    2px 0px 0px #000, 2px 1px 0px #000, 2px 2px 0px #000, 1px 2px 0px #000,
    0px 2px 0px #000, -1px 2px 0px #000, -2px 2px 0px #000, -2px 1px 0px #000,
    -2px 0px 0px #000, -2px -1px 0px #000;
`;

const PlayersContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const PlayerTitle = styled.h2`
  text-align: center;
  letter-spacing: 3px;
  width: 50%;
`;

const PlayersList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  width: 50%;
  height: 200px;
  border-top: solid 2px black;
  overflow-y: auto;
`;

const PlayerName = styled.h2`
  font-size: 14px;
  margin: 4px;
  border-radius: 10px;
  text-align: center;
  width: 40vw;
  padding: 6px;
  letter-spacing: 3px;
  background-color: white;
  background-color: rgba(255, 255, 255, 0.5);
  border: solid 3px black;
`;

const InputContainer = styled.div`
  position: relative;
  margin-top: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 90%;
  height: 50px;
  border-radius: 20px;
  font-size: 20px;
  padding-left: 14px;
  font-family: SunbirdBlack;
  color: gray;
  border: solid 3px black;
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  background-color: rgba(255, 255, 255, 0.5);
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: rgba(0, 0, 0, 0.5);
    opacity: 1; /* Firefox */
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: gray;
  }
  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: gray;
  }
`;

const ReadyButton = styled.button`
  background-color: #ee3347;
  font-size: 26px;
  padding: 12px 0px 12px 0px;
  width: 50vw;
  letter-spacing: 5px;
  border-radius: 10px;
  margin-top: 30px;
  border: solid 3px black;
  font-family: SunbirdBlack;
  color: black;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) -2px -5px 0px inset;
`;

export default NamesScreen;
