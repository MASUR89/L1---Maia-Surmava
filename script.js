//1
let basketString = 'Apple, Banana, Grape, Mango, Orange';
let array = basketString.split(",").map(item => item.trim());
console.log('Array:', array );

//2
console.log('Length:', basketString.length);
console.log('High:', basketString.toUpperCase());
console.log('Low:', basketString.toLowerCase());

let string1 = basketString.replace('Banana' , 'Strawberry');
console.log('New string:' , string1);

if(basketString.startsWith('Apple')) console.log('List starts with "Apple"');
if(basketString.endsWith('Orange')) console.log('List ends with "Orange"');


let string2 = '';
for(let i=0; i<array.length; i++) {
    string2 += array[i];
    if(i<array.length - 1) {
        string2 += ' | '
    }
}
console.log(string2);

//3
array.push('Pineapple');
console.log('Added Pineapple',array);

array.pop();
console.log('Removed last', array);

array.unshift('Watermelon');
console.log('Added first',array);

array.shift();
console.log('Removed first' ,array);

//4
basketString.includes('Grape')
? console.log('Grape is available')
: console.log('Grape is not available');

let index = array.indexOf('Mango');
console.log('Index of Mango:', index);

let space = array.length > 5 ? 'The basket is full' : 'The basket has space';
console.log(space);

//5
let fruit = prompt('Please enter a fruit name:');
let index2 = array.indexOf(fruit);
if(index2 !== -1) {
    array.splice(index2, 1);
    console.log(fruit + ' was removed from the basket.');
} else {
    array.push(fruit);
    console.log(fruit + ' was added to the basket.');
}
console.log('Updated basket:', array);
console.log('Reverse:', array.reverse())



let result = "";

for (let repeat = 0; repeat < 2; repeat++) {
    for (let i = 0; i < array.length; i++) {
        result += array[i];
        if (!(repeat === 1 && i === array.length - 1)) {
            result += " | ";
        }
    }
}

console.log(result);