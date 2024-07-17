<?php

// A
$arr    = [12,9,30,"A","M",99,82,"J","N","B"];
$string = array_filter($arr, fn ($val) => gettype($val) === "string");
$number = array_filter($arr, fn ($val) => gettype($val) === "integer");

sort($string);
sort($number);

$result = array_merge($string, $number);
print_r($result);

// B

function patternCount($text, $pattern)
{

    $strSplit = str_split($text);
    $result   = 0;

    foreach ($strSplit as $split) {

        $getIndex = strpos($text, $pattern);

        if ( strlen($pattern) === 0 ) break;
        if ( gettype($getIndex) === "boolean") continue;

        array_splice($strSplit, $getIndex, count(str_split($pattern)) - 1);
        $text  = implode("", $strSplit);
        $result++;
    }
    
    return $result;
}

print_r(patternCount("palindrom", "ind") . PHP_EOL);
print_r(patternCount("abakadabra", "ab") . PHP_EOL);
print_r(patternCount("hello", "") . PHP_EOL);
print_r(patternCount("ababab", "aba") . PHP_EOL);
print_r(patternCount("aaaaaa", "aa") . PHP_EOL);
print_r(patternCount("hell", "hello") . PHP_EOL);

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

    $bubbleSort = function($array){
    
        $originalArray = $array;
        $array  = array_values($array); 
        $keys = [];
        
        foreach( $array as $value ){
            foreach( $array as $index => $value ){
                if( isset($array[$index + 1]) ){
                    $curr = $array[$index];
                    $next = $array[$index + 1];
                    if( $curr > $next ){
                        $array[$index + 1] = $curr;
                        $array[$index] = $next;
                    }
                }
            }
        }
        
        foreach( $array as $index => $sorted ){
            $search = array_search($sorted, $originalArray);
            if( isset($keys[$index - 1]) ){
                if( $keys[$index - 1] === $search ){
                    $keys[$index - 1] = strtoupper($search);
                    array_push($keys, $search);
                    continue;
                }
            }
            array_push($keys, $search);
        }
        
        return $keys;
        
    };

    $customSort = function($arr) use ($alphabet, $bubbleSort){
    
        $arrKeys = array_map(function($value) use ($alphabet) {
            return array_search(strtolower($value), $alphabet);
        }, array_keys($arr));

        $setKeys     = array_combine(array_keys($arr), $arrKeys);
        $sortingKeys = $bubbleSort($setKeys);
        $result      = [];
        
        foreach( $sortingKeys as $sorting ){
            $result[$sorting] = $arr[$sorting];
        }

        return $result;
    };

    return $customSort($getKeys);

}

print_r(grouping("CemasKauDek"));