import gameStart from '..';
import randomNumber from '../utils';

const description = 'Answer "yes" if number is prime otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return 'no';
  }

  let i = 2;
  while (i <= num / 2) {
    if (num % i === 0) {
      return 'no';
    }
    i += 1;
  }
  return 'yes';
};

const gameData = () => {
  const randomNum = randomNumber(100, 0);
  const question = (`Question: ${randomNum}`);

  const correctAnswer = isPrime(randomNum).toString();

  return [question, correctAnswer];
};

export default () => gameStart(gameData, description);
