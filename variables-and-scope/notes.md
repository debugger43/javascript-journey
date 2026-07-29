# Lesson 01 - Variables & Scope

## What is a Variable?

A variable is a named container that stores a value.

Example:

```js
const name = "Rohit";
let age = 22;
```

---

## let vs const

### let

- Can be reassigned.
- Use it when the value will change.

```js
let score = 10;

score = 20;
```

### const

- Cannot be reassigned.
- Use it when the variable should always refer to the same value.

```js
const country = "India";
```

---

## Reassignment vs Modification

### Reassignment 

```js
const user = {
    name: "Rohit"
};

user = {
    name: "Aman"
};
```

Result:

```
TypeError: Assignment to constant variable.
```

---

### Modification 

```js
const user = {
    name: "Rohit"
};

user.name = "Aman";
```

This works because we are modifying the object, not reassigning the variable.

---

## Arrays with const

```js
const numbers = [1, 2, 3];

numbers.push(4);
```

This works because `push()` modifies the existing array.

This does NOT work:

```js
numbers = [4, 5, 6];
```

because it is reassignment.

---

# Scope

Scope decides where a variable can be accessed.

---

## Block Scope

Anything inside `{}` is a block.

```js
if (true) {

}
```

Variables declared with `let` and `const` only exist inside their block.

Example:

```js
if (true) {
    const age = 22;
}

console.log(age);
```

Output:

```
ReferenceError: age is not defined
```

---

## Access Rules

✅ Inner block can access variables from the outer scope.

```js
const user = {
    name: "Rohit"
};

if (true) {
    console.log(user.name);
}
```

---

❌ Outer scope cannot access variables declared inside a block.

```js
if (true) {
    const age = 22;
}

console.log(age);
```

---

## Variable Shadowing

An inner variable with the same name hides the outer variable.

```js
const name = "Rohit";

if (true) {
    const name = "Aman";

    console.log(name);
}

console.log(name);
```

Output

```
Aman
Rohit
```

---

## var vs let

`var`

- Function scoped
- Ignores block scope
- Avoid using it in modern JavaScript

`let`

- Block scoped
- Preferred

---

## Important Points

- Use `const` by default.
- Use `let` only when reassignment is needed.
- `const` protects the variable reference, not the contents of objects or arrays.
- Objects and arrays declared with `const` can still be modified.
- Inner scopes can access outer variables.
- Outer scopes cannot access inner variables.

---

# Things to Remember

- Reassignment ≠ Modification
- Block Scope
- Variable Shadowing
- Lexical Scope

# My Mistakes

- Initially I thought I understood scope, but I didn't.
- I learned that code inside a block can access outer variables.
- I learned that outer code cannot access variables declared inside a block.
- I confused "global scope" with "outer scope."