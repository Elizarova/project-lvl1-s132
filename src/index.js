import readlineSync from 'readline-sync';

const gameStart = (gameName, rules, rounds) => {
  console.log('Wlcome to the Brain Games! \n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  if (gameName === undefined) {
    return;
  }

  console.log(rules, '\n'); // rules

  for (let i = 0; i < rounds; i += 1) {
    const gameData = gameName();
    console.log(gameData[0]); // question screen

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = gameData[1];

    if (userAnswer !== correctAnswer.toString()) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.)`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameStart;
