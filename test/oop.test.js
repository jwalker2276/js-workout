const {
  testClassOneConstruction,
  testClassOneProperties,
  testClassTwoProperties
} = require("../src/oop");

test("Test classOne owner setter", () => {
  expect(testClassOneConstruction()).not.toBe(
    "The owner of the vehicle is John."
  );
});

test("Test output of classOne owner", () => {
  expect(testClassOneConstruction()).toBe("The owner of the vehicle is James.");
});

test("Test classTwo price setter", () => {
  expect(testClassTwoProperties()).not.toBe(
    "The owner of this car is Sam and the price is $15000."
  );
});

test("Test output of classOne properties", () => {
  expect(testClassOneProperties()).toBe(
    "The owner of this car is James and the price is $5000."
  );
});

test("Test output of classTwo properties", () => {
  expect(testClassTwoProperties()).toBe(
    "The owner of this car is Sam and the price is $25000."
  );
});
