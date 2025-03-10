/*const colors = ["red", "orange", "yellow"];

// Arrays are indexed like strings:
console.log( colors[0]); // "red"

// They have a length:
console.log(colors.length); //3

// Important array methods:
//push(value) - adds value to the END of an array
//pop() - removes and returns last value in array
const movieLine = ['tom','nancy','pablo','oliver','eva'];
console.log(movieLine);
//shift() - removes and returns first element in an array
console.log(movieLine.shift());
console.log(movieLine);

let nextPatron = movieLine.shift();
console.log(movieLine);

movieLine.push('colt');

console.log(movieLine.shift());
console.log(movieLine.shift());
console.log(movieLine.shift());
console.log(movieLine.shift());
console.log(movieLine.shift());

//unshift(val) - adds value to START of an array
movieLine.push('jerry','deniz','kevin','carly');
console.log(movieLine);
movieLine.unshift('VIP');
console.log(movieLine);
console.log(movieLine.shift());*/

// let cats = ['blue', 'kitty'];
// let dog = ['rusty','wyatt'];
// console.log(cats.concat(dog));
// console.log(cats);
// let comboParty = dog.concat(cats);
// console.log(comboParty);
//
// console.log(cats.includes('blue'));
// console.log(cats.includes('Blue'));
//
// console.log("Blue".indexOf('B'));
// console.log("Blue".indexOf('e'));
// console.log("Blue".indexOf('0'));
//
// console.log(comboParty.indexOf('rusty'));
// console.log(comboParty.indexOf('kitty'));
// console.log(comboParty.indexOf('ADIDUAS'));
//
// console.log(comboParty.reverse());
// console.log(comboParty);
// comboParty.push('blue');
// console.log(comboParty);
// console.log(comboParty.indexOf('blue'));
//
//
// let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// console.log(colors.slice());
// let coolColors = colors.slice(3);
// console.log(coolColors);
// console.log(colors.slice(2,4));
// let warmColors = colors.slice(0,3);
// console.log(warmColors);
// console.log(colors);
// console.log(colors.slice(-3));
// console.log(colors.splice(5,1));
// console.log(colors);
// let days = ['Monday','Tuesday','Wednesday'];
// console.log(days.splice(1,2));
// console.log(days);
// console.log(colors);
// console.log(colors.splice(1,0,'red-orange'));
// console.log(colors);
// console.log(colors.splice(3,0,'yellow-green','forestgreen'));
// console.log(colors);
// console.log(colors.splice(2,2,'DELETE!!'));
// console.log(colors);
//
// let scores = [1,70,100,2500,9, -12,0,34];
// console.log(scores.sort());
//
// let luckNum = 87;
// let luckNums = [2,345,23];
// console.log([1,2,3] === [1,2,3]);
// let nums = [1,2,3]
// let numsCopy = nums;
// console.log(numsCopy);
// nums.push(4)
// console.log(nums);
// console.log(numsCopy);
// numsCopy.pop();
// console.log(nums);
// console.log(numsCopy);
// console.log(nums === numsCopy);
//
//
//
const PI = 3.14159;

// PI += 1;

const nums = [1, 2, 3];
nums.push(4);
console.log(nums);

const gameBoard = [
    ['X','O','X'],
    ['O',null,'X'],
    ['O','O','X']
]
console.log(gameBoard);
console.log(gameBoard[1]);
console.log(gameBoard[1][1]);
console.log(gameBoard[1][2]);
