import randomNumber from '../randomNumber';

export const rules = 'Balance the given number.';

export const gamePlay = () => {
  const randomNum = randomNumber(10000, 100);
  const question = `Question: ${randomNum}`;

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

  const correctAnswer = balance(randomNum);
  return [question, correctAnswer];
};
