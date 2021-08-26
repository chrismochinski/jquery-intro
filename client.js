console.log('1. (1 on js) script loaded - start');

let groceryList = ['cookies', 'milk', 'bacon', 'nectarines', 'kiwi'];
const pageTitle = '<u>Grocery List<u>';

$(document).ready(readyNow);

// jQuery can reference by element, class or ID
$('h1').text(pageTitle);

function readyNow() {
    console.log('3. (2 on js) jquery ready'); //technically DOM ready (document)
    // code that runs after the dom has loaded
    // jQuery can reference by element, class or ID
    $('h1').html(pageTitle);


    displayGroceryItems();
    console.log('displaying grocery list');
    clearGroceryItems();
    for (let item of groceryList) {
        $('#grocery-list').append(
            `<li class="grocery-item">
            ${item}
            </li>`);
    }
}

let isClear = false;
function clearGroceryItems() {
    iClear = true; //on clicking button, this is activated
    console.log('clear grocery list');
    $('#grocery-list').empty();
}


function displayGroceryItems() {
    console.log('4. (3 on js) display grocery list');
    $('.div-a').text('All the divs');
}


console.log('2. (4 on  js) script loaded - end');

// .text('replace existing text')
// .append('add something at end')
// .html('replace with HTML')
// .empty()  ...clear all things, everything that is child too
// $(selector).on('event', functionToCall);

//things that were from the readyNow function:
//   // these all do the same thing:
//   const unorderedList1 = $('ul'); //ALL unordered lists

//   unorderedList1.append(`<li>ADD A LIST ITEM</li>`)

//   const unorderedList2 = $('grocery-list'); //just grocery-list by ID
//   //"DOM Traversal" - says "go find the first LI and get the PARENT"
//   const unorderedList3 = $('#first-li').parent(); //...thus, it is now looking at the parent of li...I want to TRAVERSE the dom.. .parent() jumps UP the tree, or .child() jumps DOWN the tree