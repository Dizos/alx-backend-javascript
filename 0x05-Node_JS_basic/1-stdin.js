const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to ALX, what is your name?');

let nameGiven = false;

rl.on('line', (line) => {
  if (!nameGiven) {
    console.log(`Your name is: ${line}`);
    nameGiven = true;
  }
});

rl.on('close', () => {
  console.log('This important software is now closing');
});
