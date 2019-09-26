console.log("OOP");

//! Create base class called "Vehicle"
//* Write a constructor that takes a string name for the owner of the vehicle
//* Define getter "getOwner" for the owner member
//* Define setter "setOwner" for the owner member
//* Define a method "outputOwner" to return this message.
// "The owner of the vehicle is John Smith.";

// Vehicle Class

//! Extend the vehicle class and name it Car.
//* Write a constructor that takes in the owner and price of the car.
//* Define getter "getPrice" and setter "setPrice" for the car members.
//* Define a method "outputOwnerAndPrice" to return this message.
// "The owner of this car is John Smith and the price is $5000".

// Car Class

//! Create two cars carOne, carTwo
// carOne = John, 5000
// carTwo = Sam, 15000

//! Update the owner of carOne to "James"

//! Update the price of carTwo to 25000

//! Functions for tests
exports.testClassOneConstruction = () => {
  return carOne.outputOwner();
};
exports.testClassOneProperties = () => {
  return carOne.outputOwnerAndPrice();
};
exports.testClassTwoProperties = () => {
  return carTwo.outputOwnerAndPrice();
};
