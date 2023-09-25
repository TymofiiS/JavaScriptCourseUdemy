'use strict'

// a = 5;
const a = 5;
console.log(a);

function f1(a) { return a - 2; }
const f2 = function (a) { return a - 2; }
const f3 = a => a - 2;
console.log(f1(10), f2(10), f3(10));