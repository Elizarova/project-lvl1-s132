import gameStart from '..';
import randomNumber from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (x, y) => {
  if (y === 0) {
    return x;
  }
  return gcd(y, x % y);
};

const gameData = () => {
  const a = randomNumber(100, 1);
  const b = randomNumber(100, 1);
  const question = `Question: ${a} ${b}`;
  const correctAnswer = gcd(a, b).toString();
  return [question, correctAnswer];
};

export default () => gameStart(gameData, description);
