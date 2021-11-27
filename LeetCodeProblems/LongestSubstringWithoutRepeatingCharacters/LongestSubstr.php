<?php

class LongestSubstr
{

    /**
     * @param String $s
     * @return Integer
     */
    public static function lengthOfLongestSubstring($s)
    {

        $temp = [];
        $maxCount = 0;
        $i = 0;
        while ($i < strlen($s)) {
            if (!isset ($temp[$s[$i]])) {
                $temp[$s[$i]] = $i;
                $i++;
                $maxCount = max(count($temp), $maxCount);
            } else {
                $i = $temp[$s[$i]] + 1;
                $temp = [];
            }
        }
        return max(count($temp), $maxCount);
    }

}

var_dump(LongestSubstr::lengthOfLongestSubstring("AAAAAAAa"));
var_dump(LongestSubstr::lengthOfLongestSubstring("ABCADF"));
var_dump(LongestSubstr::lengthOfLongestSubstring("AABCDEFA"));