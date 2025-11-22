// Author: Connor Wilkins
// Version: 1.0.0
// Date: 2025-11-21
// Fileoverview: This program will take the users 
// input and read the number in cents


// variables
let centasstring: string;
let centasnum: number;

//getting the input
centasstring = prompt("Input the number of cents please:") || "no number entered!";

centasnum = parseInt(centasstring)


//calculating the dollars and cents using integer arithmeitc
const dollars: number = Math.floor(centasnum / 100);
const remaningcents: number = centasnum % 100;

//displaying the results
console.log("The cents you inputted were", centasnum)
console.log("That is", dollars, "dollars and", remaningcents, "cents.");