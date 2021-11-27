<?php declare(strict_types=1);
use PHPUnit\Framework\TestCase;

final class ReverseIntegerTest extends TestCase
{

    public function testReverseIntegerZero(): void
    {
        $this->assertEquals(
            0,
            ReverseInteger::reverse(0)
        );
    }

    public function testReverseIntegerUpperBound(): void
    {
        $this->assertEquals(
            0,
            ReverseInteger::reverse(2**33)
        );
    }

    public function testReverseIntegerNegative(): void
    {
        $this->assertEquals(
            -321,
            ReverseInteger::reverse(-1230)
        );
    }

    public function testReverseIntegerEndswithZero(): void
    {
        $this->assertEquals(
            321,
            ReverseInteger::reverse(1230)
        );
    }

    public function testReverseIntegerEndsWithZeros(): void
    {
        $this->assertEquals(
            321,
            ReverseInteger::reverse(123000)
        );
    }



}