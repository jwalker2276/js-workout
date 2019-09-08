// Create base class
class Vehicle {
  // Write a constructor with the owner of vehicle
  constructor(owner) {
    this.owner = owner;
  }
  // Define getter for type
  getOwner() {
    return this.owner();
  }
  // Define setter for type
  setOwner(newOwner) {
    this.owner = newOwner;
  }
  // Define method to output this message.
  // "The owner of the vehicle is John Smith.";
  outputOwner() {
    return `The owner of the vehicle is ${this.owner}.`;
  }
}

// Extend the vehicle class to be a car.
class Car extends Vehicle {
  // Write a constructor with the owner and price of the car.
  constructor(owner, price) {
    // Set the owner vehicle
    super(owner);
    // Set the price of the vehicle
    this.price = price;
  }
  // Define getter and setter for the car's price.
  getPrice() {
    return this.price;
  }
  setPrice(newPrice) {
    this.price = newPrice;
  }
  // Define a method to output this message.
  // "The owner of this car is John Smith and the price is 5000".
  outputOwnerAndPrice() {
    return `The owner of this car is ${this.owner} and the price is $${this.price}.`;
  }
}

// Create two cars named carOne, carTwo
// Owners (John, Sam)
// Price (5000, 15000)
const carOne = new Car("John", 5000);
const carTwo = new Car("Sam", 15000);

// Set the owner of carOne to "James"
carOne.setOwner("James");
// Set the price of carTwo to 25000
carTwo.setPrice(25000);

// Output the owner of carOne
// console.log(carOne.outputOwner());
// Output the owner and price of both cars.
// console.log(carOne.outputOwnerAndPrice());
// console.log(carTwo.outputOwnerAndPrice());

// Functions for tests
// exports.testClassOneConstruction = () => {
//   return carOne.outputOwner();
// };
// exports.testClassOneProperties = () => {
//   return carOne.outputOwnerAndPrice();
// };
// exports.testClassTwoProperties = () => {
//   return carTwo.outputOwnerAndPrice();
// };
