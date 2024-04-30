<?php

trait Helper
{
    private array $listWords;

    private function setListWords(array $words): void
    {
        $this->listWords = $words;
    }

    private function toString(array $array): string
    {
        return implode("", $array);
    }


    private function isWord(string $word, bool $caseSensitive = false): bool
    {
        return in_array($caseSensitive ? $word : strtolower($word), $this->listWords);
    }
}

class VigenèreCipher
{

    use Helper;

    private int    $chipper;
    private array  $chipperListWords;
    private int    $calculate;
    private array  $key;

    public function __construct(string $key, string $alphabet)
    {
        $this->key = str_split($key);
        $this->setListWords(str_split($alphabet));
    }

    private function setChipperListWords(array $chipperListWords): void
    {
        $this->chipperListWords = $chipperListWords;
    }

    private function setCalculate(int $calculate): void
    {
        $this->calculate = $calculate;
    }

    private function setChipper(int $chipper): void
    {
        $this->chipper = $chipper;
    }

    private function getNext(): string
    {
        return $this->calculate > 25 ? $this->listWords[$this->calculate - 26] : $this->listWords[$this->calculate];
    }

    private function getPrevious(): string
    {
        return $this->calculate < 0 ? $this->listWords[$this->calculate + 26] : $this->listWords[$this->calculate];
    }

    private function generateChipper(string $step = 'next'): string
    {
        $result = [];
        foreach ($this->chipperListWords as $index => $word) {

            $wordIndex    = array_search($word, $this->listWords);
            $getKey       = isset($this->key[$index]) ? $this->key[$index] : $this->key[$index % count($this->key)];

            $this->setChipper(array_search($getKey, $this->listWords));
            $this->setCalculate($step === 'next' ? $wordIndex + $this->chipper : $wordIndex - $this->chipper);

            $data = match (true) {
                $this->isWord($word, true) && $step === 'next' => $this->getNext(),
                $this->isWord($word, true) && $step !== 'next' => $this->getPrevious(),
                default => $word,
            };

            array_push($result, $data);
        }
        return $this->toString(array_map(fn ($value) => $value, $result));
    }

    public function encode(string $word): string
    {
        $this->setChipperListWords(str_split($word));
        return $this->generateChipper('next');
    }

    public function decode(string $word): string
    {
        $this->setChipperListWords(str_split($word));
        return $this->generateChipper('previous');
    }
}


$c = new VigenèreCipher('password', 'abcdefghijklmnopqrstuvwxyz');
var_dump($c->encode('codewars')); // rovwsoiv
var_dump($c->decode('rovwsoiv')); // codewars
var_dump($c->encode('CODEWARS')); // codewars
var_dump($c->decode('CODEWARS')); // codewars




