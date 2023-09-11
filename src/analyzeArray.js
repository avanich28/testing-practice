export function analyzeArray(arr) {
  const regEx = /[^0-9]/g;
  if (arr.some((el) => regEx.test(el))) return "Invalid Input";

  const average = arr.reduce((acc, cur) => acc + +cur, 0) / arr.length;

  const sort = arr.sort((a, b) => +a - +b);
  const min = +sort[0];
  const max = +sort.at(-1);

  return { average, min, max, length: arr.length };
}
