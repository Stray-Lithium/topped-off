export const oliveBlank = () => {
  const oliveBlanks = [
    { content: `Roast other players for 30 seconds`, timer: 30 },
    { content: `Curse every 3 seconds`, timer: 3 },
    { content: `Offer everyone shots for 10 seconds`, timer: 10 },
    {
      content: `Try selling your clothes to other players for 10 seconds`,
      timer: 10,
    },
    { content: `Giggle for 5 seconds`, timer: 5 },
    { content: `Whistle for 10 seconds`, timer: 10 },
    { content: `Whisper for 10 seconds`, timer: 10 },
    { content: `Moan for 10 seconds`, timer: 10 },
    { content: `Sing for 30 seconds`, timer: 30 },
    { content: `Rap for 30 seconds`, timer: 30 },
    { content: `Scream for 5 seconds`, timer: 5 },
    { content: `Improvise a presentation for 1 minute`, timer: 60 },
    { content: `Get roasted for 1 minute`, timer: 60 },
    { content: `Make fart sounds for 10 seconds`, timer: 10 },
    { content: `Make chicken sounds for 10 seconds`, timer: 10 },
    { content: `Bark like a dog for 10 seconds`, timer: 10 },
    { content: `Yell at everyone for 10 seconds`, timer: 10 },
    { content: `Meow like a cat for 10 seconds`, timer: 10 },
    {
      content: `Stick your tongue out and breathe like a dog for 10 seconds`,
      timer: 10,
    },
  ];
  const randomWordIndex = Math.floor(Math.random() * oliveBlanks.length) + 0;
  const challenge = oliveBlanks[randomWordIndex];
  return challenge;
};

// 'Roast other players for 30 seconds',
//     'Curse every 3 seconds',
//     'Offer everyone shots for 10 seconds',
//     'Try selling your clothes to other players for 10 seconds',
//     'Giggle for 5 seconds',
//     'Whistle for 10 seconds',
//     'Whisper for 10 seconds',
//     'Moan for 10 seconds',
//     'Sing for 30 seconds',
//     'Rap for 30 seconds',
//     'Scream for 5 seconds',
//     'Improvise a presentation for 1 minute',
//     'Get roasted for 1 minute',
//     'Make fart sounds for 10 seconds',
//     'Make chicken sounds for 10 seconds',
//     'Bark like a dog for 10 seconds',
//     'Yell at everyone for 10 seconds',
//     'Meow like a cat for 10 seconds',
//     'Stick your tongue out and breathe like a dog for 10 seconds',
