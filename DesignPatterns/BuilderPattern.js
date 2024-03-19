// Define a builder class
class CarBuilder {
    constructor() {
        this.car = {};
    }

    // Step 1: Set the model of the car
    setModel(model) {
        this.car.model = model;
        return this;
    }

    // Step 2: Set the color of the car
    setColor(color) {
        this.car.color = color;
        return this;
    }

    // Step 3: Set the year of manufacture of the car
    setYear(year) {
        this.car.year = year;
        return this;
    }

    // Step 4: Set the price of the car
    setPrice(price) {
        this.car.price = price;
        return this;
    }

    // Get the constructed car object
    build() {
        return this.car;
    }
}

// Create a Director class to manage the construction process
class CarDirector {
    constructor(builder) {
        this.builder = builder;
    }

    // Construct a car with predefined steps
    constructSportsCar() {
        return this.builder.setModel("Sports Car").setColor("Red").setYear(2022).setPrice(50000).build();
    }

    // Construct a car with custom steps
    constructCustomCar(model, color, year, price) {
        return this.builder.setModel(model).setColor(color).setYear(year).setPrice(price).build();
    }
}

// Usage example
const carBuilder = new CarBuilder();
const carDirector = new CarDirector(carBuilder);

// Construct a sports car using predefined steps
const sportsCar = carDirector.constructSportsCar();
console.log("Sports Car:", sportsCar);

// Construct a custom car using custom steps
const customCar = carDirector.constructCustomCar("SUV", "Blue", 2023, 60000);
console.log("Custom Car:", customCar);