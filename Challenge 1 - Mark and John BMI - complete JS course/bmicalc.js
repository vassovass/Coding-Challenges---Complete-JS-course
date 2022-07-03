/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.
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

let markHigherBMI = bmiMark1 > bmiJohn1
console.log("The answer to whether Mark has a higher BMI than John from dataset 1 is " + markHigherBMI)
markHigherBMI = bmiMark2 > bmiJohn2
console.log("The answer to whether Mark has a higher BMI than John from dataset 2 is " + markHigherBMI)