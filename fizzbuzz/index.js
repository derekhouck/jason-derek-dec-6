'use strict';

function fizzBuzz() {
  $('#number-chooser').on('submit', function() {
    event.preventDefault();
    console.log('Form submitted');
  });
}

$(fizzBuzz());