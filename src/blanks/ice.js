export const iceBlank = () => {
	const iceBlanks = [
		{ id: 'whb1', content: 'Do push-ups', timer: false },
		{ id: 'whb2', content: 'Squat like a slav', timer: false },
		{ id: 'whb3', content: 'Take a whiff of your armpits', timer: false },
		{ id: 'whb4', content: 'Get kicked in the ass', timer: false },
		{ id: 'whb5', content: 'Swing your hips back and forth', timer: false },
		{ id: 'whb7', content: 'Jog like your crotch is on fire', timer: false },
		{ id: 'whb8', content: 'Move like Michael Jackson', timer: false },
		{ id: 'whb9', content: 'Strike a funny pose', timer: false },
		{ id: 'whb10', content:'Hop on a chair for 5 seconds', timer: false },
		{ id: 'whb15', content: 'Pretend to swim in a pool', timer: false },
		{ id: 'whb16', content: 'Crawl', timer: false },
		{ id: 'whb17', content: 'Clap', timer: false },
		{ id: 'whb18', content: 'Jump', timer: false },
		{ id: 'whb19', content: 'Get spanked', timer: false },
		{ id: 'whb20', content: 'Do squats', timer: false },
		{ id: 'whb21', content: 'Dance', timer: false },
		{ id: 'whb22', content: 'Jump on one leg', timer: false },
		{ id: 'whb24', content: 'Shake your head', timer: false },
		{ id: 'whb25', content: 'Get slapped', timer: false },
		{ id: 'whb26', content: 'Get pinched', timer: false },
		{ id: 'whb27', content: 'Get tickled', timer: false },
		{ id: 'whb28', content: 'Lick your arms like a cat', timer: false },
		{ id: 'whb29', content: 'Get poked', timer: false },
		{ id: 'whb30', content: 'Peck someone like a bird', timer: false},
		{ id: 'whb31', content: 'Twerk', timer: false},
		{ id: 'whb36', content: 'Stroke your hair', timer: false},
		{ id: 'whb37', content: 'Toosie slide', timer: false},
		{ id: 'whb38', content: 'Moonwalk', timer: false},
		{ id: 'whb39', content: 'Break dance', timer: false},
		{ id: 'whb40', content: 'Pretend to ride on a horse', timer: false},
		{ id: 'whb42', content: 'Jump-jack', timer: false},
		{ id: 'whb45', content: 'Rave like a party animal', timer: false},
		{ id: 'whb51', content: 'Pray', timer: false},
		{ id: 'whb54', content: 'Flop like a fish', timer: false},
		{ id: 'whb55', content: 'Flash dem titties lol', timer: false},
		{ id: 'whb56', content: 'Robo-dance', timer: false},
		{ id: 'whb58', content: 'Lick your thumb', timer: false},
		{ id: 'whb60', content: 'Kneel', timer: false},
		{ id: 'whb62', content: 'Hop left to right', timer: false},
		{ id: 'whb64', content: 'Imitate one of the players', timer: false},
		{ id: 'whb65', content: 'Fight a ghost', timer: false},
		{ id: 'whb67', content: 'Limp like a pimp', timer: false},
		{ id: 'whb68', content: 'Roll like a barrel', timer: false},
		{ id: 'whb70', content: 'Get your undies pulled', timer: false},
		{ id: 'whb74', content: 'Drop dead', timer: false},
		{ id: 'whb76', content: 'Do a split', timer: false},
		{ id: 'whb77', content: 'Awkwardly wink', timer: false},
		{ id: 'whb80', content: 'Creep like a worm', timer: false},
		{ id: 'whb82', content: 'Summersault backwards', timer: false},
		{ id: 'whb87', content: 'Wrestle an imaginary bear', timer: false},
		{ id: 'whb88', content: 'Mime pulling a rope', timer: false},
		{ id: 'whb89', content: 'Cling to a tables leg', timer: false},
		{ id: 'whb90', content: 'Climb over an invisible wall', timer: false},
		{ id: 'whb92', content: 'Perform a karate chop', timer: false},
		{ id: 'whb94', content: 'Do the three-step waltz move', timer: false},
		{ id: 'whb96', content: 'Strip tease (Gin Promo)', timer: false},
		{ id: 'whb98', content: 'Tap dance', timer: false},

	];
	const randomWordIndex = Math.floor(Math.random() * iceBlanks.length) + 0;
	const challenge = iceBlanks[randomWordIndex];
	return challenge;
};
