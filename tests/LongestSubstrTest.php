<?php declare(strict_types=1);
use PHPUnit\Framework\TestCase;

final class LongestSubstrTest extends TestCase
{

    public function testEmptyString(): void
    {
        $mLongestSubstr =  new LongestSubstr();

        $this->assertEquals(
            0,
            $mLongestSubstr::lengthOfLongestSubstring("")
        );
    }

    public function testCase1(): void
    {
        $mLongestSubstr =  new LongestSubstr();
        $this->assertEquals(
            5,
            $mLongestSubstr::lengthOfLongestSubstring("ABCADF")
        );
    }

}