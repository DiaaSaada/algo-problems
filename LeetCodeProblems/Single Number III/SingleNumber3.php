<?php
/**
Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.
You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.
**/



class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function singleNumber($nums) {
        foreach($nums as $num){
            if(empty( $map[$num] ) ){
                $map[$num] = 1;
            }elseif( $map[$num] == 1 ){
                unset($map[$num]);
            }
               }
        return array_keys($map) ; 
    }
}

/**
Result
Runtime: 16 ms, faster than 85.71% of PHP online submissions for Single Number III.
Memory Usage: 17.6 MB, less than 85.71% of PHP online submissions for Single Number III.
**/
