import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Wlcome to the Brain Games! \n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
};


const isEven = n => n % 2 === 0;
const randomNum = () => Math.floor(Math.random() * 99) + 1;

export const brainEven = () => {
  console.log('Wlcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no". \n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const gameCount = 3;
  for (let i = 0; i < gameCount; i += 1) {
    const num = randomNum();

    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');

    const goodAnswer = (a) => {
      const ans = isEven(a) ? 'yes' : 'no';
      return ans;
    };
    if (answer !== goodAnswer(num)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${goodAnswer(num)}'.)`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default greeting;
