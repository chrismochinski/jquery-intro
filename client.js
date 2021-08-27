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
    $('#clear-button').on('click', clearGroceryItems);
    $('#add-button').on('click', addGroceryItem);
    displayGroceryItems();
    console.log($(this));  //this is the document
//WHAT IS THIS?!?!?
$(this);


    ///IMPORTANT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! :::
    // $('.complete-button').on('click', markComplete);  THIS IS THE OLD VERSION
    $('#grocery-list').on('click', '.complete-button', markComplete); //barget is complete-button, listens for click, runs markComplete
}   // the purpose is picking ONE thing to click and not all the stuff in the list. Specifically the button (by class)



function markComplete() {
    console.log('in markComplete function');
    console.log($(this));    // this is the complete-button
    let listItem = $(this).parent(); // assign parent - in this case the li - to 'this'...the button
    listItem.css('background-color', 'tomato'); //ADD CSS!!!!!!

    //listItem.addClass('completed-list-item') //adds CSS class by name
    //listItem.removeClass('.className');
    //listItem.toggleClass('className');
    // $(this).parent().toggleClass('className');

    $(this).remove(); //remove the button - not necessary since it's a child
}


function displayGroceryItems(){
    console.log('displaying grocery list');
    clearGroceryItems();
    for (let item of groceryList) {
        $('#grocery-list').append(`<li>${item} <button class="complete-button">Mark Complete</button></li>`);
    }
}

function addGroceryItem(){ //appends item DIRECTLY to dom in ul/li // same as the ('#add-button) - references by ID
    console.log('add grocery item to groceryList array')
    let newItem = $('#add-item');
    console.log(`item to add: ${newItem.val()}`);
    $('#grocery-list').append(`<li>${newItem.val()} <button class="complete-button">Mark Complete</button> </li>`);
    $('#add-item').val('');
    console.log($(this));          //this is the add-button
    
    ////////////


    // groceryList.push(newItem.val());
    // newItem.val('');
    

    // .val();
}

let isClear = false;
function clearGroceryItems() {
    isClear = true; //on clicking button, this is activated
    console.log('clear grocery list');
    $('#grocery-list').empty();
    console.log($(this));
}


// function displayGroceryItems() {
//     console.log('4. (3 on js) display grocery list');
//     $('.div-a').text('All the divs');
// }


console.log('2. (4 on  js) script loaded - end');

// .text('replace existing text')
// .append('add something at end')
// .html('replace with HTML')
// .empty()  ...clear all things, everything that is child too
// .val() ...setting value (value is an attribute of the input field)
// $(selector).on('event', functionToCall);

//things that were from the readyNow function:
//   // these all do the same thing:
//   const unorderedList1 = $('ul'); //ALL unordered lists

//   unorderedList1.append(`<li>ADD A LIST ITEM</li>`)

//   const unorderedList2 = $('grocery-list'); //just grocery-list by ID
//   //"DOM Traversal" - says "go find the first LI and get the PARENT"
//   const unorderedList3 = $('#first-li').parent(); //...thus, it is now looking at the parent of li...I want to TRAVERSE the dom.. .parent() jumps UP the tree, or .child() jumps DOWN the tree

 // $(selector).on(even, filter, function to call);