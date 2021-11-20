<?php declare(strict_types=1);
use PHPUnit\Framework\TestCase;

final class AdapterPatternTest extends TestCase
{

    public function testNormalScannerScan(): void
    {
        $normalScanner =  new NormalScanner();

        $this->assertEquals(
            'SCAN',
            $normalScanner->scan()
        );
    }

    public function testQuickScannerScan(): void
    {
        $myScanner =  new ScannerAdapter( new QuickScanner());

        $this->assertEquals(
            'QUICK SCAN',
            $myScanner->scan()
        );
    }

}