const {
  testSum,
  testSumReduce,
  testFilter,
  testOnlySmallStringsFilter,
  testObjectMethodOne,
  testObjectMethodTwo,
  testObjectLoopOne,
  testObjectLoopTwo,
  testObjectLoopThree
} = require("../src/data_structures");

test("Test the sum function", () => {
  expect(testSum()).toBe(55);
});

test("Test the sumReduce function", () => {
  expect(testSumReduce()).toBe(55);
});

test("Test the filterOddNumber function", () => {
  expect(testFilter()).toStrictEqual([2, 4, 6, 8, 10]);
});

test("Test function to filter out numbers and small strings", () => {
  expect(testOnlySmallStringsFilter()).toStrictEqual([
    "test",
    "is",
    "a",
    "trash",
    "space"
  ]);
});

test("Test for correct object keys", () => {
  expect(testObjectMethodOne()).toStrictEqual(["0", "1", "2"]);
});

test("Test for correct object values", () => {
  expect(testObjectMethodTwo()).toStrictEqual(["Matt", "David", "Ashley"]);
});

test("Test for correct string of keys for nums object", () => {
  expect(testObjectLoopOne()).toBe("first_second_third_last_");
});

test("Test for correct string of values for nums object", () => {
  expect(testObjectLoopTwo()).toBe("1_57_89_-11_");
});

test("Test for correct sum of values for numsIterable object", () => {
  expect(testObjectLoopThree()).toBe(136);
});
