# Lesson 03 — Operators

## 1. What are Operators?

Operators are symbols used to perform operations on values.

Examples:

```js
10 + 5
10 > 5
age += 1
```

---

# 2. Arithmetic Operators

Used for mathematical operations.

```js
+   // addition
-   // subtraction
*   // multiplication
/   // division
%   // remainder
```

Examples:

```js
10 + 3  // 13
10 - 3  // 7
10 * 3  // 30
10 / 3  // 3.333333...
10 % 3  // 1
```

### Modulus `%`

Returns the remainder after division.

```js
10 % 3
// 1
```

Useful for checking even/odd numbers:

```js
10 % 2 === 0  // even
11 % 2 !== 0  // odd
```

---

# 3. Assignment Operators

`=` assigns a value:

```js
let score = 10;
```

Compound assignment operators combine an operation with assignment:

```js
score += 5;
score -= 5;
score *= 2;
score /= 2;
```

For example:

```js
score += 5;
```

is equivalent to:

```js
score = score + 5;
```

---

# 4. Comparison Operators

Comparison operators compare values and return a Boolean (`true` or `false`).

```js
>    // greater than
<    // less than
>=   // greater than or equal
<=   // less than or equal
===  // strict equality
!==  // strict inequality
```

Examples:

```js
10 > 5
// true

10 < 5
// false

10 >= 10
// true

8 <= 7
// false

10 === "10"
// false

10 !== "10"
// true
```

---

# 5. Logical Operators

Logical operators are used to combine or modify conditions.

### `&&` — AND

Returns `true` only when both conditions are true.

```js
true && true
// true

true && false
// false
```

Mental model:

> AND → both must be true.

---

### `||` — OR

Returns `true` when at least one condition is true.

```js
true || false
// true

false || false
// false
```

Mental model:

> OR → at least one must be true.

---

### `!` — NOT

Reverses a Boolean value.

```js
!true
// false

!false
// true
```

---

# 6. Increment and Decrement

`++` increases a number by 1.

```js
let count = 5;

count++;

console.log(count);
// 6
```

Equivalent to:

```js
count = count + 1;
```

`--` decreases a number by 1.

```js
count--;
```

Equivalent to:

```js
count = count - 1;
```

> Pre-increment vs post-increment will be covered later when we need it.

---

# 7. Combining Operators

Operators can be combined to create real conditions.

Example:

```js
const age = 22;
const hasLicense = true;

age >= 18 && hasLicense
// true
```

Here:

1. `age >= 18` produces `true`
2. `hasLicense` is `true`
3. `true && true` produces `true`

---

# 8. Important Interview Points

### `%`

> The `%` operator, also called the modulus operator, returns the remainder after dividing one number by another.

### `>` vs `>=`

> `>` returns true when the left value is greater than the right value. `>=` returns true when it is greater than or equal to the right value.

### Logical operators

> `&&` returns true when both conditions are true, `||` returns true when at least one condition is true, and `!` reverses a Boolean value.

---

# Key Takeaways

```text
+  -  *  /  %       → arithmetic
=  += -= *= /=      → assignment
>  <  >= <=         → comparison
=== !==             → strict comparison
&& || !             → logical
++ --               → increment/decrement
```

Most importantly, comparison and logical operators produce Boolean results:

```js
10 > 5
// true

10 > 5 && 20 > 10
// true
```


