import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { lemonBlankFill } from '../blanks/lemon';
import audio from '../assets/audio/click.mp3';

const LemonadeScreen = () => {
	const navigate = useNavigate();
	const [names, setNames] = useState(false);
	const [lemonFill, setLemonFill] = useState(false);
	const [lemonPlayers, setLemonPlayers] = useState([]);
	const [buttonDisabled, setButtonDisabled] = useState(false);
	const handleOnSubmit = useCallback(
		() => navigate(`/lemonade-challenge`, { replace: true }),
		[navigate]
	);
	const audioToPlay = new Audio(audio);

	useEffect(() => {
		const items = JSON.parse(localStorage.getItem('names'));
		if (!names) {
			setNames(items);
		}
	}, [names]);

	useEffect(() => {
		if (!lemonFill) {
			setLemonFill(lemonBlankFill().toUpperCase());
		}
	}, [lemonFill]);

	useEffect(() => {
		if (lemonPlayers.length > 0) {
			setButtonDisabled(false);
		}
	}, [lemonPlayers]);

	const nameArray = () => {
		const newArray = [];
		Object.keys(names).forEach((name) => {
			newArray.push({ name });
		});
		return newArray;
	};
	const checkboxNames = nameArray();

	const checkboxClick = (e, checkName) => {
		audioToPlay.play();
		const addToCheck = e.target.checked;
		if (addToCheck) {
			setLemonPlayers([...lemonPlayers, checkName]);
		} else {
			let filter = lemonPlayers.filter((player) => player !== checkName);
			setLemonPlayers(filter);
		}
	};

	const confirmLemonade = () => {
		audioToPlay.play();
		if (lemonPlayers.length > 0) {
			localStorage.setItem('lemonNames', JSON.stringify(lemonPlayers));
			handleOnSubmit();
		} else {
			setButtonDisabled(true);
		}
	};

	const refreshCard = () => {
		audioToPlay.play();
		setLemonFill(lemonBlankFill().toUpperCase());
		setButtonDisabled(false);
	};

	if (names) {
		return (
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
				<ConfirmButton
					style={buttonDisabled ? { opacity: '0.3' } : {}}
					onClick={() => confirmLemonade()}
				>
					CONFIRM
				</ConfirmButton>
				{buttonDisabled ? (
					<RefreshContainer>
						<RefreshTitle>Tick a player or refresh card.</RefreshTitle>
						<RefreshButton onClick={() => refreshCard()}>REFRESH</RefreshButton>
					</RefreshContainer>
				) : (
					<></>
				)}
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
`;

const Title = styled.h1`
	font-family: SunbirdBlack;
	letter-spacing: 2px;
	text-align: center;
	font-size: 26px;
	margin-bottom: 30px;
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
	// height: 200px;
	overflow-y: auto;
`;

const CheckboxSpacing = styled.div`
	display: flex;
	align-items: center;
	// margin-bottom: 20px;
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
	// height: 50px;
	// basckground-color: orange;
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

const RefreshContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const RefreshTitle = styled.h1`
	font-family: SunbirdBlack;
	letter-spacing: 2px;
	text-align: center;
	font-size: 20px;
	margin-bottom: 10px;
	width: 80%;
	color: yellow;
`;

const RefreshButton = styled.button`
	color: black;
	background-color: #ee3347;
	font-size: 22px;
	padding: 12px 0px 12px 0px;
	letter-spacing: 3px;
	margin-top: 10px;
	margin-bottom: 10px;
	width: 44vw;
	border-radius: 10px;
	border: solid 3px black;
	font-family: SunbirdBlack;
	box-shadow: rgba(0, 0, 0, 0.2) -2px -5px 0px inset;
`;

export default LemonadeScreen;
