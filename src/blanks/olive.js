export const oliveBlank = () => {
  const oliveBlanks = [
    'Roast other players for 30 seconds',
    'Curse every 3 seconds',
    'Offer everyone shots for 10 seconds',
    'Try selling your clothes to other players for 10 seconds',
    'Giggle for 5 seconds',
    'Whistle for 10 seconds',
    'Whisper for 10 seconds',
    'Moan for 10 seconds',
    'Sing for 30 seconds',
    'Rap for 30 seconds',
    'Scream for 5 seconds',
    'Improvise a presentation for 1 minute',
    'Get roasted for 1 minute',
    'Make fart sounds for 10 seconds',
    'Make chicken sounds for 10 seconds',
    'Bark like a dog for 10 seconds',
    'Yell at everyone for 10 seconds',
    'Meow like a cat for 10 seconds',
    'Stick your tongue out and breathe like a dog for 10 seconds',
  ];
  const randomWordIndex = Math.floor(Math.random() * oliveBlanks.length) + 0;
  const challenge = oliveBlanks[randomWordIndex];
  return challenge;
};