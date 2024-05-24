// Part 1: Math Problems
console.log("Part 1: Math Problems");
let n1 = 10, n2 = 15, n3 = 20, n4 = 5; // These are the four numbers

let allDivisibleBy5 = n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;
console.log(`All numbers are divisible by 5: ${allDivisibleBy5}`);

let isFirstLargerThanLast = n1 > n4;
console.log(`The first number is larger than the last: ${isFirstLargerThanLast}`);

let arithmeticResult = ((n1 - n2) * n3) % n4;
console.log(`The result of the arithmetic chain is: ${arithmeticResult}`);

let isUnderOrEqualTo25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
console.log(`All numbers are under or equal to 25: ${isUnderOrEqualTo25}`);

// Part 2: Practical Math
console.log("\nPart 2: Practical Math");
let distance = 1500; // in miles
let fuelBudget = 175; // in dollars
let fuelCost = 3; // in dollars per gallon

let speeds = [55, 60, 75];
let efficiencies = [30, 28, 23];

for (let i = 0; i < speeds.length; i++) {
  let speed = speeds[i];
  let efficiency = efficiencies[i];

  let fuelNeeded = distance / efficiency;
  let isBudgetEnough = fuelBudget >= fuelNeeded * fuelCost;
  let duration = distance / speed;

  console.log(`At ${speed} mph:`);
  console.log(`You will need ${fuelNeeded.toFixed(2)} gallons of fuel.`);
  console.log(`Your budget is ${isBudgetEnough ? 'enough' : 'not enough'} to cover the fuel expense.`);
  console.log(`The trip will take ${duration.toFixed(2)} hours.`);
}

