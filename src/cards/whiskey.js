export const whiskeyCard = (blank) => {
  const whiskeyCards = [
    `(Class Clown) ${blank} and make at least one player laugh. Easy, right?`,
    `(Poker Face) Keep a poker face and ${blank}. Let’s hope all the flies on the wall stay silent.`,
    `(Shit Show) ${blank} as if it’s a part of your stand-up because every player you crack up takes a drink. Hope no one’s filming.`,
    `(Flash Back) Get your hands tied up behind your back and ${blank}. Don’t act like it’s your first time.`,
    `(Sniper) Place a cup at the opposite end of the table and try to throw a small item into it. ${blank} after each shot until you make it. Thought those ‘Beer Pong’ nights won’t ever pay off?`,
    `(Chicken Legs) Crouch-walk around the room and ${blank} in each corner. For all the leg days you skipped.`,
    `(Ready Steady) Keep one leg off the ground and ${blank}.  There’s no way you took too much to mess this up.`,
    `(Patriot) ${blank} and sing your National anthem as loud as you can. You know the words right?`,
    `(Soaked) ${blank} and take a shot/sip of your drink. Stay hydrated.`,
    `(Minute of Silence) ${blank} and do a 360° without making a sound. Keep it down.`,
    `(Snack Time) ${blank} and try to land a piece of food in your mouth as the player across throws it. Just without making a total mess around, right?`,
    `(Elevator Pitch) Convince other players to buy “Topped Off” and ${blank} as you’re doing so. Make a demo they won’t forget.`,
    `(Macarena) Do the macarena until the song ends and ${blank} after every “Ayyyy Macarena!”. You love this song, don’t you?`,
    `(Bar Special) Choose a player to make you a funky cocktail. ${blank} as you're drinking it. Bottoms up!`,
    `(Back to School) Give every player a nickname. ${blank} after you drop one. Go easy on them ok?`,
    `(Stuntman) Do a cartwheel and ${blank} as soon as you land. No one’s a natural.`,
    `(Shot in the dark) Close your eyes and describe everyone’s eye color. ${blank} each time you get it wrong. Trust your gut… or memory.`,
    `(Thumb War) Challenge each player to a thumb war and ${blank} each time you lose. One thumb to rule them all.`,
    `(Plot Twist) Choose a topic and let the group build a sentence word by word. ${blank} and repeat the exact sentence. Shoot your shot or take a shot.`,
    `(Flip Off/Front Flip/Hardflip) Flip a spoon into a glass and ${blank} everytime you miss. Little spoon or big spoon, doesn’t matter this time.`,
    `Moonwalk around the table and ${blank}`,
  ];
  const randomWordIndex = Math.floor(Math.random() * whiskeyCards.length) + 0;
  const challenge = whiskeyCards[randomWordIndex];
  return challenge;
};
