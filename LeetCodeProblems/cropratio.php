<?php

class CropRatio
{
    private $totalWeight = 0 ;
    private $crops = [];

    public function add(string $name, int $cropWeight) : void
    {

        if(!array_key_exists($name, $this->crops)) {
            $this->crops[$name] = $cropWeight;
        }else{
            $this->crops[$name] += $cropWeight;
        }

        $this->totalWeight += $cropWeight;
    }

    public function proportion(string $name) : float
    {
        if( $this->totalWeight == 0 )
            return 0;
        return $this->crops[$name] / $this->totalWeight;
    }
}

$cropRatio = new CropRatio;
$cropRatio->add('Wheat', 0);
$cropRatio->add('Wheat', 0);
$cropRatio->add('Rice', 0);

echo "Wheat: " . $cropRatio->proportion('Wheat');