<?php
/**
 * Factory pattern used to
 * 1- encapsulate the complexity of creating instances from different subs of a base class e.g. CAR -> EVCar, PertolCar
 * 2- encapsulate the logic  of which sub of a base class to create e.g. CAR -> EVCar, PertolCar
 * Another example could be:
 * a factory to create DB instance Mysql or Oracle based on config file
 */

/**
 * Class Car
 */
abstract class Car
{

    const EV = 'EV' ;
    const PETROL = 'PETROL' ;

    public $vin;


}

class EvCar extends  Car
{

    public $kwHrBattery;
    public function __construct()
    {
        // do some stuff here for EvCar
    }
}

class PetrolCar extends  Car
{

    public $engineSizeCC;

    public function __construct()
    {
         // do some stuff here for PetrolCar
    }

}

interface ICarFactory
{

    public static function makeCar($type): ?Car;
}

class  CarFactory implements ICarFactory
{



    public static function makeCar( $type ): ?Car
    {
        switch ($type ){
            case Car::EV:
                $car =  new EvCar();
                $car->kwHrBattery =  250 ;
                break;
            case Car::PETROL:
                $car =  new PetrolCar();
                $car->engineSizeCC =  2200 ;
                break;
            default:
                return null;
        }
        $car->vin = random_int(10000000000000000, 99999999999999999) ;
        return $car ;
    }
}

//---------END OF PATTERN,  now client code

echo "I want to create two cars\n" ;

/**
 * @var Car
 */
$car1 = CarFactory::makeCar(Car::EV) ;
var_dump(  $car1 );

/**
 * @var Car
 */
$car2 =  CarFactory::makeCar( Car::PETROL) ;
var_dump(  $car2 );

/**
 * @var Car
 */
$car3 =  CarFactory::makeCar( null) ;
var_dump(  $car3 );