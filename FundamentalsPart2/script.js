'use strict'

// a = 5;
const a = 5;
console.log(a);

// Functions
function f1(a) { return a - 2; }
const f2 = function (a) { return a - 2; }
const f3 = a => a - 2;
console.log(f1(10), f2(10), f3(10));

// Add array
const arr = [1, 2, 3];
console.log(arr);
const len = arr.push(4);
console.log(arr);
console.log(len);
arr.unshift(0);
console.log(arr);

// Remove array
const lastRemoved = arr.pop();
console.log(lastRemoved);
console.log(arr);
const firstRemoved = arr.shift();
console.log(firstRemoved);
console.log(arr);

// Read array
console.log(arr.indexOf(2));
console.log(arr.indexOf(5));
console.log(arr.includes(2));
console.log(arr.includes(5));

const arrData = [
    'Jon',
    45,
    ['Bob', 'Tim', 'Nic']
];
console.log(typeof arrData);

// Object
const objData = {
    name: 'Jon',
    age: 15,
    friends: ['Bob', 'Tim', 'Nic'],

    isFullAge: () => this.age > 18
}
console.log(typeof objData);

console.log(objData);
console.log(objData.name);
console.log(objData['name']);

console.log(`
${objData.name} has ${objData.friends.length} friends.
The best is ${objData.friends[0]}. `);
console.log(`
${objData.name} is ${objData.isFullAge() ? '' : 'not'} full age.`)

