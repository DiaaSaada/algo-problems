<?php

interface  IScan{
	function scan();
}


class NormalScanner  implements IScan {
	
	
	function scan() : string{
		echo "SCAN";
		return "SCAN" ;
	}
}



class QuickScanner {
	
	 function quickScan( $param1 ) : string {
		echo "QUICK SCAN $param1";
         return "QUICK SCAN $param1"  ;
	}
	
}


class ScannerAdapter  implements IScan {

    /**
     * @var QuickScanner
     */
	public $quickScanner;
	
	function __construct(QuickScanner $qs){
		$this->quickScanner =  $qs ;
	}
	
	function scan(){
		return $this->quickScanner->quickScan( ">> 🖨");
	}
}
// Without Adapter
echo "Normal Scan:" ;
/**
 * @var NormalScanner
 */
$normalScanner =  new NormalScanner();
$normalScanner->scan();

// Now Our client can use the Adapter class to execute QuickScan by calling scan() function
// Note #1 Adapter Pattern map 1to1
// Note #2 Adapter pattern only interface two  classes without changing their behavior  e.g. quickScan should not Print
echo "\n\nScan via Adapter:" ;
/**
 * @var IScan
 */
$myScanner =  new ScannerAdapter( new QuickScanner());
$myScanner->scan();





