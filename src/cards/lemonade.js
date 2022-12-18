export const lemonadeCard = () => {
	const lemonadeCards = [
		{
			id: 'lec1',
			title: `Stinky Feet`,
			content: `take off your socks.`,
			comment: ``,
			timer: false,
		},
		{
			id: 'lec2',
			title: `Peel Off`,
			content: `Lose one piece of clothing.`,
			comment: ``,
			timer: false,
		},
		{
			id: 'lec3',
			title: `Paper Plane`,
			content: `make a paper plane and throw it across the room. If it flies well and hits the wall on the other side - you're safe. If not - you know what to do... DRINK!`,
			comment: ``,
			timer: false,
		},
		{
			id: 'lec4',
			title: `Off The Grid`,
			content: `switch off your phone for the rest of the game.`,
			comment: ``,
			timer: false,
		},
		{
			id: 'lec5',
			title: `Bank Roll`,
			content: `tell everyone how much money you currently have in your bank account.`,
			comment: ``,
			timer: false,
		},
		{
			id: 'lec6',
			title: `Lay Bare`,
			content: `let the player to your right look through your phone for 1 minute.`,
			comment: ``,
			timer: false,
		},
		{
			id: 'lec7',
			title: `Influencer/Top Model`,
			content: `pretend to be posing for a photograph and strike 10 different poses.`,
			comment: ``,
			timer: false,
		},
		{
			id: 'lec8',
			title: `Rewind`,
			content: `say your full name backwards without a pause.`,
			comment: ``,
			timer: false,
		},
		{
			id: 'lec9',
			title: `Casanova`,
			content: `tell everyone how many sex partners you've had`,
			comment: ``,
			timer: false,
		},
		{
			id: 'lec10',
			title: `Accento`,
			content: `describe your toilet technique with an Italian accent.`,
			comment: `Capeesh?`,
			timer: false,
		},
		{
			id: 'lec11',
			title: `Top Secret`,
			content: `reveal one thing you’ve never told anyone.`,
			comment: `Get it off your chest.`,
			timer: false,
		},
		{
			id: 'lec12',
			title: `Cheeky Pointer`,
			content: `point to the most and the least annoying people in the room. Don’t say which one’s which.`,
			comment: ``,
			timer: false,
		},
		{
			id: 'lec13',
			title: `Drunk Tat`,
			content: `Get a marker and choose one co-player to give you a matching tattoo.`,
			comment: ``,
			timer: false,
		},
		{
			id: 'lec14',
			title: `Soggy Slap`,
			content: `hold a mouthful of water and slap each other with a tortilla (or something similar) until you burst.`,
			comment: `Hold the drool.`,
			timer: false,
		},
		{
			id: 'lec15',
			title: `Mall Mannequin`,
			content: `get moved by other players and stand still in that position. Get your photos taken.`,
			comment: ``,
			timer: false,
		},
		{
			id: 'lec16',
			title: `Catwalk`,
			content: `do a catwalk as if you’re the top model at a fashion show.`,
			comment: ``,
			timer: false,
		},
		{
			id: 'lec17',
			title: `Mad Architect`,
			content: `get 5 different items and stack them up in 15 seconds.`,
			comment: ``,
			timer: 15,
		},
		{
			id: 'lec18',
			title: `Loo Swag`,
			content: `get some toilet paper and make yourself a scarf to wear for the rest of the game.`,
			comment: ``,
			timer: false,
		},
	];
	const randomWordIndex = Math.floor(Math.random() * lemonadeCards.length) + 0;
	const challenge = lemonadeCards[randomWordIndex];
	return challenge;
};

// `skip your next turn.`,
//     `take off your socks.`,
//     `Lose one piece of clothing. (Extension pack promotion)`,
//     `choose your time to shout, "The ground is lava!!" (The last one touching the floor rolls the dice)`,
//     `choose your time to ask someone, "what's the time right now?". If they tell you the time - they drink. If they respond by saying “Top off” - you drink.`,
//     `make an origami airplane and throw it across the room. If it flies well and hits the wall on the other side - you're safe. If not - take a shot.`,
//     `put your phone on the table screen up. The person whose phone lights up first drinks.`,
//     `switch off your phone completely for the rest of the game.`,
//     `do 20 squats right now.`,
//     `tell everyone how much money you currently have in your bank account.`,
//     `talk in a strange accent for the next 5 minutes.`,
//     `let the player to your right look through your phone for 1 minute.`,
//		something 