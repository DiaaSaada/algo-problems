<?php

// Define a prototype interface
interface Prototype {
    public function clone(): Prototype;
}

// Concrete prototype class
class Car implements Prototype {
    private $model;

    public function __construct(string $model) {
        $this->model = $model;
    }

    public function getModel(): string {
        return $this->model;
    }

    // Clone method to create a copy of the object
    public function clone(): Prototype {
        return new Car($this->model);
    }
}

// Client code
$prototypeCar = new Car('Toyota Camry');

// Clone the prototype to create new objects
$newCar1 = $prototypeCar->clone();
$newCar2 = $prototypeCar->clone();

// Output the models of the new cars
echo "New Car 1 Model: " . $newCar1->getModel() . "\n";
echo "New Car 2 Model: " . $newCar2->getModel() . "\n";