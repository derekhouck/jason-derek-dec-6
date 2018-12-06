'use strict';



function addItem(item) {
  const listElement = `
    <li>
      <span class="shopping-item">${item}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>
    `;
  return listElement;
}

function submitItem() {
  event.preventDefault();
  const item = $('.js-shopping-list-entry').val();
  $('.shopping-list').prepend(addItem(item));
}

function main() {
  //listen for add item button
  $('.js-shopping-list-entry').keydown(function(e) {
    if (e.which === 13) {
      submitItem();
      return false;
    }
  });
  $('#js-shopping-list-form').submit(submitItem);

    
}
$(main());