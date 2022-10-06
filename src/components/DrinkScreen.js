import styled from 'styled-components';

const DrinkScreen = () => {
  return (
    <ScreenBackground>
      <ScreenContainer>
        <Title>Drinks screen</Title>
      </ScreenContainer>
    </ScreenBackground>
  );
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

export default DrinkScreen;
