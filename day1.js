const sampleInput = [
  1721,
  979,
  366,
  299,
  675,
  1456,
]

const fs = require('fs');
const input = fs.readFileSync('day1.txt', {encoding: 'utf-8'}).split('\n').filter(x => x).map(x => parseInt(x));

//part 1

const set2020 = new Set();
const twoSum = [];
//we loop through each line of the input and store the year into a set
//we then check if the set already has the number we are looking for by subtracting and checking 2020 - year
//once we find the two numbers that equal 2020 we push it to an array and multiply to find the answer
for(const year of input) {
  if(set2020.has(2020 - year)) {
    twoSum.push(year, (2020 - year));
  } else {
    set2020.add(year);
  }
}

console.log(twoSum);
console.log(twoSum[0] * twoSum[1]);

//part 2
//for the 2nd approach, we reach the classic 3sum algorithm question where we need to first sort the input 
//and then taking in one number we loop through the rest of the input with two pointers
//since we know all the inputs are unique we can return the first sum that equals 2020

input.sort(function(a,b) {return a - b});
const threeSum = [];

for(let i = 0; i < input.length - 2; i++) {
  let j = i + 1;
  let k = input.length - 1;
  if(i > 0 && input[i] === input[i-1]) continue
  while(j < k) {
    let sum = input[i] + input[j] + input[k];
    console.log(input[i], input[j], input[k]);
    if(sum === 2020) {
      threeSum.push(input[i], input[j], input[k]);
      break;
    } else if (sum < 2020) {
      j++;
    } else {
      k--;
    }
  }
}

console.log(threeSum);
console.log(threeSum[0] * threeSum[1] * threeSum[2]);