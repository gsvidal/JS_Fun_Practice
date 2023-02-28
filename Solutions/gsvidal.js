// identity() takes an argument and returns that argument
const identity = (x) => {
  return x;
};

// Write a binary function addb that takes two numbers and returns their sum
const addb = (x, y) => {
  return x + y;
};

// Write a binary function subb that takes two numbers and returns their difference
const subb = (x, y) => {
  return x - y;
};
// Write a binary function mulb that takes two numbers and returns their product
const mulb = (x, y) => {
  return x * y;
};

// Write a binary function minb that takes two numbers and returns the smaller one
const minb = (x, y) => {
  return x < y ? x : y;
};

// Write a binary function minb that takes two numbers and returns the smaller one
const maxb = (x, y) => {
  return x > y ? x : y;
};

// Write a binary function minb that takes two numbers and returns the smaller one
const add = (initial = 0, ...nums) => {
  return nums.reduce((prev, cur) => prev + cur, initial);
};

const mul = (initial = 1, ...nums) => {
  return nums.reduce((prev, cur) => prev * cur, initial);
};

const sub = (...nums) => {
  return nums.reduce((prev, cur) => prev - cur);
};

const min = (...nums) => {
  return nums.reduce((prev, cur) => Math.min(prev, cur));
};

const max = (...nums) => {
  return nums.reduce((prev, cur) => Math.max(prev, cur));
};

const addRecurse = (...nums) => {
  if (nums.length === 1) return nums[0];
  return nums.pop() + addRecurse(...nums);
};

const mulRecurse = (...nums) => {
  if (nums.length === 1) return nums[0];
  return nums.pop() * mulRecurse(...nums);
};

const minRecurse = (...nums) => {
  if (nums.length === 1) return nums[0];
  return Math.min(nums.pop(), minRecurse(...nums));
};

const maxRecurse = (...nums) => {
  if (nums.length === 1) return nums[0];
  return Math.max(nums.pop(), maxRecurse(...nums));
};

// const not = (func) => (x) => !func(x)
function not(func) {
  return function (x) {
    return !func(x);
  };
}

const acc = (func, initial) => {
  return function (...nums) {
    return func(initial, ...nums);
  };
};

module.exports = {
  identity,
  addb,
  subb,
  mulb,
  minb,
  maxb,
  add,
  sub,
  mul,
  min,
  max,
  addRecurse,
  mulRecurse,
  minRecurse,
  maxRecurse,
  not,
  acc,
  // accPartial,
  // accRecurse,
  // fill,
  // fillRecurse,
  // set,

  // identityf,
  // addf,
  // liftf,
  // pure,
  // curryb,

  // curry,
  // inc,
  // twiceUnary,
  // doubl,
  // square,

  // twice,
  // reverseb,
  // reverse,
  // composeuTwo,
  // composeu,

  // composeb,
  // composeTwo,
  // compose,
  // limitb,
  // limit,

  // genFrom,
  // genTo,
  // genFromTo,
  // elementGen,
  // element,

  // collect,
  // filter,
  // filterTail,
  // concatTwo,
  // concat,

  // concatTail,
  // gensymf,
  // gensymff,
  // fibonaccif,
  // counter,

  // revocableb,
  // revocable,
  // extract,
  // m,
  // addmTwo,

  // addm,
  // liftmbM,
  // liftmb,
  // liftm,
  // exp,

  // expn,
  // addg,
  // liftg,
  // arrayg,
  // continuizeu,
  
  // continuize,
  // vector,
  // exploitVector,
  // vectorSafe,
  // pubsub,
  // mapRecurse,
  // filterRecurse,
};
