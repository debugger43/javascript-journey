// challenge-1

function calculate(a, b) {
    return a + b;
}

function execute(fn) {
    console.log(fn(10, 5));
    
}

execute(calculate);

// execute(calculate)
//        ↓
// fn → calculate
//        ↓
// fn(10, 5)
//        ↓
// calculate(10, 5)
//        ↓
// return 15
//        ↓
// console.log(15)


// challenge-2

function multiply(a, b) {
  return a * b;
}

function execute(fn, x, y) {
  return fn(x, y);
}

const result = execute(multiply, 4, 5);

console.log(result);


// challenge-3


function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function calculate(fn, a, b) {
  return fn(a, b);
}

console.log(calculate(add, 5, 3));
console.log(calculate(multiply, 5, 3));



