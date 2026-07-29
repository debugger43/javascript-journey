// variables

// const name= "Rohit";
// let age = 22;
// age = 23;

// console.log(name);
// console.log(age);


// scope

if (true) {
    let age = 22;
    console.log("Inside block:", age);
}

// we get error "age not defined" because let is block scoped.
// console.log("outside block:", age); 



// var does not respect scope n hence the value of score is updated here
// var score = 10;
// if (true) {
//     var score = 50;
// }

// console.log(score);


const user = {
    name: "Rohit",
};

if (true) {
    user.name = "Aman";

    const age = 22;

    console.log("A:", user.name);
}

console.log("B:", user.name);
console.log("C:", age);






