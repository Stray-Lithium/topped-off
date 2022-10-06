export const iceBlank = () => {
  const iceBlanks = [
    'Do 10 push-ups',
    'Kneel for 10 seconds',
    'Sniff both of your armpits',
    'Get kicked in the ass',
    'Swing your hips back and forth for 10 seconds',
    'Hug someone',
    'Jog for 20 seconds',
    'Move like Michael Jackson for 20 seconds',
    'Strike a funny pose',
    'Hop on a chair for 5 seconds',
    'Get squished by all other players for 10 seconds',
    'Balance a book on your head for 10 seconds',
    'Balance a book on your thumb for 10 seconds',
    "Use your nose to write down the alphabet on someone's belly",
    'Pretend to swim in a pool for 10 seconds',
    'Crawl for 10 seconds',
    'Clap for 10 seconds',
    'Jump for 10 seconds',
    'Get spanked',
    'Do 10 squats',
    'Try every drink on the table',
    'Dance for 20 seconds',
  ];
  const randomWordIndex = Math.floor(Math.random() * iceBlanks.length) + 0;
  const challenge = iceBlanks[randomWordIndex];
  return challenge;
};
