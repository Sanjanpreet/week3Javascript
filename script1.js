const arr = [1, 2, 3, 4, 5];

// Reverse the array
arr.reverse(); // [5, 4, 3, 2, 1]

//  here we add 0 at the end of the array
arr.push(0);  // [5, 4, 3, 2, 1, 0]

// here we will add 6 to the start of the array which will be the at the 0 please 
arr.unshift(6); // [6, 5, 4, 3, 2, 1, 0]

console.log(arr);


// Challenge 2

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];


const arr3 = arr1.concat(arr2.slice(1));

console.log(arr3);