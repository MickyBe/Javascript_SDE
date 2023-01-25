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
## Objects (dictionaries)
```
//declaring and accessing variables
let obj = new Object();
let obj = {
   "name": 'Prashant',
   age: 24
};
obj.val = 4
obj['var'] = 4
```
- deep and shallow copy
```
let obj = {
   name: "Prashant",
   age: 24,
   details: {
     gender: "Male"
   }
};

//shallow copy
let copy = Object.assign({}, obj);

//deep copy
let copy = JSON.parse(JSON.stringify(obj));
delete obj.name

//check if property exist
obj.hasOwnProperty("name")
//checks in the prototype chain to
"name" in obj

// returns list of keys
Object.keys(obj)
```
## String
```
let a = String(25)
let a = "25"

let str1 = new String(25);// is object
let str2 = String(25);//returns primitive string
```
