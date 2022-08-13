'use strict';
/*
Coding Challenge #2
Steven is still building his tipPercentage calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tipPercentage is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tipPercentage, calculated based on the rules above (you can check out
the code from first tipPercentage calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tipPercentage value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tipPercentage
Test data: 125, 555 and 44

GOOD LUCK
*/
// const bill = 100;




// //Arrow Function way
// const calcTip = bill => 0.15-bill;


//Function Declaration way
function calcTip(bill) {
  const tipPercentage = bill <= 300 && bill >= 50 ? 0.15 : 0.2;
  const tip = bill * tipPercentage;
  return tip
}


console.log(calcTip(100));

// And now let's use arrays! So create an array 'bills' containing the test data below

// Test data: 125, 555 and 44

// Create an array 'tips' containing the tipPercentage value for each bill,Calculated from the function you created before

const bills = [125, 555, 44]
console.log(bills[0])
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

console.log(tips)

// 4. Bonus: Create an array 'total' containing the total values, so the bill + tipPercentage


const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]]

console.log(total)