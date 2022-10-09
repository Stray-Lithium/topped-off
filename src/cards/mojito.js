export const mojitoCard = () => {
  const mojitoCards = [
    `Spin the arrow and take a shot with a person that it ends up pointing at.`,
    `Take a shot.`,
    `Ask a person to your left "When is my birthday?". If they get it right - you drink, if they get it wrong - they drink.`,
    `Hide and Seeeek! Cover your eyes and ears. Everyone else: hide! The first one found - take 2 shots, the second one found - take 1 shot.`,
    `Swap a piece of clothing with a player to your right.`,
    `Swap a piece of clothing with a player to your left.`,
    `Do a handstand.`,
    `Rank every player from your most favourite to the least favourite.`,
    `Rank every player from the prettiest to the least pretty.`,
    `Admit one thing you don't like about each player.`,
    `Tell everyone 3 things you don't like about yourself.`,
    `Pick a player to swap your next dare with at some point during the game.`,
    `Give a high-five to every player that makes you smile until your next turn.`,
    `Trust one other player to spin around 10 times and then throw your phone at them to catch.`,
    `Spin the arrow. The player that it lands on has to pick one thing from the freezer. Hold that in your mouth for 5 minutes.`,
    `Do 10 push-ups and let other players put one random item on your back. (Drink if you drop it).`,
    `Pick one player and pour a random shot of alcohol into their drink without them noticing, you have 15 minutes. (Finish that drink if the player notices).`,
    `Make other players laugh. If at least one player cracks a smile - they all drink, if not - you drink. (You have 2 minutes).`,
    `Tell two truths and a lie. Others make a collective guess which statement was a lie.`,
    `Everyone must make you laugh in 1 minute. They all drink if they fail or you drink if you don’t crack up.`,
  ];
  const randomWordIndex = Math.floor(Math.random() * mojitoCards.length) + 0;
  const challenge = mojitoCards[randomWordIndex];
  return challenge;
};