/* 
Q1 OOPs JS
    Create a Base class of your choice. 
    Add element properties to class considering 'encapsulation'. 
    Use Constructor to initialize properties. 
    Add a Prototype method getDetails() that return class info.
    Add static method to class. 
    Create another class that extends base class.
 */

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  static mileage(dist, fuelUsed) {
    return `Mileage is ${dist / fuelUsed} kmpl`;
  }

  Category(length) {
    if (length <= 4) return `${this.model} is a general car.`;
    else if (length > 4 && length < 7) return `${this.model} is a premium car.`;
    else return `value entered is not valid.`;
  }
  FuelType(fuel) {
    if (fuel === "battery" || (fuel === "ev") | (fuel === "hydrogen"))
      return `${this.model} is environment friendly.`;
    else if (fuel === "cng" || fuel === "strong hybrid")
      return `${this.model} better than other fossil fuel. Nice try`;
    else
      return `${this.model} is not environment friendly. Opt for cleaner fuel.`;
  }
  getModel() {
    return this.model;
  }
}

Car.prototype.getDetails = function () {
  return `Brand: ${this.brand}, Model: ${this.model}`;
};

class Purpose extends Car {
  FuelType(fuel) {
    const model = this.getModel();
    if (fuel === "cng" || fuel === "ev")
      return `${model} is mostly for commercial purpose.`;
    else return `${model} is probably for private use.`;
  }
}

let myCar = new Car("Honda", "Civic");
console.log(myCar.getDetails());
console.log(Car.mileage(500, 25));
console.log(myCar.Category(5));
console.log(myCar.FuelType("Petrol"));

let taxi = new Purpose("Tata", "Tigor EV");
console.log(taxi.getDetails());
console.log(taxi.FuelType("ev"));
