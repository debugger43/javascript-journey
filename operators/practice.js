// Arithmetic Operators

console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);
console.log(10 % 3);


// Assignment Operators

let points = 100;

points += 20;
console.log(points);

points -= 30;
console.log(points);

points *= 2;
console.log(points);

points /= 4;
console.log(points);


// comparison operators

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(8 <= 7);
console.log(10 === "10");
console.log(10 !== "10");

// logical operators

// “Logical operators are used to combine or modify conditions. && is the AND operator and returns true only when both conditions are true. || is the OR operator and returns true when at least one condition is true, while ! is the NOT operator and reverses a Boolean value.”

console.log(10 > 5 && 20 > 10);
console.log(10 > 5 || 20 < 10);
console.log(!(10 > 5));


// challenge

const age = 22;
const hasLicense = true;

console.log(age >= 18 && hasLicense);
console.log(age < 18 || hasLicense);
console.log(!(age >= 18));




// increment and decrement

let score = 10;

score++;
console.log(score);

score++;
console.log(score);

score--;
console.log(score);


// final challenge

let number = 10;

number += 5;
number *= 2;

console.log(number > 20 && number < 40);
console.log(number % 3 === 0);

number--;

console.log(number);
