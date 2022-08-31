//1
const data = { a: 1 };
const some = null;

const isPlainObject = (arg) => {
  return arg.constructor === Object;
};

console.log(isPlainObject(data)); // true
console.log(isPlainObject([1, 2, 3])); // true
console.log(isPlainObject(12)); // true

// //2
const data2 = { a: 1, b: 2 };

const makePairs = (obj) => Object.entries(obj);

console.log(makePairs(data2)); // [['a', 1], ['b', 2]]

// //3
const data3 = { a: 1, b: 2 };

const without = (obj, prop) => {
  delete obj[prop];
  return obj;
};

console.log(without(data3, "b")); // { a: 1 }

//4
const data4 = { a: 1, b: undefined };
const data40 = {};

const isEmpty = (obj) => Object.entries(obj).every((el) => el[1] === undefined);

console.log(isEmpty(data4)); // false
console.log(isEmpty(data40)); // true
console.log("Here", isEmpty({}));

5;
const data5 = { a: 1, b: 1 };
const data51 = { a: 1, b: 1 };
const data52 = { a: 1, b: 2 };

const isEqual = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
};

console.log(isEqual(data5, data51)); // true
console.log(isEqual(data5, data52)); // false

//6
const data6 = { a: { b: [1, 2, 3] } };
const invoke = (object, path, func, args) => {
  const split = path.split(".");

  const target = split.reduce((acc, key) => {
    acc = acc[key] ? acc[key] : object[key];
    return acc;
  }, {});

  return Array.prototype[func].apply(target, args);
};
console.log(invoke(data6, "a.b", "splice", [1, 2])); // [2, 3]

// console.log(Array.prototype[func].apply([1, 2, 3], [1, 2]));

// // //7
const data7 = { a: { b: undefined }, c: { d: undefined } };

const isEmptyDeep = (obj) => {
  for (const val1 of Object.values(obj)) {
    for (const val2 of Object.values(val1)) {
      if (val2 !== undefined) return false;
    }
  }

  return true;
};

console.log(isEmptyDeep(data7));

// //8
const data8 = { a: 1, b: { c: 1 } };
const data81 = { a: 1, b: { c: 1 } };
const data82 = { a: 1, b: { c: 2 } };

const isEqualDeep = (obj1, obj2) =>
  JSON.stringify(obj1) === JSON.stringify(obj2);

console.log(isEqualDeep(data8, data81)); // true
console.log(isEqualDeep(data8, data82)); // false

9;
const data9 = { a: 1, b: 2 };
const data91 = { c: 1, b: 2 };

const intersection = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);

  return keys1.reduce((acc, key) => {
    if (obj1[key] === obj2[key]) {
      acc[key] = obj1[key];
    }

    return acc;
  }, {});
};

console.log(intersection(data9, data91)); // { b: 2 }

const test = {};

test["newProp"] = "Here is it";
console.log(test);

// // //10
const data10 = { a: 1, b: { c: 3 } };
const data11 = { c: 1, b: { c: 3 } };

const intersectionDeep = (firstObj, secondObj) => {
  const firstObjKeys = Object.keys(firstObj);

  return firstObjKeys.reduce((acc = {}, key) => {
    if (firstObj[key] === secondObj[key]) {
      acc = {
        ...acc,
        [key]: firstObj[key],
      };
    }
    if (Array.isArray(firstObj[key]) && Array.isArray(secondObj[key])) {
      const isEqualArrays = isEqualDeep(firstObj[key], secondObj[key]);

      if (isEqualArrays) {
        acc = {
          ...acc,
          [key]: firstObj[key],
        };
      }
    } else if (
      typeof firstObj[key] === "object" &&
      typeof secondObj[key] === "object"
    ) {
      const hasIntersection = intersectionDeep(firstObj[key], secondObj[key]);

      if (Object.keys(hasIntersection).length !== 0) {
        acc = {
          ...acc,
          [key]: hasIntersection,
        };
      }
    }
    return acc;
  }, {});
};
console.log(intersectionDeep(data10, data11)); // { b: { c: 3 } }
