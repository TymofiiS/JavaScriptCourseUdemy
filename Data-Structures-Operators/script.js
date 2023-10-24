'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (stIndex, mainIndex) {
    return [this.starterMenu[stIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({ startInex = 1, adress, time = '19:00' }) {
    console.log(
      `Your order ${this.starterMenu[startInex]} will be delivered to ${adress} at ${time}`
    );
  },

  makePasta: function (a, b, c) {
    console.log(`a = ${a}, b = ${b}, c = ${c}`);
  },

  orderPizza: function (main, ...others) {
    console.log(`Main : ${main}`);
    others.forEach(x => console.log(`Extra: ${x}`));
  },
};

// Using default value in method
restaurant.orderDelivery({ adress: 'Some adress', time: '21:20' });

// Destruct array
const arr = [2, 3, 4, [5, 6]];
let [a, , c] = arr;
const [x1, , , [x3, x4]] = arr;
console.log(a, c);
console.log(x1, x3, x4);

// Switching variables
[c, a] = [a, c];
console.log(a, c);

// Return several values from function
const [sart, main] = restaurant.order(2, 1);
console.log(sart, main);

// Default value
const [y1 = 3, y2 = 5, y3 = 5] = [10, 11];
console.log(y1, y2, y3);

// Destruct object
const { name: n, mainMenu: mm, notExist: ne = ['one', 'two'] } = restaurant;
console.log(n, mm, ne);

// Mutating variables
let a1 = 10;
let a2 = 20;
const obj = { a1: 5, a2: 15 };
({ a1, a2 } = obj);
console.log(a1, a2);

// Nested object
const { openingHours: ohs } = restaurant;
console.log(ohs);
const {
  fri: { open, close },
} = ohs;
console.log(open, close);

// Spread array
const arr1 = [7, 8, 9];
const newArr1 = [1, 2, ...arr1];
console.log(newArr1);
console.log(...arr1);

// Copy array
const newMenu = [...restaurant.mainMenu];
console.log(newMenu);

// Join arrays
const fullMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(fullMenu);

// Spread any iterables
const n1 = 'Bob';
const n2 = [...n1, '', 'S.'];
console.log(n2);

// Read from keyboard:
//const ing = [prompt('Point 1:'), prompt('Point 2:'), prompt('Point 3:')];
//restaurant.makePasta(...ing);

// Copy object
const newRest = { ...restaurant };
newRest.name = 'New Name';
console.log(restaurant.name);
console.log(newRest.name);

// REST
const arr2 = [1, 2, 3, 4, 5];
const [a3, b3, ...others] = arr2;
console.log(a3, b3, others);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// REST in function input
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  numbers.forEach(element => (sum += element));
  return sum;
};
console.log(add(1, 2, 3));
console.log(add(1, 2, 3, 4, 5));

const x5 = [10, 20, 30];
console.log(add(...x5));

restaurant.orderPizza('Main ing', 'other1', 'other2');
restaurant.orderPizza('Main ing');
