<?php

function eol($value)
{
    echo $value . PHP_EOL;
}

function cetak($arr)
{
    print_r($arr);
}


// A
// $arr    = [12,9,30,"A","M",99,82,"J","N","B"];
// $string = array_filter($arr, fn ($val) => gettype($val) === "string");
// $number = array_filter($arr, fn ($val) => gettype($val) === "integer");

// sort($string);
// sort($number);

// $result = array_merge($string, $number);
// print_r($result);

// B

// function patternCount($text, $pattern)
// {

//     $strSplit = str_split($text);
//     $result   = 0;

//     foreach ($strSplit as $split) {

//         $getIndex = strpos($text, $pattern);

//         if ( strlen($pattern) === 0 ) break;
//         if ( gettype($getIndex) === "boolean") continue;

//         array_splice($strSplit, $getIndex, count(str_split($pattern)) - 1);
//         $text  = implode("", $strSplit);
//         $result++;
//     }
    
//     return $result;
// }

// print_r(patternCount("palindrom", "ind") . PHP_EOL);
// print_r(patternCount("abakadabra", "ab") . PHP_EOL);
// print_r(patternCount("hello", "") . PHP_EOL);
// print_r(patternCount("ababab", "aba") . PHP_EOL);
// print_r(patternCount("aaaaaa", "aa") . PHP_EOL);
// print_r(patternCount("hell", "hello") . PHP_EOL);

// C

function grouping($string){

    $getKeys       = [];
    $stringSplit   = str_split(str_replace(' ','',$string));
    $alphabet      = str_split("abcdefghijklmnopqrstuvwxyz");
    $alphabetUpper = array_map(fn ($val) => strtoupper($val), $alphabet);

    foreach( $stringSplit as $split ){ 
        if( array_search($split, $getKeys) === false && $split !== " " ) {
            $getKeys[$split] = 0;
        }
    }
    
    foreach( $stringSplit as $split ){
        $getKeys[$split]++;
    }

    $getLetterBetween = function($from, $to , $letter) use ($alphabet, $alphabetUpper){
    
        $result = [];
        $slice  = array_slice(
            $alphabet, 
            array_search($from, $alphabetUpper), 
            $to === null ? array_search('Z', $alphabetUpper) : array_search($to, $alphabetUpper)
        );
        
        foreach( $letter as $value ){
            if( in_array($value, $slice) ) array_push($result, $value);
        }
        
        return $result;
    };

    $customSort = function($arr) use ($alphabet, $alphabetUpper, $getLetterBetween){
    
        $arrKeys        = array_keys($arr);
        $upperKeys      = array_filter($arrKeys, fn ($val) => in_array($val, $alphabetUpper));
        $lowerKeys      = array_filter($arrKeys, fn ($val) => in_array($val, $alphabet));
        
        sort($upperKeys);
        sort($lowerKeys);

        $duplicateUpper = array_merge([], $upperKeys);

        foreach( $upperKeys as $index => $upper ){
            $next = isset($upperKeys[$index + 1]) ? $upperKeys[$index + 1] : null;
            array_splice(
                $duplicateUpper, 
                array_search($upper, $duplicateUpper) + 1, 0, 
                $getLetterBetween($upper, $next, $lowerKeys)
            );
        }
        
        return $lowerKeys;
    };

    return $customSort($getKeys);

}

print_r(grouping("Bismillah"));