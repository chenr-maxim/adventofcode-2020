const fs = require('fs');
const { maxHeaderSize } = require('http');
const input = fs.readFileSync('day06.txt', {encoding: 'utf-8'}).split('\n\n').filter(x => x);


//count the number of unique yes answers per group and sum that total together
let count = 0;
let part2 = 0;


for ( const group of input ) {
  const unique = new Set([...group.replace(/\n/g, '')]);
  count += unique.size;

  console.log('unique');
  console.log(unique);

  part2 += [...unique].filter(char => group.split('\n').filter(x => x).every(form => {form.includes(char); console.log(form)})).length;
}

console.log(count);
console.log(part2);