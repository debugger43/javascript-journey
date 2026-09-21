function greet() {
    console.log("Welcome to JavaScript!");

}

greet();


function square(num) {
    console.log(num * num);
}

square(4);


// with return statement

function add(a, b) {
    console.log(a + b);
}

const result = add(10, 5);

console.log(result);

// a function without return gives back undefined



function multiply(a, b) {
    return a * b;
}

const answer = multiply(4, 5);

console.log(answer);




function checkAge(age) {
    if (age < 18) {
        return "Minor";
    }

    return "Adult";
}

console.log(checkAge(16));
console.log(checkAge(22));




// multiple parameters

function calculateTotal(price, quantity) {
    return price * quantity;
}

const total = calculateTotal(100, 3);

console.log(total);



// default parameters

function greeting(name = "Guest") {
    console.log("Hello", name);
    
}

greeting("Rohit");
greeting();


// function expression

const welcome = function() {
    console.log("Welcome!");
    
};

welcome();


// Arrow functions

const addition = (a, b) => {
    return a+b;
};

console.log(addition(1,3));

        // OR


const subtract = (a,b) => a - b;

console.log(subtract(4,2));
 

// if there is single parameter we can omit () but in case of zero or multiple parameters () is required and with a single expression we can omit {} and return... (implicit return)

// function scope

function test() {
  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
  }

  console.log(a);
  console.log(b);
  console.log(c);
}

test();