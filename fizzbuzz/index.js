'use strict';

function fizzBuzz(num) {
  if (num % 15 === 0) {
    return 'fizzbuzz';
  }
  if (num % 5 === 0) {
    return 'buzz';
  }
  if (num % 3 === 0) {
    return 'fizz';
  }
  return num;
}

function makeArr(num) {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  return arr;
}

function fizzArr(arr) {
  return arr.map(num => fizzBuzz(num));
}

function main() {
  $('#number-chooser').on('submit', function() {
    event.preventDefault();
    console.log('Form submitted');
  });

  makeArr(15);

  console.log(fizzArr([1, 2, 3, 4, 5]));
}

$(main());