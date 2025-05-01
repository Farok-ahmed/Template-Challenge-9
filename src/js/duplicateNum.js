function duplicate(numbers) {
  let unique = [];
  for (const number of numbers) {
    if (unique.includes(number) !== true) {
      unique.push(number);
    }
  }
  console.log(unique);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 7, 4, 22, 45, 22, 5, 1, 2, 5, 6, 9];
duplicate(arr);
