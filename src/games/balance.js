import readlineSync from 'readline-sync';
import randomNumber from '../randomNumber';

export const rules = 'Balance the given number. \n';

export const gamePlay = (userName) => {
  const question = randomNumber(10000, 100);
  console.log(`Question: ${question}`);

  const balance = (n) => {
    const numberToArray = n.toString().split('').map(a => +a);

    const go = (list) => {
      list.sort((a, b) => a - b);
      const last = (list[list.length - 1]);
      const first = (list[0]);
      return (last - first > 1) ? (
        list.splice(0, 1, list[0] + 1),
        list.splice(list.length - 1, 1, list[list.length - 1] - 1),
        go(list)) : list;
    };

    return go(numberToArray).join('');
  };

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = balance(question);
  console.log(correctAnswer);

  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.)`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  }
  console.log('Correct!');
  return true;
};
