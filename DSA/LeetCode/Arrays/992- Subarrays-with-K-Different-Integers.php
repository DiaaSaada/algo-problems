<?php


class Solution
{

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function subarraysWithKDistinct($nums, $k)
    {
        return $this->subarraysAtMostK($nums, $k) - $this->subarraysAtMostK($nums, $k - 1);
    }

    function subarraysAtMostK($nums, $k)
    {
        $left = 0;
        $unique = [];
        $count = 0;
        for ($right = 0; $right < count($nums); $right++) {
            if (isset($unique[$nums[$right]])) {
                $unique[$nums[$right]] += 1;
            } else {
                $unique[$nums[$right]] = 1;
            }

            while (count($unique) > $k) {
                $unique[$nums[$left]]--;
                if ($unique[$nums[$left]] == 0) {

                    unset($unique[$nums[$left]]);
                }
                $left++;
            }
            $count = $count + $right - $left + 1;

        }
        return $count;

    }
}