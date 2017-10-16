import gameStart from '..';
import randomNumber from '../utils';

const description = 'Answer "yes" if number is prime otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  let i = 2;
  while (i <= num / 2) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

const gameData = () => {
  const randomNum = randomNumber(100, 0);
  const question = `Question: ${randomNum}`;

  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => gameStart(gameData, description);
