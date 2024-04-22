<?php

class Pong
{

    private int         $maxScore;
    private array       $score = ["Player 1" => 0, "Player 2" => 0];
    private int         $distance;
    private string      $turn = "Player 2";
    private string|null $winner = null;

    public function __construct($maxScore)
    {
        $this->maxScore = $maxScore;
    }

    private function setDistance(int $ballPos, int $playerPos): void
    {
        $calculate = $ballPos - $playerPos;
        $this->distance = $calculate < 0 ? $calculate * -1 : $calculate;
    }

    private function setTurn(): void
    {
        $this->turn = $this->turn === "Player 1" ? "Player 2" : "Player 1";
    }

    private function setWinner(string $winner): void
    {
        $this->winner = $winner;
    }

    private function setScore(string $player): void
    {
        $this->score[$player] = $this->score[$player] + 1;
    }

    private function checkStatus(): string
    {
        if( max($this->score) === $this->maxScore) { 
            $this->setWinner(max(array_keys($this->score)));
            return $this->winner . " has won the game!";
        };

        if ($this->distance <= 3) {
            $this->setScore($this->turn);
            return $this->turn . " has hit the ball!";
        } else {
            return $this->turn . " has missed the ball!";
        }
    }

    public function play(int $ballPos, int $playerPos)
    {
        if ($this->winner !== null) return 'Game Over!';

        $this->setDistance($ballPos, $playerPos);
        $this->setTurn();
        $this->checkStatus();

        return $this->checkStatus();
    }
}

$game = new Pong(5);
var_dump($game->play(50, 53))  . PHP_EOL;
var_dump($game->play(100, 97)) . PHP_EOL;
var_dump($game->play(0, 4))    . PHP_EOL;
var_dump($game->play(25, 25))  . PHP_EOL;
var_dump($game->play(75, 25))  . PHP_EOL;
var_dump($game->play(50, 50))  . PHP_EOL;
var_dump($game->play(50, 50))  . PHP_EOL;
var_dump($game->play(50, 50))  . PHP_EOL;
var_dump($game->play(50, 50))  . PHP_EOL;
var_dump($game->play(50, 50))  . PHP_EOL;
var_dump($game->play(50, 50))  . PHP_EOL;
var_dump($game->play(50, 50))  . PHP_EOL;
var_dump($game->play(50, 50))  . PHP_EOL;
var_dump($game->play(50, 50))  . PHP_EOL;
