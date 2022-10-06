export const martiniCard = (blank) => {
  const martiniCards = [
    `(Bystander) Everyone must ${blank} together, except you. Enjoy the show.`,
    `(Off the Cuff) The last player to stand up must ${blank}. Blame the game.`,
    `(Grenade Serenade) Flirtatiously gaze at the player to your right and ${blank}. Don’t try this in public.`,
    `(Double Stacked) Choose a player and ${blank} as you sit on their lap. Just embrace the awkwardness.`,
    `(Sweaty palms) Choose two players and ${blank} as you hold their hands. You won’t need them now anyway.`,
    `(Gorilla Grip) Arm-wrestle every player in the room and ${blank} for each defeat. Do you even lift?`,
    `(Flamingo) Stand on one leg and ${blank}. It’s just you vs gravity.`,
    `(Limboo!) Everyone play limbo. The first player to stumble must ${blank} after everyone is finished. Don't forget the music!`,
    `(Kitchen Master) Throw a small piece of food in the air and catch it using a spoon. ${blank} after you catch it without dropping the piece. Don’t say it’s the shaky hands again.`,
    `(Rock-Paper-Scissors) Play ‘Rock-Paper-Scissors’ with every player and ${blank} every time you get wrecked. —-----------`,
    `() Each player must pretend to slap you at one point during the game. ${blank} every time you flinch. _______`,
    `(Red Hands) Play “Red Hands” (the hand slapping game) with each player. Yours are always on top, unfortunately. ${blank} each time you get slapped or pull your hands away too early.`,
    `(Piggy Ride) Give a quick piggy back-ride to the player on your left and ${blank} as you carry them around. No bumps in your path, don’t worry.`,
    `(Heads or Tails) Get a coin and toss it. If it lands on heads ${blank} alone, if it lands on tails pick someone to do it with you. Feeling lucky today?`,
    `(Free Kick) Flick a small paper ball through a goalpost made by the player sitting across and ${blank} every time you miss. It’s football, not football.`,
    `(Jazzercise) ${blank} and do jumping jacks as if you’re leading an aerobics class. Don’t forget the hips.`,
    `(On the Mat) Exit the room and ${blank} behind the door. Hope no one locks you out.`,
    `(Tic-Tac-Toe) Play Tic-Tac-Toe with a player to your right and ${blank} if you end up in a tie or lose. Xs and Os don’t land on your nose.`,
    `(Broken Telephone) Whisper a two-sentance story to a player on your left and they must do the same until it comes back to you. ${blank} if the story changed.`,
  ];
  const randomWordIndex = Math.floor(Math.random() * martiniCards.length) + 0;
  const challenge = martiniCards[randomWordIndex];
  return challenge;
};
