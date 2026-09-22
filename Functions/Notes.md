# JavaScript — Functions

## 1. What is a Function?

A function is a reusable block of code designed to perform a specific task.

```js
function greet() {
  console.log("Hello");
}

greet();
```

* Function declaration → defines the function.
* Function call → executes the function.

---

## 2. Parameters and Arguments

```js
function greet(name) {
  console.log("Hello", name);
}

greet("Rohit");
```

* `name` → parameter
* `"Rohit"` → argument

**Parameter:** named variable in the function definition.

**Argument:** actual value passed when calling the function.

---

## 3. Return

`return` sends a value back to the place where the function was called.

```js
function add(a, b) {
  return a + b;
}

const result = add(10, 5);

console.log(result); // 15
```

`return` also immediately stops the function.

```js
function test() {
  console.log("A");
  return;
  console.log("B"); // never runs
}
```

### `return` vs `console.log()`

```js
function add(a, b) {
  console.log(a + b);
}
```

Displays the result but returns `undefined`.

```js
function add(a, b) {
  return a + b;
}
```

Returns the value to the caller.

---

## 4. Multiple Parameters

Arguments are matched to parameters by position.

```js
function calculateTotal(price, quantity) {
  return price * quantity;
}

calculateTotal(100, 3); // 300
```

---

## 5. Default Parameters

A parameter can have a default value.

```js
function greet(name = "Guest") {
  console.log("Hello", name);
}

greet("Rohit"); // Hello Rohit
greet();        // Hello Guest
```

The default is used when the argument is missing or `undefined`.

---

## 6. Function Expressions

A function can be stored inside a variable.

```js
const multiply = function(a, b) {
  return a * b;
};

multiply(4, 5);
```

The function does not need its own name here.

---

## 7. Arrow Functions

Basic arrow function:

```js
const greet = () => {
  console.log("Hello");
};
```

With parameters:

```js
const add = (a, b) => {
  return a + b;
};
```

Single parameter:

```js
const square = num => {
  return num * num;
};
```

Implicit return:

```js
const add = (a, b) => a + b;
```

### Basic rules

```text
0 parameters → () required
1 parameter  → parentheses optional
2+ parameters → parentheses required
```

For a single expression:

```js
const square = n => n * n;
```

The return is implicit.

---

## 8. Function Scope

Variables declared inside a function normally cannot be accessed outside it.

```js
function greet() {
  const message = "Hello";
  console.log(message);
}

console.log(message); // ReferenceError
```

Function parameters are also local to the function.

```js
const name = "Rohit";

function greet(name) {
  console.log(name);
}

greet("Aman"); // Aman
console.log(name); // Rohit
```

The inner `name` shadows the outer `name`.

---

## 9. Lexical Scope

An inner scope can access variables from an outer scope.

```js
const name = "Rohit";

function greet() {
  console.log(name);
}

greet(); // Rohit
```

But the outer scope cannot access variables declared inside the inner scope.

---

## 10. Variable Shadowing

Shadowing happens when an inner scope declares a variable with the same name as an outer variable.

```js
let x = 10;

function test() {
  let x = 20;
  console.log(x); // 20
}

test();

console.log(x); // 10
```

The closest variable is used.

---

## 11. `var` vs `let` / `const` Scope

`var` is function-scoped.

`let` and `const` are block-scoped.

```js
function test() {
  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
  }

  console.log(a); // 10
  console.log(b); // ReferenceError
  console.log(c); // ReferenceError
}
```

Important:

> `var` ignores block scope, but it does NOT ignore function scope.

---

## 12. Functions as Values

Functions can be stored in variables.

```js
function greet() {
  console.log("Hello");
}

const myFunction = greet;

myFunction();
```

Remember:

```text
greet   → the function itself
greet() → execute the function
```

---

## 13. Callback Functions

A function can be passed as an argument to another function.

```js
function greet() {
  console.log("Hello");
}

function execute(fn) {
  fn();
}

execute(greet);
```

Here:

```text
greet → callback function
fn    → parameter referring to greet
fn()  → calls greet()
```

A **callback function** is a function passed to another function to be called by that function.

---

## 14. Higher-Order Functions

A function that takes another function as an argument or returns a function is called a **higher-order function**.

```js
function add(a, b) {
  return a + b;
}

function calculate(fn, a, b) {
  return fn(a, b);
}

calculate(add, 5, 3); // 8
```

Here:

```text
add       → callback
calculate → higher-order function
```

---

## 15. `arguments`

Regular functions have an `arguments` object containing the arguments passed to them.

```js
function show() {
  console.log(arguments[0]);
  console.log(arguments[1]);
}

show(10, 20);
```

Output:

```text
10
20
```

Extra arguments can also be accessed:

```js
function test(a, b) {
  console.log(arguments[2]);
}

test(10, 20, 30); // 30
```

---

## 16. Rest Parameters

Rest parameters collect multiple arguments into an array.

```js
function show(...numbers) {
  console.log(numbers);
}

show(10, 20, 30);
```

Output:

```text
[10, 20, 30]
```

Rest parameters can also be combined with normal parameters:

```js
function test(first, ...others) {
  console.log(first);
  console.log(others);
}

test("A", "B", "C", "D");
```

Output:

```text
A
["B", "C", "D"]
```

The rest parameter must be the last parameter.

```js
function test(a, ...rest) {} // valid
```

---

# Key Takeaways

```text
Function
→ reusable block of code

Parameter
→ variable defined in function

Argument
→ actual value passed to function

return
→ sends value back to caller

Function expression
→ function stored in a variable

Arrow function
→ shorter function syntax

Function scope
→ variables inside functions are local

Shadowing
→ inner variable hides outer variable with same name

Callback
→ function passed to another function

Higher-order function
→ function that receives/returns a function

arguments
→ arguments object in regular functions

Rest parameter
→ collects arguments into an array
```


