import readlineSync from 'readline-sync';

export const rules = 'Answer "yes" if number even otherwise answer "no". \n';

const isEven = n => n % 2 === 0;
const randomNum = () => Math.floor(Math.random() * 99) + 1;

export const gamePlay = (userName) => {
  const question = randomNum();

  const correctAnswer = (a) => {
    const ans = isEven(a) ? 'yes' : 'no';
    return ans;
  };

  console.log(`Question: ${question}`);

  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer !== correctAnswer(question)) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer(question)}'.)`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  }
  console.log('Correct!');
  return true;
};