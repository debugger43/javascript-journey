// for loop

for (let i = 1; i <= 5; i++) {
    console.log(i);
}



for (let i = 2; i <= 10; i += 2) {
    console.log(i);

}

for (let i = 1; i <= 5; i++) {
    console.log("Hello");

}


for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);

    }
}



// while loop

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}


let count = 1;

while (count <= 10) {
    console.log(count);
    count += 2;
}


let countDown = 3;

while (countDown > 0) {
    console.log("countdown:", countDown);
    countDown--;

}

console.log("Go!");


// do while loop

let a = 1;

do {
    console.log(a);
    a++;
} while (a <= 5);



let b = 1;

do {
    console.log(b);
    b += 2;

} while (b <= 6);


// break

for (i = 1; i <= 6; i++) {
    if (i === 4) {
        break;
    }

    console.log(i);

}


// continue

for (i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);

}


// challenges

// 1

for (i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue;
    }

    console.log(i);

}

// 2

for (i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        break;
    }

    console.log(i);

}


// 3

for (i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }

    if (i === 7) {
        break;
    }

    console.log(i);

}

