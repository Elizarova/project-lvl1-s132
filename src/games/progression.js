import gameStart from '..';
import randomNumber from '../utils';

const description = 'What number is missing in this progression?';

const maxQuestNumbers = 10;

const progression = (first, step) => {
  let result = first;
  const progressionArray = [];
  while (progressionArray.length < maxQuestNumbers) {
    progressionArray.push(result);
    result += step;
  }
  return progressionArray;
};

const gameData = () => {
  const firstNum = randomNumber(10, 0);
  const step = randomNumber(5, 1);
  const randomIndex = randomNumber(maxQuestNumbers, 0);

  const numbers = progression(firstNum, step);
  numbers.splice(randomIndex, 1, '..');

  const question = `${numbers.join(' ')}`;
  const correctAnswer = progression(firstNum, step)[randomIndex].toString();

  return [question, correctAnswer];
};

export default () => gameStart(gameData, description);
