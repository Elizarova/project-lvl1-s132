import randomNumber from '../randomNumber';

export const rules = 'Find the greatest common divisor of given numbers.';

export const gamePlay = () => {
  const a = randomNumber(100, 1);
  const b = randomNumber(100, 1);
  const question = `Question: ${a} ${b}`;

  const gcd = (x, y) => {
    if (y === 0) {
      return x;
    }
    return gcd(y, x % y);
  };
  const correctAnswer = gcd(a, b);

  return [question, correctAnswer];
};
