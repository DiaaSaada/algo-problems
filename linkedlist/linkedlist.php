<?php
/**
2. Add Two Numbers
Medium

14660

3219

Add to List

Share
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
**/

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
     * @param ListNode $l1
     * @param ListNode $l2
     * @return ListNode
     */
    function addTwoNumbers($l1, $l2) {
        
        $res = new ListNode();
        return $this->fillLinkedList($l1, $l2,  $res);
        
    }
    
    
    function fillLinkedList($l1, $l2,  $res ,  $pass = 0  ){
               
            $res->val =( $l1->val + $l2->val + $pass )%10 ;   
            $new = new ListNode();
            $res->next = null;
        
        if( $l1->next != null || $l2->next != null ){
            
            $res->next = $this->fillLinkedList($l1->next, $l2->next,  $res->next ,  intval( ( $l1->val + $l2->val+ $pass )/10 )  ) ;
            
        }elseif(  intval( ( $l1->val + $l2->val+ $pass )/10 ) > 0  ){
            
            $res->next = new ListNode( 1, null );
            
        }
         
        
        
       
        return $res;
    }
}