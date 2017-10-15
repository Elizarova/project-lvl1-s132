import readlineSync from 'readline-sync';

const gameStart = (gameData, rules) => {
  console.log('Wlcome to the Brain Games!');
  console.log(rules);
  console.log();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log();

  for (let i = 0; i < 3; i += 1) {
    const data = gameData();
    console.log(data[0]); // question screen

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
