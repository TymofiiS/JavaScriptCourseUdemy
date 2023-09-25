console.log('Test');
let a = "Next test";
console.log(a);

// "Test"
console.log(typeof true);
console.log(typeof a);
console.log(typeof undefined);
console.log(typeof null);

const PI = 3.14;
console.log(PI);

const concantenatedStr = `${a}, Pi = ${PI}`;
console.log(concantenatedStr);

console.log("String \n\
with \n\
multiline");
console.log(`String
with
multiline`);

const num = 123.6547;
const str = "123.6547";
const nanStr = "d123";
console.log(String(num), num);
console.log(Number(str), str);
console.log(Number(nanStr), typeof Number(nanStr));

let n = "1" + 1;
n = n - 1;
console.log(`n = ${n}`);

let b;
console.log(`b is ${b || b === 0 ? 'defined' : 'undefined'}`)
b = 5;
console.log(`b is ${b || b === 0 ? 'defined' : 'undefined'}`)
b = 0;
console.log(`b is ${b || b === 0 ? 'defined' : 'undefined'}`)

// let c = prompt("Input 23");
const c = "23";
console.log(c === 23 ? "Equal" : "Not equal");
console.log(Number(c) === 23 ? "Equal" : "Not equal");
console.log(c == 23 ? "Equal" : "Not equal");