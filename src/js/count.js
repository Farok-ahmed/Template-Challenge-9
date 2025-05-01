function countNumber(numbers, find) {
  let count = 0;
  for (const number of numbers) {
    if (numbers.includes(find) == true) {
      //   duplicate.push(number);
      count++;
    }
  }
  console.log(count);
}
const numbers = [5, 6, 11, 12, 98, 5];
countNumber(numbers, 5);
