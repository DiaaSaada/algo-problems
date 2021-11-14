<?php

interface  IScan{
	function scan();
}


class Scanner  implements IScan {
	
	
	function scan(){
		echo "SCAN";
	}
}



class QuickScanner {
	
	 function quickScan(){
		echo "QUICK SCAN";
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
		$this->quickScanner->quickScan();
	}
}


// Now Our client can use the Adapter class to execute QuickScan by calling scan() function
// Note #1 Adapter Pattern map 1to1
// Note #2 Adapter pattern only interface two  classes without changing their behavior  e.g. quickScan should not Print
/**
 * @var IScan
 */
$myScanner =  new ScannerAdapter( new QuickScanner());
$myScanner->scan();





