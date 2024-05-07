<?php

// Muhammad Imam
// Codewars : https://www.codewars.com/kata/526d42b6526963598d0004db/php
trait Helper
{
    private array $listWords;
    
    private function setListWords(array $words): void
    {
        $this->listWords = $words;
    }

    public function toString(array $array): string
    {
        return implode("", $array);
    }


    private function isWord(string $word): bool
    {
        return in_array(strtolower($word), $this->listWords);
    }
}

class CaesarCipher
{

    use Helper;

    protected int   $chipper;
    protected array $chipperListWords;
    protected int   $calculate;

    public function __construct(int $chipper)
    {
        $this->chipper = $chipper;
        $this->setListWords(str_split("abcdefghijklmnopqrstuvwxyz"));
    }

    protected function setChipperListWords(array $chipperListWords): void
    {
        $this->chipperListWords = $chipperListWords;
    }

    protected function setCalculate(int $calculate): void
    {
        $this->calculate = $calculate;
    }

    protected function getNext(): string
    {
        return $this->calculate > 25 ? $this->listWords[$this->calculate - 26] : $this->listWords[$this->calculate];
    }

    protected function getBefore(): string
    {
        return $this->calculate < 0 ? $this->listWords[$this->calculate + 26] : $this->listWords[$this->calculate];
    }

    protected function getWord(string $step = 'next'): string
    {
        $result = [];
        foreach ($this->chipperListWords as $word) {

            $wordIndex = array_search(strtolower($word), $this->listWords);
            $this->setCalculate($step === 'next' ? $wordIndex + $this->chipper : $wordIndex - $this->chipper);
            $data = $this->isWord($word) ? ( $step === 'next' ? $this->getNext($wordIndex) : $this->getBefore($wordIndex) ) : $word;

            array_push($result, $data);
        }
        return $this->toString(array_map(fn($value) => strtoupper($value), $result));
    }

    public function encode(string $word): string
    {
        $this->setChipperListWords(str_split($word));
        return $this->getWord('next');
    }
    
    public function decode(string $word): string
    {
        $this->setChipperListWords(str_split($word));
        return $this->getWord('current');
    }
}


