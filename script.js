let myString = 'Apple, Banana, Grape, Mango, Orange. '

console.log(myString);
console.log('The string contains', myString.length, 'symbols');
console.log('Let us increase the letters:', myString.toLocaleUpperCase());
console.log('Let us decrease the letters:', myString.toLocaleLowerCase());

let array = myString.split(",");
console.log('Array:', array );

let newString1 = myString.replace('Banana' , 'Strawberry');
console.log('New string:' , newString1);

newString1.includes('Grape')
    ? console.log('Grape is in the list')
    : console.log('Grape is not in the list')

let doubleString = myString.repeat(2);
console.log(doubleString);