<?php

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

    private int   $chipper;
    private array $chipperListWords;
    private int   $calculate;

    public function __construct(int $chipper)
    {
        $this->chipper = $chipper;
        $this->setListWords(str_split("abcdefghijklmnopqrstuvwxyz"));
    }

    private function setChipperListWords(array $chipperListWords): void
    {
        $this->chipperListWords = $chipperListWords;
    }

    private function setCalculate(int $calculate): void
    {
        $this->calculate = $calculate;
    }

    private function getNext(): string
    {
        return $this->calculate > 25 ? $this->listWords[$this->calculate - 26] : $this->listWords[$this->calculate];
    }

    private function getBefore(): string
    {
        return $this->calculate < 0 ? $this->listWords[$this->calculate + 26] : $this->listWords[$this->calculate];
    }

    private function getWord(string $step = 'next'): string
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

$chipper = new CaesarCipher(5);
var_dump($chipper->encode('Code wars')); // HTIJBFWX
var_dump($chipper->decode('Htij bfwx')); // CODEWARS
