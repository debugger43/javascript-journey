# Lesson 5 — Loops

## 1. `for` Loop

Used to repeat code while a condition is true.

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

Output:

```text
1
2
3
4
5
```

### Three parts

```js
for (initialization; condition; update) {
  // code
}
```

* **Initialization** → runs once at the beginning
* **Condition** → checked before every iteration
* **Update** → changes the loop variable after each iteration

Example:

```js
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}
```

Output:

```text
2
4
6
8
10
```

---

## 2. `for` + `if`

Loops can be combined with conditions.

```js
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
```

Output:

```text
2
4
6
8
10
```

Important distinction:

* Loop iterations → 10
* `if` condition checks → 10
* `console.log()` executions → 5

---

## 3. `while` Loop

A `while` loop checks the condition **before** running the body.

```js
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
```

Execution:

```text
initialize
↓
check condition
↓
run body
↓
update
↓
check again
```

Be careful to update the variable. Otherwise, you can create an infinite loop.

---

## 4. `for` vs `while`

Both can perform many of the same tasks.

### `for`

Useful when the initialization, condition, and update naturally belong together.

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

Mental model:

> "I'm managing a loop counter/setup."

### `while`

Useful when the loop is primarily driven by a condition.

```js
let playerAlive = true;

while (playerAlive) {
  console.log("Playing...");
}
```

Mental model:

> "Keep going while this condition is true."

Don't think of it as strictly:

> `for` = known number of iterations
> `while` = unknown number

Both can technically be used in many situations.

---

## 5. `do...while`

A `do...while` loop runs the body **at least once**, then checks the condition.

```js
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);
```

Execution:

```text
run body
↓
update
↓
check condition
↓
repeat
```

### Important difference

`while`:

```text
check → run
```

`do...while`:

```text
run → check
```

Example:

```js
let i = 10;

do {
  console.log(i);
} while (i < 5);
```

Still prints:

```text
10
```

because the body runs before the condition is checked.

---

# 6. `break`

`break` **immediately stops the entire loop**.

```js
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }

  console.log(i);
}
```

Output:

```text
1
2
3
4
```

At `i = 5`:

```js
break;
```

runs before `console.log()`, so `5` isn't printed.

### Mental model

```text
break → 🛑 exit the entire loop
```

`break` does NOT have to be inside an `if`, although using it inside an `if` is common.

This is valid:

```js
for (let i = 1; i <= 10; i++) {
  break;
}
```

The loop stops immediately.

---

# 7. `continue`

`continue` **skips the current iteration** but keeps the loop running.

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
}
```

Output:

```text
1
2
4
5
```

At `i = 3`, `continue` skips the remaining code for that iteration.

### Mental model

```text
continue → ⏭️ skip current iteration
break    → 🛑 stop entire loop
```

---

# 8. `%` + `continue`

Useful for filtering values.

```js
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }

  console.log(i);
}
```

Odd numbers trigger `continue`, so only even numbers are printed:

```text
2
4
6
8
10
```

Remember:

```js
i % 2 === 0   // even
i % 2 !== 0   // odd
```

---

# 9. `break` + `continue` Together

They can be used in the same loop.

```js
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }

  if (i === 7) {
    break;
  }

  console.log(i);
}
```

Output:

```text
1
3
5
```

At even numbers → `continue`.

At `7` → `break`.

The order of conditions matters.

---

# 10. `i++` vs `++i`

Both increase a value by 1.

```js
i++;
```

and

```js
++i;
```

Both eventually increase `i` by 1.

The difference matters when the value is used in an expression.

### `i++`

```text
use → increase
```

Example:

```js
let x = 10;

console.log(x++);
console.log(x);
```

Output:

```text
10
11
```

### `++i`

```text
increase → use
```

Example:

```js
let x = 10;

console.log(++x);
console.log(x);
```

Output:

```text
11
11
```

### Easy memory trick

```text
i++  → use first, increase later
++i  → increase first, use later
```

---


## Interview Points So Far

### What are the three parts of a `for` loop?

1. Initialization
2. Condition
3. Update expression

### What does `break` do?

It immediately exits the entire loop.

### What does `continue` do?

It skips the current iteration and continues with the next iteration.

### Difference between `while` and `do...while`?

`while` checks the condition before running.

`do...while` runs once before checking the condition.

### What is an infinite loop?

A loop that never reaches a false condition or stopping point.

Example:

```js
let i = 1;

while (i <= 5) {
  console.log(i);
}
```

`i` never changes, so the condition remains true.
