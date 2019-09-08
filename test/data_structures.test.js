const {
  testSum,
  testSumReduce,
  testFilter,
  testOnlySmallStringsFilter
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

test("Test function the filter out numbers and small strings", () => {
  expect(testOnlySmallStringsFilter()).toStrictEqual([
    "test",
    "is",
    "a",
    "trash",
    "space"
  ]);
});
