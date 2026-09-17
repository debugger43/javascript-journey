# Lesson 04 — Conditionals

## 1. What are Conditionals?

Conditionals allow JavaScript to make decisions based on whether a condition is `true` or `false`.

The main conditional statements are:

```text
if
else if
else
```

---

# 2. `if`

`if` executes a block of code when its condition is `true`.

```js
const age = 22;

if (age >= 18) {
    console.log("You are an adult");
}
```

If the condition is `false`, the block is skipped.

```js
const age = 16;

if (age >= 18) {
    console.log("You are an adult");
}
```

Nothing is printed because there is no `else`.

---

# 3. `else`

`else` executes when the `if` condition is `false`.

```js
const age = 16;

if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}
```

Output:

```text
You are a minor
```

Mental model:

```text
if condition is true
    → run if block

otherwise
    → run else block
```

---

# 4. `else if`

`else if` allows us to check additional conditions.

```js
const age = 16;

if (age < 13) {
    console.log("Child");
} else if (age < 18) {
    console.log("Teenager");
} else {
    console.log("Adult");
}
```

JavaScript checks conditions from **top to bottom**.

Once a condition is true, its block executes and the remaining branches are skipped.

---

# 5. `if / else if / else` Flow

```text
if
 ↓
true? ── Yes → execute and stop
 ↓ No
else if
 ↓
true? ── Yes → execute and stop
 ↓ No
else → execute
```

Example:

```js
const score = 75;

if (score >= 90) {
    console.log("A");
} else if (score >= 75) {
    console.log("B");
} else {
    console.log("C");
}
```

Output:

```text
B
```

Because:

```js
75 >= 90 // false
75 >= 75 // true
```

---

# 6. Combining Conditions

Conditionals can use comparison and logical operators.

```js
const age = 22;
const isVerified = true;

if (age >= 18 && isVerified) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}
```

`&&` requires both conditions to be true.

---

# 7. Separate `if` Statements

Separate `if` statements are evaluated independently.

```js
const age = 20;

if (age >= 18) {
    console.log("Adult");
}

if (age >= 13) {
    console.log("Teenager or older");
}
```

Both conditions are true, so both messages are printed:

```text
Adult
Teenager or older
```

This is different from:

```js
if (...) {
    ...
} else if (...) {
    ...
}
```

where only the first matching branch executes.

### Key distinction

```text
Separate if statements
→ each condition is checked independently

if / else if / else
→ only the first matching branch executes
```

---

# 8. Interview Questions

### 🔥 What is the difference between `if`, `else if`, and `else`?

`if` executes when its condition is true. `else if` checks additional conditions when previous conditions are false, while `else` executes when none of the preceding conditions are true.

### 🔥 What happens when no condition is true and there is no `else`?

All the conditional blocks are skipped and nothing is executed from the conditional statement.

### 🔥 What is the difference between separate `if` statements and an `if / else if` chain?

Separate `if` statements are evaluated independently, so multiple blocks can execute. In an `if / else if` chain, only the first matching branch executes.

---

# Key Takeaways

```text
if       → execute when condition is true
else if  → check another condition
else     → execute when all previous conditions are false
```

Remember:

> Conditions are evaluated from top to bottom in an `if / else if / else` chain.

And:

> Separate `if` statements are independent.

