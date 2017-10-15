import gameStart from '..';
import randomNumber from '../utils';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calc = (op, x, y) => {
  switch (op) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    default:
      return x * y;
  }
};

const gameData = () => {
  const a = randomNumber(10, 1);
  const b = randomNumber(10, 1);

  const randomOperatorIndex = randomNumber(operators.length, 0);
  const randomOperator = operators[randomOperatorIndex];

  const question = `Question: ${a} ${randomOperator} ${b}`;
  const correctAnswer = calc(randomOperator, a, b).toString();

  return [question, correctAnswer];
};

export default () => gameStart(gameData, description);
