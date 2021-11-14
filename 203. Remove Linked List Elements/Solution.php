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
class Solution {

    /**
     * @param ListNode $head
     * @param Integer $val
     * @return ListNode
     */
    function removeElements($head, $val) {
        
        if ($head == null) {
            return null;
        }
        
        
        // Once removeElements call is done, right side of the list is solved.
        $rightSideHead = $this->removeElements($head->next, $val);
        if ($head->val == $val) {
            return $rightSideHead;
        }
        $head->next = $rightSideHead;
        return $head;
    }
        
    }
    
    
       
    