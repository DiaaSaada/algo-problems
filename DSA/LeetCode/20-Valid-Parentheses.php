<?php

class Solution
{

    /**
     * @param String $s
     * @return Boolean
     */
    function isValid($s)
    {
        $open = [
            '(' => ')',
            '{' => '}',
            '[' => ']'
        ];
        $close = array_flip($open);

        $stack = [];
        foreach (str_split($s) as $c) {
            if ($open[$c]) {
                $stack[] = $c;
            } else if ($close[$c] == end($stack)) {
                array_pop($stack);
            } else {
                return false;
            }
        }
        return count($stack) == 0;
    }
}