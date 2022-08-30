const rewire = require("rewire");

describe("1. isPlainObject", () => {
  test("the function 'isPlainObject' must be defined", () => {
    const solution = rewire("../solution");
    const isPlainObject = solution.__get__("isPlainObject");
    expect(isPlainObject).toBeDefined();
  });

  test("it should return true when an object is passed to it as an argument", () => {
    const solution = rewire("../solution");
    const isPlainObject = solution.__get__("isPlainObject");
    expect(isPlainObject({key: 'value'})).toBeTruthy();
  });

  test("it should return false when something other than an object is passed to it as an argument", () => {
    const solution = rewire("../solution");
    const isPlainObject = solution.__get__("isPlainObject");
    expect(isPlainObject([1,2,3])).toEqual(false);
    expect(isPlainObject('hello')).toEqual(false);
    expect(isPlainObject(5)).toEqual(false);
  });
});

describe("2. makePairs", () => {
  test("the function 'makePairs' must be defined", () => {
    const solution = rewire("../solution");
    const makePairs = solution.__get__("makePairs");
    expect(makePairs).toBeDefined();
  });

  test("it expects an object as an argument and must return an array with each key:value pair of the given object as a nested array", () => {
    const solution = rewire("../solution");
    const makePairs = solution.__get__("makePairs");
    expect(makePairs({key: 'value', hello: 'world', num: 99})).toEqual([['key','value'],['hello','world'],['num',99]]);
  });
})

describe("3. without", () => {
  test("the function 'without' must be defined", () => {
    const solution = rewire("../solution");
    const without = solution.__get__("without");
    expect(without).toBeDefined();
  });

  test("it can take as many parameters as you want but expects the first to be an object, it should return that object without whatever parameters come after it", () => {
    const solution = rewire("../solution");
    const without = solution.__get__("without");
    expect(without({key: 'value', hello: 'world', num: 99},'hello','num')).toEqual({key: 'value'});
  });
})

describe("4. isEmpty", () => {
  test("the function 'isEmpty' must be defined", () => {
    const solution = rewire("../solution");
    const isEmpty = solution.__get__("isEmpty");
    expect(isEmpty).toBeDefined();
  });

  test("it expects an object as an argument and must return true if the object is empty", () => {
    const solution = rewire("../solution");
    const isEmpty = solution.__get__("isEmpty");
    expect(isEmpty({hello: undefined})).toBeTruthy();
  });

  test("it expects an object as an argument and must return false if the object is not empty", () => {
    const solution = rewire("../solution");
    const isEmpty = solution.__get__("isEmpty");
    expect(isEmpty({key: 'value', hello: 'world'})).toEqual(false);
    expect(isEmpty({key: 'value', hello: undefined})).toEqual(false);
  });
})

describe("5. isEqual", () => {
  test("the function 'isEqual' must be defined", () => {
    const solution = rewire("../solution");
    const isEqual = solution.__get__("isEqual");
    expect(isEqual).toBeDefined();
  });

  test("it takes 2 parameters and returns true if both are the same object", () => {
    const solution = rewire("../solution");
    const isEqual = solution.__get__("isEqual");
    expect(isEqual({key: 'value'},{key: 'value'})).toBeTruthy();
  });

  test("it takes 2 parameters and returns false if both are not the same object", () => {
    const solution = rewire("../solution");
    const isEqual = solution.__get__("isEqual");
    expect(isEqual({key: 'value'},{anotherKey: 'value'})).toEqual(false);
  });
})

describe("6. invoke", () => {
  test("the function 'invoke' must be defined", () => {
    const solution = rewire("../solution");
    const invoke = solution.__get__("invoke");
    expect(invoke).toBeDefined();
  });

  test("it should take 4 parameters, the first is an object, the second is the path to the array inside that object, the third is the array method and finally the forth is the arguments for that array method, the function must apply that method to the targeted array", () => {
    const solution = rewire("../solution");
    const invoke = solution.__get__("invoke");
    expect(invoke({key: { hello: [6,7,8]}},'key.hello','splice',[1,2])).toEqual([7,8]);
  });
})

describe("7. isEmptyDeep", () => {
  test("the function 'isEmptyDeep' must be defined", () => {
    const solution = rewire("../solution");
    const isEmptyDeep = solution.__get__("isEmptyDeep");
    expect(isEmptyDeep).toBeDefined();
  });

  test("it must check if a nested object is empty and return true if so", () => {
    const solution = rewire("../solution");
    const isEmptyDeep = solution.__get__("isEmptyDeep");
    expect(isEmptyDeep({key: {hello: undefined}})).toBeTruthy();
  });

  test("it must check if a nested object is empty and return false if it's not", () => {
    const solution = rewire("../solution");
    const isEmptyDeep = solution.__get__("isEmptyDeep");
    expect(isEmptyDeep({key: 'value', hello: 'world'})).toEqual(false);
    expect(isEmptyDeep({key: 'value', hello: undefined})).toEqual(false);
    expect(isEmptyDeep({key:{hello: undefined, num: 99}})).toEqual(false);
  });
})

describe("8. isEqualDeep", () => {
  test("the function 'isEqualDeep' must be defined", () => {
    const solution = rewire("../solution");
    const isEqualDeep = solution.__get__("isEqualDeep");
    expect(isEqualDeep).toBeDefined();
  });

  test("it must compare 2 nested objects and returns true if they are equal", () => {
    const solution = rewire("../solution");
    const isEqualDeep = solution.__get__("isEqualDeep");
    expect(isEqualDeep({key: 'value',nested: {num:99}},{key: 'value',nested: {num:99}})).toBeTruthy();
  });

  test("it must compare 2 nested objects and returns false if they are not equal", () => {
    const solution = rewire("../solution");
    const isEqualDeep = solution.__get__("isEqualDeep");
    expect(isEqualDeep({key: 'value',nested: {num:100}},{key: 'value',nested: {num:99}})).toEqual(false);
  });
})

describe("9. intersection", () => {
  test("the function 'intersection' must be defined", () => {
    const solution = rewire("../solution");
    const intersection = solution.__get__("intersection");
    expect(intersection).toBeDefined();
  });

  test("it must compare 2 objects and return the common part", () => {
    const solution = rewire("../solution");
    const intersection = solution.__get__("intersection");
    expect(intersection({key: 'value', hello: 'world', num: 99},{anotherKey: 'value', hello: 'world', num: 99})).toEqual({hello: 'world', num: 99});
  });
})

describe("10. intersectionDeep", () => {
  test("the function 'intersectionDeep' must be defined", () => {
    const solution = rewire("../solution");
    const intersectionDeep = solution.__get__("intersectionDeep");
    expect(intersectionDeep).toBeDefined();
  });

  test("it must compare 2 nested objects and return the common part", () => {
    const solution = rewire("../solution");
    const intersectionDeep = solution.__get__("intersectionDeep");
    expect(intersectionDeep({key: 'value', nested:{hello: 'world'}},{anotherKey: 'value', nested:{hello: 'world', num: 99}})).toEqual({nested: {hello: 'world'}});
  });
})