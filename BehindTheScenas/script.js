'use strict';

// Scope
function calcAge(bithYear) {
  const age = 2037 - bithYear;
  console.log(firstName);

  function printAge() {
    let output = `${firstName} You are ${age}, born in ${bithYear}`;
    console.log(output);

    if (bithYear >= 1981 && bithYear <= 1996) {
      var millenial = true;
      const firstName = 'Bill';
      const str = `You are milenium ${firstName}`;
      console.log(str);

      output = `Reassigning value`;
    }

    console.log(millenial);
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jon';
calcAge(1991);

//var - is global
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

//**************************** */
// this keyword
console.log(this);

const calcAge1 = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge1(2012);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(2012);

const jonas = {
  year: 2000,
  calcAge: function () {
    // this - refer to the colled object
    console.log(this);
    console.log(2037 - this.year);

    // this - is in scope one up - refer to the object
    const extraCalc = () => `This is extra ${2030 - this.year}`;
    console.log(extraCalc());
  },

  // this - is in scope one up
  greet: () => `This key refer to window object - ${this.year}`,
};

jonas.calcAge();
console.log(jonas.greet());

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;

matilda.calcAge();

const f = jonas.calcAge;
console.log(f);

//******************************* */
// argument keyword
const minus = function (a, b) {
  console.log(arguments);
  console.log(a - b);
};
minus(10, 1, 3);

//************************* */
// premitive values
let lastName = 'Will';
let oldLastName = lastName;
lastName = 'Bill';
console.log(lastName, oldLastName);

// refirance value
const jes = {
  fn: 'Jes',
  ln: 'Will',
  age: 27,
  fam: ['A', 'B', 'C'],
};
const mariedJes = jes;
mariedJes.ln = 'Bib';
console.log('Befor: ', jes);
console.log('After: ', mariedJes);

// shellow clone
const jesCloneShellow = Object.assign({}, jes);

jesCloneShellow.ln = 'Maried';
jesCloneShellow.fam.push('D');

console.log('Befor After jes: ', jes);
console.log('After: ', jesCloneShellow);
