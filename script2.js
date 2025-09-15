// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const filtered = numbers.filter(numbers => numbers >= 7);
// console.log(numbers)

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

const squares = numbers.map(num => num * num);
console.log(squares);

const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

