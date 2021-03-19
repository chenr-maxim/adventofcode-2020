let sampleInput = [
  '1-3 a: abcde',
  '1-3 b: cdefg',
  '2-9 c: ccccccccc'
]

const fs = require('fs');
var input = fs.readFileSync('./day2.txt', 'utf-8').split('\n');

let validCount = 0;
let validCount2 = 0;

//takes in 4 parameters and checks if that char appears within min and max 
const helperFunction = (min, max, char, str) => {
  let charMap = new Map();
  for(let letter of str) {
    if(charMap.has(letter)) {
      charMap.set(letter, charMap.get(letter) + 1);
    } else {
      charMap.set(letter, 1);
    }
  }
  if(charMap.has(char)) {
    let appearances = charMap.get(char);
    if(min <= appearances && appearances <= max) {
      return true;
    }
  } else {
    return false;
  }
}

//helper function2 basically is part2 where we check the position of the 
//str and see if it fulfills the conditions that atleast one but not both contain that char
const helperFunction2 = (min, max, char, str) => {
  if(str[min - 1] == char && str[max - 1] == char) {
    return false;
  }
  else if(str[min - 1] == char || str[max - 1] == char) {
    return true;
  }
  return false;
}

//loop through each line of the input by string
//split the string based on spaces and get each variable such as to and from
//call the helper function to determine if valid or not valid (true of false)
for(const line of input) {
  const splitInput = line.split(/[ ]/);
  const toAndFrom = splitInput[0].split('-');
  const min = toAndFrom[0];
  const max = toAndFrom[1];
  const targetChar = splitInput[1][0];
  const str = splitInput[2];

  if(helperFunction(min, max, targetChar, str) == true) {
    validCount++;
  }
  
  if(helperFunction2(min, max, targetChar, str) == true) {
    validCount2++;
  }
}

console.log(validCount);
console.log(validCount2);
