console.log("Data Strutures");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ----------------------------------------------------------

//! Loop through the numbers array and return the total sum of the numbers.
const sum = arr => {
  /**
   * Sum the number of an array
   * @param arr array of numbers
   * @return sum of the numbers
   */

  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
};

//console.log(sum(numbers));

//* Test
exports.testSum = () => {
  return sum(numbers);
};

// ----------------------------------------------------------

//! Loop through the numbers array again, using the REDUCE method, and return the total sum of the numbers.
const sumReduce = arr => {
  /**
   * Sum the number of an array
   * @param arr array of numbers
   * @return sum of the numbers
   */

  const total = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  return total;
};

//console.log(sumReduce(numbers));

//* Test
exports.testSumReduce = () => {
  return sumReduce(numbers);
};

// ----------------------------------------------------------

//! Loop through the numbers array and return an array of only the even numbers.
const filterOddNumbers = arr => {
  /**
   * Filter out the odd numbers
   * @param arr array of numbers
   * @return arr array of even numbers
   */
  const evenNumbers = arr.filter(currentValue => {
    return currentValue % 2 === 0;
  });
  return evenNumbers;
};

//console.log(filterOddNumbers(numbers));

//* Test
exports.testFilter = () => {
  return filterOddNumbers(numbers);
};

// ----------------------------------------------------------

const words = [
  "test",
  "numbers",
  "is",
  "a",
  10,
  "trash",
  "a space is in here",
  "spa ce"
];

//! Make the words array look like this.
//* Rules :
// Only strings
// Remove spaces first
// no words longer than 5 characters
//! Final Array = ["test, "is", "a", "trash", "space"];
const onlySmallStringsFilter = arr => {
  // Filter out numbers
  const justWordsArr = arr.filter(value => typeof value === "string");

  // Remove spaces function
  const removeSpaces = word => {
    return word.split(" ").join("");
  };

  // Remove the spaces
  const noSpacesArr = justWordsArr.map(word => {
    return removeSpaces(word);
  });

  // Remove strings that are longer than 5 characters
  const finalArray = noSpacesArr.filter(word => {
    return word.length <= 5;
  });

  return finalArray;
};

//console.log(onlySmallStringsFilter(words));

//* Test
exports.testOnlySmallStringsFilter = () => {
  return onlySmallStringsFilter(words);
};

// ----------------------------------------------------------

// Object Test
