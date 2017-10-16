import gameStart from '..';
import randomNumber from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (n) => {
  const ans = (n % 2 === 0) ? 'yes' : 'no';
  return ans;
};

const gameData = () => {
  const randomNum = randomNumber(100, 1);
  const question = `${randomNum}`;

  const correctAnswer = isEven(randomNum);

  return [question, correctAnswer];
};

export default () => gameStart(gameData, description);
