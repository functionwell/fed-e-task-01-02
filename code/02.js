const fp = require('lodash/fp');
const { Maybe, Container } = require('./support');

// 练习1
let maybe = Maybe.of([5, 6, 1]);
let ex1 = fp.map(fp.add(1));
// console.log(maybe.map(ex1));

// 练习2
let xs = Container.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do']);
let ex2 = fp.first;
// console.log(xs.map(ex2));

// 练习3
let safeProp = fp.curry(function (x, o) {
  return Maybe.of(o[x]);
});
let user = { id: 2, name: 'Albert' };
let ex3 = (user) => safeProp('name')(user).map(fp.first);
// console.log(ex3(user));

// 练习4
let ex4 = function (n) {
  if (n) {
    return parseInt(n);
  }
};

ex4 = (n) => Maybe.of(n ? n : undefined).map(parseInt);
// console.log(ex4(''));
