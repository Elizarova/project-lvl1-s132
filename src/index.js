import readlineSync from 'readline-sync';


const gameStart = (gameName, gameRules, gameRounds) => {
  console.log('Wlcome to the Brain Games! \n');
  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!\n`);
  const graz = `Congratulations, ${userName}!`;

  if (gameName === undefined) {
    return;
  }

  console.log(gameRules);


  const go = (func, count) => {
    if (count === 0) {
      return console.log(graz);
    }
    if (func(userName) === false) {
      return false;
    }
    return go(func, count - 1);
  };

  go(gameName, gameRounds);
};

export default gameStart;
