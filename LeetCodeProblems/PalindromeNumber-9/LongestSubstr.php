<?php

class Solution {

    /**
     * @param Integer $x
     * @return Boolean
     */
    function isPalindrome($x) {
        $str = "$x";

        $half =  intdiv(strlen($str) ,  2 ) ;

        for ( $i= 0 ; $i <= $half ;  $i++){

            if( $str[$i] != $str[strlen($str) -1 -$i ]){
                return false ;
            }

        }
        return true ;
    }
}

/**
 *
 * Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.


Example 1:

Input: x = 121
Output: true
 *
 */