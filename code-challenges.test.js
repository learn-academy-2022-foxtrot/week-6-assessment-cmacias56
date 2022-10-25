// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// const { exportAllDeclaration } = require("@babel/types")
// const { it } = require("node:test")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
describe("sentenceArr", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    expect(sentencArr(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})
// ReferenceError: sentencArr is not defined
// Test Suites: 1 failed, 1 total
// Tests:       0 total
// Snapshots:   0 total

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.
/**
 * create function sentencArr
 * create variable 
 * iterate through each element of the object 
 * 
 */

const sentenceArr = (people) => {
  let newArr = people.map((val) => {
    const namesArr = val.name.split(" ");
    const names = namesArr
      .map((value) => {
        return (value = value.charAt(0).toUpperCase() + value.slice(1));
      })
      .join(" ");
    return `${names} is ${val.occupation}.`;
  });
  return newArr;
};


// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]
describe("div3", () => {
  it("returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    expect(div3(hodgepodge1)).toEqual([2, 0, -1, 0])
    expect(div3(hodgepodge2)).toEqual([2, 1, -1])
  })
})
//ReferenceError: div3 is not defined
  // Test Suites: 1 failed, 1 total
  // Tests:       1 failed, 1 total
  // Snapshots:   0 total
  // Time:        0.558 s

// b) Create the function that makes the test pass.
/** create a function called "div3"
 * i need to filter through the array 
 * I need to set the the filter to only remove numbers
 * return the numbers divided by 3
 * 
 * Psuedo coding the way I was told to. its different. i think i need more detail but not like i was before.
 */
 const div3 = (arr) =>
 arr.filter((val) => typeof val === "number").map((val) => val % 3);

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125
describe("cubedSum", () => {
  it("The function that takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    const cubeAndSum1 = [2, 3, 4];
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10];
    // Expected output: 1125
    expect(cubedSum(cubeAndSum1)).toEqual(99);
    expect(cubedSum(cubeAndSum2)).toEqual(1125);
  });
});

// ReferenceError: cubedSum is not defined

// b) Create the function that makes the test pass.
/**
 * create a function "cubedSum"
 * have function take in an array of numbers. To do that we need to iterate through the arrays
 * return the sum using method .reduce
 */

 const cubedSum = (arr) => arr.map((val) => val ** 3).reduce((b, a) => b + a);

//  Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total