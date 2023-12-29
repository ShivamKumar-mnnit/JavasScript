//Arrays

console.log("Chapter4: Arrays");

//Array is collection of item - linear - indices start from 0
let heroes = ["ironman","thor","hulk","saktiman","spiderman","antman","marvel"];
console.log(heroes);
//array is object i.e. type of array is object
// array is mutable - values can be updated
//string is immutable - values not updated

//looping on array
for(let i of heroes){
    console.log(i.toUpperCase());
}

//array methods
// Push(); -- add item to end
// pop(); --delete item from end
// toString(); --convert array to string - return new string array remains constant

heroes.push("addedHero");
console.log(heroes);

//concat(); --join multiple arrays
//unshift(); --push item in start;
//shift();   --pop item in start;
//slice(startindex,endindex);   --to return a piece of array
//splice(startindex,noOfItemsToDelete,newElementsToBeAdded);  to delete or add elements from particular index
let arr=[1,2,3,4,5,6];
arr.splice(2,1,10,11,12);           
console.log(arr);           //(8) [1, 2, 10, 11, 12, 4, 5, 6]

