<?php

/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val = 0, $next = null) {
 *         $this->val = $val;
 *         $this->next = $next;
 *     }
 * }
 */
class Solution
{

    /**
     * @param ListNode $list1
     * @param Integer $a
     * @param Integer $b
     * @param ListNode $list2
     * @return ListNode
     */
    function mergeInBetween($list1, $a, $b, $list2)
    {




        $curr = $list2;
        $lastNodeInList2 = null;
        while ($curr) {
            $lastNodeInList2 = $curr;
            $curr = $curr->next;
        }

        $curr = $list1;
        $aNode = null;
        $bNode = null;
        $i = 0;
        while ($i <= $b) {
            if ($i == $a - 1) {
                $aNode = $curr;
            }
            if ($i == $b) {
                $bNode = $curr;
            }
            $curr = $curr->next;
            $i++;
        }

        $lastNodeInList2->next = $bNode->next;
        $aNode->next = $list2;

        return $list1;
    }
}