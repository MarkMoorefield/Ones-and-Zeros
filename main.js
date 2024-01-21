// Created a variable called binaryArrayToNumber (the goal of the problem).
// made it an arrow function with the perameter of arr.
// then I made the function return parseInt (which turns a string into a integer).
// then I made it join the array together. 

const binaryArrayToNumber = arr => {
    return parseInt(arr.join(""), 2)
};