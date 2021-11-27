<?php


$stack = array("orange", "banana", "apple", "raspberry");
$fruit = array_shift($stack);
print_r([ $fruit ,  $stack ]);
$fruit = array_pop($stack);
print_r([ $fruit ,  $stack ]);
