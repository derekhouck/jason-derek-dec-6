'use strict';



function addItem(item) {
    console.log(item);
}

function main() {

//listen for add item button
$('.js-shopping-list-form').on('submit', function(event) {
    event.preventDefault();
    console.log("hello, are we on?");
    addItem('fruits');
});
    
}
$(main());