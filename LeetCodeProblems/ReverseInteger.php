<?php

class ReverseInteger {

    /**
     * @param Integer $x
     * @return Integer
     */
    public static function reverse($x) {

        if( $x == 0 )
            return 0;

        $sign = ( $x < 0) ? "-" : "" ;

        $x =  abs( $x) ;
        $str = "$x";


        $str =  strrev( trim( $str , "0"));
        $val =  intval($sign.$str) ;
        return  $val < -2 ** 31 || ($val > 2**31 + 1 ) ? 0  : $val ;

    }
}