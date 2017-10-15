import gameStart from '..';
import randomNumber from '../utils';

const description = 'Balance the given number.';

const balance = (n) => {
  const numberToArray = n.toString().split('').map(a => +a);

  const balanceArray = (array) => {
    const sorted = array.sort((a, b) => a - b);

    const last = (array[array.length - 1]);
    const first = (array[0]);
    if (last - first > 1) {
      const newArr = [sorted[0] + 1, ...sorted.slice(1, -1), sorted.slice(-1)[0] - 1];
      return balanceArray(newArr);
    }
    return sorted;
  };

  return balanceArray(numberToArray).join('');
};

const gameData = () => {
  const randomNum = randomNumber(10000, 100);
  const question = `Question: ${randomNum}`;
  const correctAnswer = balance(randomNum);
  return [question, correctAnswer];
};

export default () => gameStart(gameData, description);
