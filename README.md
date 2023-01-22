# Javascript_SDE
JavaScript SDE cheat-sheets and small projects

## Array
```
let week = []; //Simplest

//Using constructor to declare an empty array
let week = new Array();  

//Creates an array of 7 length
let week = new Array(7); 

//fill with value
let arr = new Array(7).fill(1);

//Creates an array with three days
let week = new Array('Monday', 'Tuesday', 'Wednesday');

// get length
console.log(week.length);
```
- Adding element to array
```
let arr = [1, 2, 3, 4];

arr.push(5);
arr.push(6, 7);

// Adding using indexing
arr[arr.length] = 5;

//using unshift to add to the beginning
arr.unshift(0, 1);

// Adding element to a specific index
arr.splice(3, 0, 4);
arr.splice(idx, count, value); 
```
- Removing element from array
```
let arr = [1, 2, 3, 4, 5];
// remove from right
arr.pop();

//Remove from left
arr.shift()

// using splice and split
Array.splice(start, count)
Array.slice(start, end)

using delete will result a hole in the array
delete arr[index];
```
- sorting
```
let arr = [2, 5, 3, 7, 5];
arr.sort();// default in ascending
arr.sort((a,b) => b-a); //descending
```
- searching
```
let arr = [2, 5, 3, 7, 5];
arr.indexOf(2); // find the index of element
arr.includes(2); // returns true if it exists
```