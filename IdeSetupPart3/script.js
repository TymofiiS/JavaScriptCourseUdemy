'use strict';

const abcd = 'abcd';
console.log(abcd);
console.log('test message');

console.log('third message');

// input [17, 21, 23]
// will print
// "... 17C in 1 days ... 21C in 2 days ... 23C in 3 days"
const input = [17, 21, 23];
let res = '';
let day = 1;
input.forEach(x => (res += `... ${x}C in ${day++} days`));
console.log(res);
console.log('yes + 1');
