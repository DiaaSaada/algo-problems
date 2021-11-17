<?php

interface IEngine
{
    function start();
}

interface ICharger
{
    function charge();
}

class Car
{

    /**
     * @var IEngine
     */
    private $engine;

    /**
     * @var ICharger
     */
    private $charger;

    public function __construct(IEngine $engine, ICharger $charger)
    {
        $this->charger = $charger;
        $this->engine = $engine;
    }


    function start()
    {
        $this->engine->start();
    }

    function charge()
    {
        $this->charger->charge();
    }

}


class PetrolEngineStrategy implements IEngine{

    function start()
    {
        echo "Start Petrol Engine... Vroom,Vroom,Vroom  \n" ;
    }
}
class ElectricEngineStrategy implements IEngine{

    function start()
    {
        echo "Start Electric Engine \n" ;
    }
}
class PetrolCarChargerStrategy implements ICharger{

    function charge()
    {
        echo "You can't charge it!, go to gas station\n" ;
    }
}
class ElectricCarChargerStrategy implements ICharger{

    function charge()
    {
        echo "Charging Electric Car Battery \n" ;
    }
}

$electricCar =  new Car( new ElectricEngineStrategy(), new ElectricCarChargerStrategy());
$electricCar->charge();
$electricCar->start();
echo "---------------------------------------------------\n" ;
$petrolCar =  new Car( new PetrolEngineStrategy(), new PetrolCarChargerStrategy());
$petrolCar->charge();
$petrolCar->start();