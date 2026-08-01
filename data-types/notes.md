## JavaScript Data Types

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

---

## String

Stores text.

```js
const name = "Rohit";

typeof name; // "string"
```

---

## Number

Stores both integers and decimal numbers.

```js
const age = 22;
const price = 199.99;

typeof age; // "number"
```

---

## Boolean

Has only two possible values.

```js
const isLoggedIn = true;
const hasLicense = false;

typeof isLoggedIn; // "boolean"
```

---

## `typeof`

`typeof` is an operator that tells us the type of a value.

```js
typeof "Hello"; // "string"
typeof 22;      // "number"
typeof true;    // "boolean"
```

### Remember

* `typeof` checks the **value**, not the variable.
* Variable names do not affect the result.

```js
const x = "Hello";
const y = x;

typeof y; // "string"
```

---

## `undefined`

A variable has been declared but **no value has been assigned**.

```js
let age;

console.log(age);        // undefined
console.log(typeof age); // "undefined"
```

---

## `null`

Represents the **intentional absence of a value**.

```js
let currentUser = null;
```

Meaning:

> There is intentionally no current user.

---

## `null` vs `undefined`

### `undefined`

* Default value assigned by JavaScript.
* Variable exists but has no assigned value yet.

```js
let score;
```

### `null`

* Assigned intentionally by the developer.
* Means **"there is currently no value."**

```js
let selectedProduct = null;
```

---

## `typeof null`

```js
typeof null; // "object"
```

> ⚠️ `null` is **not** actually an object.

This is a **historical bug** in JavaScript that has been kept for backward compatibility.

---

## Key Takeaways

* `typeof` checks the **value**, not the variable.
* `undefined` = value not assigned yet.
* `null` = intentionally no value.
* Use `null` to represent an application's current state (e.g., no logged-in user, no selected product).
* `typeof null` returns `"object"` because of a historical bug.

---




