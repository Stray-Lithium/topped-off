import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiPlus } from 'react-icons/fi';

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
      score: 0,
      checked: false,
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
    // console.log(players, 'new players');
    // console.log(Object.values(players));
    return Object.values(players);
  };
  const playersArray = playerData();

  // playerData();

  return (
    <ScreenContainer>
      <Title>Enter Player Names</Title>
      <PlayersContainer>
        <PlayerTitle>Players</PlayerTitle>
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
        <ReadyButton onClick={ready}>Ready!</ReadyButton>
      </Link>
    </ScreenContainer>
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

const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  color: white;
  background-color: #808184;
`;

const Title = styled.h1`
  margin-bottom: 40px;
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
  width: 50%;
`;

const PlayersList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  width: 50%;
  height: 200px;
  border-top: solid 2px white;
  border-bottom: solid 2px white;
  overflow-y: auto;
`;

const PlayerName = styled.h3`
  font-size: 20px;
  margin: 4px;
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
  border: none;
  font-family: SunbirdRegular;
  color: gray;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  background-color: rgba(255, 255, 255, 0.7);
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
  margin-top: 20px;
  color: white;
  background-color: #ee3347;
  font-size: 40px;
  padding: 10px;
  border-radius: 20px;
  border: solid 3px black;
  font-family: SunbirdRegular;
  box-shadow: rgba(0, 0, 0, 0.2) -2px -5px 0px inset;
`;

export default NamesScreen;
