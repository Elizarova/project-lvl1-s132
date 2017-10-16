import readlineSync from 'readline-sync';

const gameRounds = 3;

const gameStart = (gameData, rules) => {
  console.log('Wlcome to the Brain Games!');
  console.log(rules);
  console.log();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log();

  for (let i = 0; i < gameRounds; i += 1) {
    const data = gameData();

    const question = `Question: ${data[0]}`;
    console.log(question);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = data[1];

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.)`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameStart;
