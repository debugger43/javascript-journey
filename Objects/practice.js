const person = {
    name: "Rohit",
    age: 22,
    // city: "Karnal"
};

console.log(person);


// dot notation

console.log(person.name);
console.log(person.age);
console.log(person.city);


// bracket notation

console.log(person["name"]);
console.log(person["age"]);


const person1 = {
  name: "Rohit",
  age: 22
};

const key = "name";

// console.log(person1.key);  literal property  
// console.log(person1[key]); value stored in the property 

// adding deleting and modifying properties

const person2 = {
  name: "Rohit",
  age: 22
};

person2.city = "Karnal";

console.log(person2);

person2.age = 23;

delete person2.age;

console.log(person2);
