/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
GOOD LUCK 😀
*/

// Mark's and John's mass and height in variables
const massMark1 = 78;
const massJohn1 = 92;
const massMark2 = 95;
const massJohn2 = 85;

const heightMark1 = 1.69;
const heightJohn1 = 1.95;
const heightMark2 = 1.88;
const heightJohn2 = 1.76;


// BMIs for Mark and John with Data set 1 and 2

const bmiMark1 = massMark1 / heightMark1 ** 2;
const bmiMark2 = massMark2 / heightMark2 ** 2;

console.log(bmiMark1 + ", " + bmiMark2);

const bmiJohn1 = massJohn1 / heightJohn1 ** 2;
const bmiJohn2 = massJohn2 / heightJohn2 ** 2;

console.log(bmiJohn1 + ", " + bmiJohn2);

//Boolean variable of who has higher BMI

let markHigherBMI1 = bmiMark1 > bmiJohn1
//console.log("The answer to whether Mark has a higher BMI than John from dataset 1 is " + markHigherBMI1);
let markHigherBMI2 = bmiMark2 > bmiJohn2
//console.log("The answer to whether Mark has a higher BMI than John from dataset 2 is " + markHigherBMI2);



if (markHigherBMI1) {
    console.log(`%c Mark's BMI %c${Math.ceil(bmiMark1)}%c is higher than John's BMI of %c${Math.ceil(bmiJohn1)}!`, "font-weight:bold; color:red", "color:green", "font-weight:bold; color:red", "color:green")
} else {
    console.log(`John's BMI ${Math.round(bmiJohn1, 3)} is higher than Mark's BMI of ${Math.round(bmiMark1)}`)
};

if (markHigherBMI2) {
    console.log(`Mark's BMI ${(Math.round(bmiMark2 * 100)) / 100} is higher than John's BMI of ${(Math.round(bmiJohn2 * 100)) / 100}!`)
} else {
    console.log(`John's BMI ${(Math.round(bmiJohn2 * 100)) / 100} is higher than Mark's BMI of ${(Math.round(bmiMark2 * 100)) / 100}`)
};

console.log(`${(Math.round(224.999999 * 100)) / 100} `)