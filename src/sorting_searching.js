// Bubble Sort O(n^2)

console.log("Sorting ------------------------ ");

const numsArray = [5, 3, 1, 4, 6];

console.log(numsArray);

function slowBubbleSort(arr) {
  const length = arr.length;

  // Overall loop
  for (let i = 0; i < length; i++) {
    // Comparsion loop
    for (let j = 0; j < length; j++) {
      // Check if left index is greater than right
      if (arr[j] > arr[j + 1]) {
        // Swap
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const sortedArr = slowBubbleSort(numsArray);

console.log(sortedArr);
console.log("---------------------------------------");

// Use JavaScript Sort Method

const longNumsArr = [9345, 5555, 2687, 1111, 3499, 7810, 106];

console.log(longNumsArr);

longNumsArr.sort((a, b) => a - b);

console.log(longNumsArr);

console.log("Searching ------------------------ ");

// Binary Search O(log n)

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    // Did we land on the target
    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1; // Move the start to the right one index
    } else {
      right = mid - 1; // Move the end to the left one index
    }
  }
  // Could not find target
  return -1;
}

console.log(binarySearch(longNumsArr, 5555));
console.log(binarySearch(longNumsArr, 0));

// Use build in search method

const indexFoundAt = longNumsArr.findIndex(element => {
  return element === 5555;
});

console.log(indexFoundAt);
