import randomNumber from '../randomNumber';

export const rules = 'What is the result of the expression?';

export const gamePlay = () => {
  const a = randomNumber(10, 1);
  const b = randomNumber(10, 1);

  const operators = ['+', '-', '*'];
  const randomOperatorIndex = Math.floor(Math.random() * operators.length);
  const randomOperator = operators[randomOperatorIndex];

  const question = `Question: ${a} ${randomOperator} ${b}`;

  const expressionResult = (op, x, y) => {
    if (op === '+') {
      return +x + +(y);
    } else if (op === '-') {
      return +x - +(y);
    }
    return +x * +(y);
  };
  const correctAnswer = expressionResult(randomOperator, a, b);

  return [question, correctAnswer];
};
