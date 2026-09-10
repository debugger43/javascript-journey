# Lesson 02 — Data Types

## 1. What are Data Types?

A data type tells JavaScript what kind of value we are working with.

JavaScript has **8 built-in data types**.

### Primitive Types

* String
* Number
* Boolean
* Undefined
* Null
* Symbol
* BigInt

### Non-Primitive Type

* Object

> Symbol and BigInt are intentionally postponed for a later advanced JavaScript section.

---

# 2. String

A string represents text.

```js
const name = "Rohit";
```

We can check its type using `typeof`:

```js
typeof name;
// "string"
```

Strings can be written using:

```js
"Hello"
'Hello'
`Hello`
```

---

# 3. Number

JavaScript uses the `Number` type for both integers and decimals.

```js
const age = 22;
const price = 199.99;
```

Both are:

```js
typeof age;
// "number"

typeof price;
// "number"
```

---

# 4. Boolean

A Boolean has only two possible values:

```js
true
false
```

Example:

```js
const isLoggedIn = true;
const hasLicense = false;
```

```js
typeof isLoggedIn;
// "boolean"
```

Booleans are commonly used in conditions.

---

# 5. `typeof`

`typeof` tells us the type of a value.

```js
const x = "Hello";

typeof x;
// "string"
```

It checks the value stored in the variable.

```js
const x = "Hello";
const y = x;

typeof y;
// "string"
```

---

# 6. Undefined

`undefined` usually means that a variable has been declared but no value has been assigned.

```js
let age;

console.log(age);
// undefined

console.log(typeof age);
// "undefined"
```

Mental model:

> `undefined` → no value has been assigned yet.

---

# 7. Null

`null` represents an intentional absence of a value.

```js
let selectedProduct = null;
```

This means:

> There is intentionally no selected product right now.

Another example:

```js
let currentUser = null;
```

This can communicate that the application currently knows there is no logged-in user.

---

# 8. `null` vs `undefined`

### `undefined`

```js
let user;
```

Means:

> A value has not been assigned yet.

### `null`

```js
let user = null;
```

Means:

> We intentionally have no value right now.

Simple mental model:

```text
undefined → not assigned yet
null      → intentionally empty
```

---

# 9. `typeof null`

There is a famous JavaScript quirk:

```js
typeof null;
// "object"
```

Even though `null` is **not actually an object**.

This is a historical JavaScript bug that was kept for backward compatibility.

So:

```js
typeof null === "object";
// true
```

Don't use this result to conclude that null is an object.

---

# 10. Type Coercion

JavaScript can automatically convert one type into another in some situations.

This is called **type coercion**.

For example:

```js
"5" + 2
```

produces:

```text
"52"
```

The number `2` is converted to a string, and the values are concatenated.

### `+`

```js
"5" + 2
// "52"
```

### `-`

```js
"5" - 2
// 3
```

### `*`

```js
"5" * 2
// 10
```

### `/`

```js
"6" / 2
// 3
```

The `-`, `*`, and `/` operators perform numeric conversion when possible.

---

# 11. NaN

`NaN` means:

> Not a Number

It appears when a numeric operation cannot produce a valid number.

Example:

```js
"Hello" - 2
// NaN
```

An important JavaScript quirk:

```js
typeof NaN;
// "number"
```

`NaN` is a special value within the `Number` type.

---

# 12. `==` vs `===`

## `==`

Loose equality allows type coercion.

```js
5 == "5";
// true
```

JavaScript converts `"5"` to a number before comparing.

Another example:

```js
false == 0;
// true
```

During numeric coercion, `false` becomes `0`.

---

## `===`

Strict equality does **not** perform this type coercion.

It checks both the value and the type.

```js
5 === "5";
// false
```

Because:

```text
5      → number
"5"    → string
```

Another example:

```js
false === 0;
// false
```

Because:

```text
false → boolean
0     → number
```

### Professional default

Prefer:

```js
===
```

unless there is a specific reason to use loose equality.

---

# 13. Truthy and Falsy Values

JavaScript can convert values into Boolean values.

We can explicitly test this using:

```js
Boolean(value)
```

Example:

```js
Boolean("Hello");
// true
```

---

## Falsy Values

The main falsy values we've learned are:

```text
false
0
""
null
undefined
NaN
```

These become `false` when converted to Boolean.

Examples:

```js
Boolean("");
// false

Boolean(0);
// false

Boolean(null);
// false

Boolean(undefined);
// false

Boolean(NaN);
// false
```

---

## Truthy Values

Most other values are truthy.

Examples:

```js
Boolean("Hello");
// true

Boolean(" ");
// true

Boolean(25);
// true

Boolean(-10);
// true
```

### Important

A non-empty string is truthy—even if the text says `"false"`:

```js
Boolean("false");
// true
```

---

# 14. Empty Arrays and Objects

A common beginner mistake is thinking that empty arrays and objects are falsy.

They are actually **truthy**.

```js
Boolean([]);
// true

Boolean({});
// true
```

Even though they contain nothing, they are still objects.

Mental model:

```text
[] → exists as an array → truthy
{} → exists as an object → truthy
```

---

# 15. Objects

Objects group related information into one value.

Instead of:

```js
const name = "Rohit";
const age = 22;
const city = "Delhi";
```

We can group the information:

```js
const user = {
    name: "Rohit",
    age: 22,
    city: "Delhi"
};
```

Now `user` is one value.

```js
typeof user;
// "object"
```

We can access individual properties:

```js
user.name;
// "Rohit"

user.age;
// 22

user.city;
// "Delhi"
```

The full Object chapter will be covered later.

---

# 16. Arrays

An array stores multiple values in order.

```js
const fruits = ["Apple", "Banana", "Mango"];
```

Arrays are also objects in JavaScript.

Therefore:

```js
typeof fruits;
// "object"
```

This can be surprising.

---

# 17. `Array.isArray()`

Because:

```js
typeof [];
// "object"
```

`typeof` cannot distinguish between a normal object and an array.

JavaScript provides:

```js
Array.isArray(value)
```

Example:

```js
const fruits = ["Apple", "Banana", "Mango"];

Array.isArray(fruits);
// true
```

For an object:

```js
const user = {
    name: "Rohit"
};

Array.isArray(user);
// false
```

Even an empty array is still an array:

```js
Array.isArray([]);
// true
```

---

# 18. Objects Can Contain Arrays

An object can have an array as one of its property values.

```js
const student = {
    name: "Rohit",
    subjects: ["JavaScript", "React", "SQL"]
};
```

We can access:

```js
student.name;
// "Rohit"

student.subjects;
// ["JavaScript", "React", "SQL"]
```

And check:

```js
Array.isArray(student.subjects);
// true
```

This pattern is extremely common in real JavaScript and React applications.

---

# 19. JavaScript Data Type Mental Model

```text
JavaScript Values

├── Primitive
│   ├── String
│   ├── Number
│   ├── Boolean
│   ├── Undefined
│   ├── Null
│   ├── Symbol (later)
│   └── BigInt (later)
│
└── Non-Primitive
    └── Object
         ├── Object {}
         ├── Array []
         └── Function () {}   ← later
```

---

# 20. Important Takeaways

### Data Types

Know the common types:

```text
String
Number
Boolean
Undefined
Null
Object
```

Symbol and BigInt will be learned later.

### `typeof`

```js
typeof value
```

tells us the type of a value.

Remember the quirks:

```js
typeof null;
// "object"

typeof NaN;
// "number"

typeof [];
// "object"
```

### Equality

```text
==  → allows type coercion
=== → strict comparison
```

Prefer `===`.

### Truthy/Falsy

Remember these falsy values:

```text
false
0
""
null
undefined
NaN
```

And remember:

```js
Boolean([]);
// true

Boolean({});
// true
```

### Arrays

```js
typeof [];
// "object"

Array.isArray([]);
// true
```

---

# Lesson 2 Status

* [x] Primitive data types introduced
* [x] String
* [x] Number
* [x] Boolean
* [x] `typeof`
* [x] Undefined
* [x] Null
* [x] Null vs Undefined
* [x] Type coercion
* [x] `==` vs `===`
* [x] Truthy / Falsy
* [x] Objects introduction
* [x] Arrays introduction
* [x] `Array.isArray()`
* [x] Practice
* [x] Challenges

**Lesson 2 — Data Types: Complete**



