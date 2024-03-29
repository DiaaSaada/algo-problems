<?php

/*
 * Create a class, StatClass.
 *
 * At instantiation
 *     It accepts any number of parameters of various basic PHP types.
 *     It stores the parameters to an array called $data.
 *
 * At destruction
 *     It creates an array where:
 *         the indices are data types encountered in the parameters.
 *         the values are the frequencies of the data types.
 *     It sorts the array values in descending order.
 *     It uses the print_r function to print the array.
 */

class StatClass
{

    public $data = [];

    public function __construct(...$args)
    {
        $this->data = [...$args];
    }

    public function __destruct()
    {
        $temp = [];
        foreach ($this->data as $k) {
            if (!isset($temp[gettype($k)])) {
                $temp[gettype($k)] = 0;
            }
            $temp[gettype($k)] += 1;
        }
        arsort($temp);
        print_r($temp);
    }

}

$fptr = fopen(getenv('OUTPUT_PATH'), 'w');

$data = [];

while ($_ = fgets(STDIN)) {
    eval(sprintf('$data[] = %s;', trim($_)));
}

ob_start();
$object = new StatClass(
    ...$data
);
unset(
    $object
);

fwrite($fptr, ob_get_clean());

fclose($fptr);
