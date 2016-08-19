/*
=======================================================
** Week 2 - Project 1 **

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem.

=======================================================
*/


// 0. Connect the main.js document to the HTML page.
/*    Add to the bottom of the HTML page: <script src="main.js"></script>*/
document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");




// 1. Declare a variable whose value is an empty array.
//    Use any method you choose to add at least 4 items to it.

var array = [];
console.log(array);
array.push('Lee', 'Paul', 3, 5);
document.getElementById("q1").innerHTML = array;



// 2. Add an additional item to the beginning of your array.

var array = [];
array.push('Lee', 'Paul', 3, 5);
array.unshift('Kera');
document.getElementById("q2").innerHTML = array;



// 3. Remove the second and third items in your array.

var array = [];
array.push('Lee', 'Paul', 3, 5);
array.unshift('Kera');
array.splice(1, 2);
document.getElementById("q3").innerHTML = array;




// 4. Add two new items after the second item.

var array = [];
array.push('Lee', 'Paul', 3, 5);
array.unshift('Kera');
array.splice(1, 2);
array.splice(2, 0, 'Laura', 'Mark');
document.getElementById("q4").innerHTML = array;





// 5. Log to the console: 'The current length of the array is....' using the .length method

var array = [];
array.push('Lee', 'Paul', 3, 5);
array.unshift('Kera');
array.splice(1, 2);
array.splice(2, 0, 'laura', 'mark');
document.getElementById("q5").innerHTML = "The length of the array is " + array.length;





// Use the following Array for questions 6-9:
var things = ['mug', 'book', 'mouse', 'plant', 'sunglasses'];

// 6. Change 'mouse' to 'keyboard'

things[2] = 'keyboard';
document.getElementById("q6").innerHTML = things;



// 7. Combine all of the elements of the array into a string.
//    (Hint: check out the 'join' method.)

var thingsString = things.join();
document.getElementById("q7").innerHTML = thingsString;



// 8. Remove the first item.

var thingIDeleted = things.shift();
document.getElementById("q8a").innerHTML = "Deleted: " + thingIDeleted;
document.getElementById("q8b").innerHTML = "Things Array: " +things;





// 9. Remove all items from the things array.

// Option 1:
// things = [];

// Option: 2: 
// things.splice(0, 5);

// Option 3: 
things.splice(0, things.length);

document.getElementById("q9").innerHTML = things;







// Use the following array for question 10:
var people = ['Bill', 'Ted', 'Emily', 'Andrea', 'Doug'];

// 10. Arrange the items alphabetically. Store this Array as orderedPeople

var orderedPeople = people.sort();
document.getElementById("q10").innerHTML = orderedPeople;




// 11. Create an array of arrays with the following three arrays:
var array1 = ["Fido", "Spot", "Rex", "Sparky"]
var array2 = ["Bulldog", "Lab", "Dalmation", "Beagle"]
var array3 = ["White", "Black", "Spotted", "Tri-color"]

// Goal:
var array4 = [
                ["Fido", "Spot", "Rex", "Sparky"],
                ["Bulldog", "Lab", "Dalmation", "Beagle"],
                ["White", "Black", "Spotted", "Tri-color"]
              ]


// Option 1: 
var dawgs = [array1, array2, array3];

// Option 2: 
// dawgs.push(array1, array2, array3);

document.getElementById("q11").innerHTML = dawgs;


// 12. Remove "Sparky" and "White" from the above array of arrays.

// Option 1: 
// dawgs[0].splice(3, 1);
// dawgs[2].splice(0, 1);

// Option 2: 
dawgs[0].pop();
dawgs[2].shift();

document.getElementById("q12").innerHTML = dawgs;






// ADVANCED TRACK
// Use the following campingItems array for question 13
var campingItems = ['tent', 'hiking boots', 'picnic table', 'corn on the cob', 'cooler'];

// 13. Declare an array called lastItem using .pop() on the campingItems array.

var campingItems = ['tent', 'hiking boots', 'picnic table', 'corn on the cob', 'cooler'];

var lastItem = [campingItems.pop()];

document.getElementById("q13").innerHTML = lastItem;




// 14. Add two new items to lastItem, one at the beginning and one at the end.

lastItem.push("mini fridge");
lastItem.unshift("cast iron pan");

document.getElementById("q14").innerHTML = lastItem;


// 15. Add s'mores to the lastItem array.

// Option 1: 
lastItem.push("s'mores");

// Option 2: Notice the single quotes
//lastItem.push("s'mores"); 

document.getElementById("q15").innerHTML = lastItem;



// 16. Create a new Array called reversedItems.
//    The items should be the same as lastItem, only in reverse order.

var reversedItems = lastItem.reverse();
document.getElementById("q16").innerHTML = reversedItems;




// 17. Using the Arrays below, create a single Array
//     called numberPets whose value is [12, 5, 9, 27, 'fish', 'dog']
var firstArray = [12, 5, 9, 27];
var secondArray = ['fish', 'dog'];

var numberPets = firstArray.slice();
numberPets.push(secondArray[0], secondArray[1]);
document.getElementById("q17").innerHTML = numberPets;



// 18: Try to arrange the following items from smallest to largest:
var sortingNumbers = [2, 5, 98, 55, 77, 300];
// If it doesn't sort as expected, explain why.

document.getElementById("q18").innerHTML = sortingNumbers.sort();

/* Non-Technical Error: 
Technically, this sort works, but it doesn't sort the numbers the 
way we may wish since it only references the first value in each 
number (such as the number 3 in 300). 

It is important to recognize that the sort() function works
best for letters/words and there are better ways to sort numbers. 
*/

// Advanced Sample: Sorting with Functions: 


/* 
sortingNumbers.sort(function(a, b) {
  return a - b
});

console.log ("Sort using function:");
console.log (sortingNumbers); */


// You aren't expected to understand functions yet...
// this is just a preview. 




/* SANDBOX TRACK

Solving all of these problems is a great step in the right direction, 
but the next step is coming up with your own arrangements to solve 
new problems. Practice creating your own problems to solve and their solutions -
you can even challenge your classmates! 
 
Also, consider how you can add/remove CSS styles to create added presentation with the results. 

*/