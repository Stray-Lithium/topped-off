export const lemonadeCard = () => {
  const lemonadeCards = [
    {
      title: ``,
      content: `skip your next turn.`,
      comment: ``,
      timer: false,
    },
    {
      title: ``,
      content: `take off your socks.`,
      comment: ``,
      timer: false,
    },
    {
      title: ``,
      content: `Lose one piece of clothing.`,
      comment: ``,
      timer: false,
    },
    {
      title: ``,
      content: `choose your time to shout, "The ground is lava!!" (The last one touching the floor rolls the dice)`,
      comment: ``,
      timer: false,
    },
    {
      title: ``,
      content: `choose your time to ask someone, "what's the time right now?". If they tell you the time - they drink. If they respond by saying “Top off” - you drink.`,
      comment: ``,
      timer: false,
    },
    {
      title: ``,
      content: `make an origami airplane and throw it across the room. If it flies well and hits the wall on the other side - you're safe. If not - take a shot.`,
      comment: ``,
      timer: false,
    },
    {
      title: ``,
      content: `put your phone on the table screen up. The person whose phone lights up first drinks.`,
      comment: ``,
      timer: false,
    },
    {
      title: ``,
      content: `switch off your phone completely for the rest of the game.`,
      comment: ``,
      timer: false,
    },
    {
      title: ``,
      content: `do 20 squats right now.`,
      comment: ``,
      timer: false,
    },
    {
      title: ``,
      content: `tell everyone how much money you currently have in your bank account.`,
      comment: ``,
      timer: false,
    },
    {
      title: ``,
      content: `talk in a strange accent for the next 5 minutes.`,
      comment: ``,
      timer: false,
    },
    {
      title: ``,
      content: `let the player to your right look through your phone for 1 minute.`,
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
