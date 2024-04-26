class Car {
    test() {
        console.log("rev");
    }
}

const mixin1 = {
    rev() {
        console.log("rev");
    }
}

// adding the mixin "mixin1" to Class Car to extend it
Object.assign(Car.prototype, mixin1)
const car = new Car()
car.rev()