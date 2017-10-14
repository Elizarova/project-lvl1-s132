import readlineSync from 'readline-sync';

export const rules = 'Find the greatest common divisor of given numbers. \n';

const randomNum = () => Math.floor(Math.random() * 99) + 1;

export const gamePlay = (userName) => {
  const a = randomNum();
  const b = randomNum();
  console.log(`Question: ${a} ${b}`);

  const gcd = (x, y) => {
    if (y === 0) {
      return x;
    }
    return gcd(y, x % y);
  };

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = gcd(a, b);
  console.log(correctAnswer);

  if (userAnswer !== correctAnswer.toString()) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.)`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  }
  console.log('Correct!');
  return true;
};
