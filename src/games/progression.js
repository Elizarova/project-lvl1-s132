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
  const randomPIndex = randomNumber(maxQuestNumbers, 0);

  const numbers = progression(firstNum, step);
  numbers.splice(randomPIndex, 1, '..');

  const questionString = numbers.join(' ');
  const question = `Question: ${questionString}`;
  const correctAnswer = progression(firstNum, step)[randomPIndex].toString();

  return [question, correctAnswer];
};

export default () => gameStart(gameData, description);
