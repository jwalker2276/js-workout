console.log("OOP");

//! Create base class
//
//* Write a constructor with the owner of vehicle
//* Define getter for type
//* Define setter for type
//* Define method to output this message.
// "The owner of the vehicle is John Smith.";
//

//! Extend the vehicle class to be a car.
//
//* Write a constructor with the owner and price of the car.
//* Define getter and setter for the car's price.
//* Define a method to output this message.
// "The owner of this car is John Smith and the price is 5000".

//! Create two cars named carOne, carTwo
// Owners (John, Sam)
// Price (5000, 15000)

//! Set the owner of carOne to "James"

//! Set the price of carTwo to 25000

// Log statements for manual testing
//// Output the owner of carOne
////console.log(carOne.outputOwner());
//// Output the owner and price of both cars.
////console.log(carOne.outputOwnerAndPrice());
////console.log(carTwo.outputOwnerAndPrice());

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
