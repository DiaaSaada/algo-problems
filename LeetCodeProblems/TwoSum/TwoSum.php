<?php
/**
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
**/

class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($nums, $target) {
                       
        for($i=0; $i < count($nums)   ; $i++){
            if( isset( $map[$nums[$i]])){
                 return [$i, $map[$nums[$i]]];
             }
             $map[ $target- $nums[$i]] = $i;
                 
             
        }
    }
}
