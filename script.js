// let myString = 'Apple, Banana, Grape, Mango, Orange. '

// console.log(myString);
// console.log('The string contains', myString.length, 'symbols');
// console.log('Let us increase the letters:', myString.toLocaleUpperCase());
// console.log('Let us decrease the letters:', myString.toLocaleLowerCase());

// let array = myString.split(",");
// console.log('Array:', array );

// let newString1 = myString.replace('Banana' , 'Strawberry');
// console.log('New string:' , newString1);

// newString1.includes('Grape')
//     ? console.log('Grape is in the list')
//     : console.log('Grape is not in the list')

// let doubleString = myString.repeat(2);
// console.log(doubleString);

//----------10.09.25-----------//
// for (let i = 5; i < 20; i++) {
//     console.log(i);
// }

// for(let i = 100; i > 5; i--) {
//     console.log(i);
// }


// let count = 0;
// do {
//     console.log(count);
//     count++;
// } while (count < 10);

// let mySplit = 're:educate'
// console.log(mySplit.split(':'));

// let myNumber = 1545;
// let result = myNumber >= 0 ? "Positive" : 'Negative';
// console.log(result);


// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log("Sum =", sum);

let toDoList = [ ];
toDoList.push('Learn JavaScript');
toDoList.push('Learn React');
toDoList.push('Build a project');
console.log(toDoList);
toDoList.unshift('Urgent task');
toDoList.pop();
console.log(toDoList);
