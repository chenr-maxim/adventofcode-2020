const fs = require('fs');
const input = fs.readFileSync('day02.txt', {encoding: 'utf-8'}).split('\n'). filter(x=>x);

// console.log(input);

// let input = [ 
//   '1-3 a: abcde',
//   '1-3 b: cdefg',
//   '2-9 c: ccccccccc'
// ]

let valid = 0;
let validpt2 = 0;
// console.log(input.length);

for(let i = 0; i < input.length; i++) {
  var split = input[i].split(" ");

  const min = split[0].split("-")[0];
  const max = split[0].split("-")[1];
  const letter = split[1][0];
  const password = split[2];

  let count = 0;
  for(let j = 0; j < password.length; j++) {
    if( letter === password[j]) {
      count++;
    }
  }
  if( !(count < min || count > max)) {
    valid++;
  }

  console.log('password min');
  console.log(password[min-1]);
  console.log('password max');
  console.log(password[max-1]);

  // (a === a && c === a ) || ( a !== a && c !== a)
  if( (password[min-1] === letter && password[max-1] === letter) || (password[min-1] !== letter && password[max-1] !== letter)) {
    console.log('entered');
    continue;
  } else {
    validpt2++;
  }

}


// console.log(valid);
// console.log('part2');
console.log(validpt2);


