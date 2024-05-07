<?php

class AtbashCipher
{
    private array  $alphabet;
    private array  $reversed = [];
    private string $words;

    public function __construct(string $alphabet)
    {
        $this->alphabet = str_split($alphabet);
    }

    private function setWords(string $words)
    {
        $this->words = $words;
    }

    private function setReversed()
    {
        foreach ($this->alphabet as $index => $word) {
            $this->reversed[$word] = array_reverse($this->alphabet)[$index];
        }
    }

    private function formatedData(string $s)
    {
        $this->setWords($s);
        $this->setReversed();
        $result = [];

        foreach (str_split($this->words) as $word) {
            array_push($result, isset($this->reversed[$word]) ? $this->reversed[$word] : $word);
        }

        return implode("", $result);
    }

    public function encode($s)
    {
        return $this->formatedData($s);
    }

    public function decode($s)
    {
        return $this->formatedData($s);
    }
}

$c = new AtbashCipher('abcdefghijklmnopqrstuvwxyz');
var_dump($c->encode('abcC')); //'zyx'
// var_dump($c->encode('zyx')); //'abc'
