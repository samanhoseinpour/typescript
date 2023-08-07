const userName: string = 'saman';
console.log(typeof userName);

const myNumbers: number = 12;
console.log(typeof myNumbers);

const truthes: boolean[] = [true, false, false];
console.log(typeof truthes);

// Arrays
const names: string[] = ['saman', 'sajjad'];
console.log(typeof names);

// Classes
class Car {}
const bugatti: Car = new Car();
console.log(typeof bugatti);

// Object literals
const points: { x: number; y: string } = {
  x: 10,
  y: '20',
};

console.log(typeof points);

// Functions
const logUserOut: (userId: string) => boolean = (userId: string) => {
  return true;
};

// When should we use annotations ?
// 1) When the function returns any type: it means, it can't recognize the type of function or for example JSON.parse(), e.g -->
const json = '{"x": "10", "y": 20}';
const coordinates: { x: string; y: number } = JSON.parse(json);
console.log(typeof coordinates);

// 2) When we declare a variable and initialize it later
const words: string[] = ['a', 'b', 'c'];
let foundAWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i].includes('a')) {
    foundAWord = true;
    console.log(foundAWord);
  }
}

// 3) When variables whose can't be inffered correctly
const numbers = [-10, -2, 40];
let numbersAboveZero: number | boolean;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numbersAboveZero = numbers[i];
    console.log(numbersAboveZero);
  }
}
