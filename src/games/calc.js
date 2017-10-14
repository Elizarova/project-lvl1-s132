import readlineSync from 'readline-sync';

export const rules = 'What is the result of the expression? \n';

const randomNum = () => Math.floor(Math.random() * 10) + 1;


export const gamePlay = (userName) => {
  const a = randomNum();
  const b = randomNum();

  const operators = ['+', '-', '*'];
  const randomOperatorIndex = Math.floor(Math.random() * operators.length);
  const randomOperator = operators[randomOperatorIndex];

  const expression = `${a} ${randomOperator} ${b}`;
  const expressionResult = (op, x, y) => {
    if (op === '+') {
      return +x + +(y);
    } else if (op === '-') {
      return +x - +(y);
    }
    return +x * +(y);
  };

  console.log(`Question: ${expression}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = expressionResult(randomOperator, a, b);


  if (userAnswer !== correctAnswer.toString()) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.)`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  }
  console.log('Correct!');
  return true;
};
