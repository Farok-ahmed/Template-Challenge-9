function avgOdd(numbers) {
  let odds = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      odds.push(number);
    }
  }
  let sum = 0;
  for (const odd of odds) {
    sum += odd;
  }
  let count = numbers.length;
  const avg = sum / count;
  console.log("Avg of odd is = ", parseInt(avg));
}
const arr = [22, 11, 42, 32, 4, 5, 6, 7, 8];
avgOdd(arr);
