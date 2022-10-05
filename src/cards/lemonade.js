export const lemonadeCard = (blank) => {
  const lemonadeCards = [
    `Skip your next turn ${blank}.`,
    `${blank} take off your socks.`,
    `Lose one piece of clothing ${blank}. (Extension pack promotion)`,
    `${blank} choose your time to shout, "The ground is lava!!" (The last one touching the floor rolls the dice)`,
    `${blank} choose your time to ask someone, "what's the time right now?". If they tell you the time - they drink. If they respond by saying “Top off” - you drink.`,
    `${blank} make an origami airplane and throw it across the room. If it flies well and hits the wall on the other side - you're safe. If not - take a shot.`,
    `${blank} put your phone on the table screen up. The person whose phone lights up first drinks.`,
    `${blank} switch off your phone completely for the rest of the game.`,
    `${blank} do 20 squats right now.`,
    `${blank} tell everyone how much money you currently have in your bank account.`,
    `${blank} talk in a strange accent for the next 5 minutes.`,
    `${blank} let the player to your right look through your phone for 1 minute.`,
  ];
  const randomWordIndex = Math.floor(Math.random() * lemonadeCards.length) + 0;
  const word = lemonadeCards[randomWordIndex];
  return word;
};
