'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

const openingHours = {
  [days[3]]: {
    open: 12,
    close: 22,
  },
  [days[4]]: {
    open: 11,
    close: 23,
  },
  [days[6]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //object literals
  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    time = '10:00',
    address = 'Manila',
    starterIndex = 0,
    mainIndex = 0,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3},`);
  },

  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Coding Challenge #4

// // Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

// // The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

// // THIS TEST DATA (pasted to textarea)
// // underscore_case
// //  first_name
// // Some_Variable
// //   calculate_AGE
// // delayed_departure

// // SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// // underscoreCase      ✅
// // firstName           ✅✅
// // someVariable        ✅✅✅
// // calculateAge        ✅✅✅✅
// // delayedDeparture    ✅✅✅✅✅

// // HINT 1: Remember which character defines a new line in the textarea 😉
// // HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
// // HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
// // HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

// // Afterwards, test with your own test data!

// // GOOD LUCK 😀

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');

//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');

//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Working With Strings - Part 3

// // Split and join
// console.log('a+very+nice+string'.split('+'));
// console.log('Jonas Schmedtmann'.split(' '));

// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('jessica ann smith davis');
// capitalizeName('jonas schmedtmann');

// // Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(20, '+').padEnd(30, '+'));
// console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(64637836));
// console.log(maskCreditCard(43378463864647384));
// console.log(maskCreditCard('334859493847755774747'));

// // Repeat
// const message2 = 'Bad waether... All Departues Delayed... ';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
// };
// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Working With Strings - Part 2

// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// // Fix capitalization in name
// const passenger = 'jOnAS'; // Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Comparing emails
// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.Io \n';

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// // replacing
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';

// console.log(announcement.replace('door', 'gate'));
// // console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));

// // Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Airb'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW ARirbus family');
// }

// // Practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();

//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard!');
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Working With Strings - Part 1
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
//   else console.log('You got lucky 😎');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('jonas'));
// console.log(typeof new String('jonas'));

// console.log(typeof new String('jonas').slice(1));

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // MAPS: Iteration
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

// // Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// // Convert map to array
// console.log([...question]);
// // console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

// // MAPS: Fundamentals
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear();

// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // SETS
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet);

// console.log(new Set('Jonas'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// // ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );

// console.log(new Set('jonasschmedtmann').size);

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //LOOPING OBJECTS: OBJECT KEYS, VALUES AND ENTRIES (.keys, .values, .entries turn an object into arrays)
// // PROPERTY NAME
// const properties = Object.keys(restaurant.openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // PROPERTY VALUES
// const values = Object.values(restaurant.openingHours);
// console.log(values);

// // Entries
// const entries = Object.entries(restaurant.openingHours);
// console.log(entries);
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}.`);
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//OPTIONAL CHAINING (asking if it exist) ?.
// without using OPTIONAL chaining (imagine deep nested ang object from api so taas kaayu ang conditions if imu i tagsa2 ug check if value exist)
// if (restaurant.openinghours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);
// // using OPTIONAL CHAINING if wala ni exist matik mu return ug undefined instead of an error
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);
// // real world example with using nullish coalescing

// for (const day of days) {
//     const open = restaurant.openingHours[day]?.open ?? 'closed';
//     console.log(`On ${day} we open at ${open}`);
// }
// //optional chaining OPTIONAL CHAINING in METHODS
// console.log(restaurant.order?.(0, 1) ?? 'Method doesnt Exist');
// console.log(restaurant.orderBilat?.(0, 1) ?? 'Method doesnt Exist');

// // //optional chaining OPTIONAL CHAINING in ARRAYS
// const user = [{ name: 'joel', email: 'fhmalazarte@gmail.com' }];
// console.log(user[0]?.email ?? 'User array is empty');
// // not using chaining Optional
// if (user.length > 0) {
//   console.log(user[0].name);
// } else {
//   console.log('Array is Empty');
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // FOR OF LOOP
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);

// //.entries() method will give the index of an element
// //used destructuring instead of item as a iterator
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1} : ${el}`);
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SHORT CIRCUITING
// USE any data type, return any data type, short circuiting
// the first truthy will be the value else the last falsy will be the value / better use than ternary operator or if else
// console.log('----OR----');
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// restaurant.numGuest = 23;

// const guest1 = restaurant.numGuest ? restaurant.numGuest : 40; //doesnt work if the initial value of restuarant.numGuest is 0
// console.log(guest1);

// const guest2 = restaurant.numGuest || 10; //doesnt work if the initial value of restuarant.numGuest is 0
// console.log(guest2);

// console.log('----AND----'); // works opposite from || short circuit
// console.log(0 && 'jonas'); // if first is false it will be falsy matic first operand ang e value
// console.log(7 && 'jonas'); // if purus true matic ang last operand ang e value
// // Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('tae', 'tubol');
// }
// restaurant.orderPizza && restaurant.orderPizza('tae', 'tubol');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// REST PARAMETER
// 1) Destructuring
// SPREAD, because its on the right side of =
// const arr = [1, 2, ...[3, 4]];

// // REST, because its on the left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// //Rest element must be the last elements and there will be 1 rest in every destructuring elements
// const [pizza, , risotto, ...otherFoods] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFoods);

// // OBJECTS
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2) REST used in functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add(1, 2);
// add(1, 2, 3);
// add(1, 2, 3, 4, 5);

// const x = [23, 5];
// add(...x);

// restaurant.orderPizza('mushroom', 'tae', 'igit', 'tubol');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // SPREAD OPERATOR
// const arry = [1, 2, 3];
// const newArr = [4, 5, ...arry];
// console.log(arry);
// console.log(newArr); //logging the array
// console.log(...newArr); //logging the elements of array

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // Join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // Iterables: arrays, strings, maps, sets, BUT NOT objects
// const str = 'joel';
// const letters = [...str, ' ', 'S'];
// console.log(letters);

// // passing multiple values to a function real world example
// const ingredients = [
//   //   prompt("Let's make pasta Ingredients 1"),
//   //   prompt('Ingredients 2'),
//   //   prompt('Ingredients 3'),
// ];
// restaurant.orderPasta(...ingredients);

// // OBJECTS copying using spread operator and not "Object.assign()"
// const newRestaurant = {
//   foundedIn: '1992',
//   ...restaurant,
//   founder: 'Florenz Malazarte',
// };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'JoeRenzo Colantes';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // DESTRUCTURING OBJECTS
// restaurant.orderDelivery({
//   time: '12:00',
//   address: 'Colis street tabunok cebu',
//   starterIndex: 2,
//   mainIndex: 1,
// });

// restaurant.orderDelivery({
//   time: '12:00',
//   address: 'Colis street tabunok cebu',
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);
// console.log();

// // Default values in objects desstructuring
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // mutating variables object destructuring
// let a = 112;
// let b = 223;
// const obj = { a: 23, b: 18, c: 56 };
// ({ a, b } = obj); //enclose with parenthesis
// console.log(a, b);

// // destructuring nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // DESTRUCTURING ARRAYS
// const arr = [2, 3, 4];
// const [a, b, c] = arr;
// console.log(a, b, c);

// let [food1, food2] = restaurant.order(2, 0);
// console.log(food1, food2);

// // mutating variables
// [food1, food2] = [food2, food1];
// console.log(food1, food2);

// // Destructuring nested
// const nested = [1, 2, [3, 4]];
// // const [i, ,j] = nested;
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [q = 1, w = 3, e = 4] = [8, 9];
// console.log(q, w, e);
