# Javascript_SDE
JavaScript SDE cheat-sheets and small projects

## Array
```
let week = []; //Simplest

//Using constructor to declare an empty array
let week = new Array();  

//Creates an array of 7 length
let week = new Array(7); 

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
arr.pop();
```