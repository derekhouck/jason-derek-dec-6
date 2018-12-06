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
  return arr.map(num => {
    let fizzNum = fizzBuzz(num);
    let extraClass = '';
    console.log(typeof(fizzNum));
    if (typeof(fizzNum) === 'string') {
      extraClass = fizzNum;
    }
    return `<div class="fizz-buzz-item ${extraClass}"><span>${fizzBuzz(fizzNum)}</span></div>`;
});
}

function main() {
  $('#number-chooser').on('submit', function() {
    event.preventDefault();
    let theEndNum = $('#number-choice').val();
    let theNumList = makeArr(theEndNum);
    let theFizzList = fizzArr(theNumList);
    $('.js-results').html(theFizzList);
  });
}

$(main());