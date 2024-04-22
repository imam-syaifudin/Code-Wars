<?php


class Person {
    
    public string $name;
    public int    $age;
    public string $occupation;

    public function __construct(string $name, int $age, string $occupation)
    {
        $this->name = $name;
        $this->age = $age;
        $this->occupation = $occupation;
    }

    public function introduce(): string
    {
        return "Hello, my name is {$this->name}";
    }

    public function describe_job(): string
    {
        return "I am currently working as a(n) {$this->occupation}";
    }

}

class Salesman extends Person {

    public function __construct(string|null $name, int|null $age)
    {
        parent::__construct($name, $age ,"Salesman");
    }

    public function introduce(): string
    {
        return parent::introduce() . ", don't forget to check out my products!";
    }
    
}

class ComputerProgrammer extends Person {

    public function __construct(string|null $name, int|null $age)
    {
        parent::__construct($name, $age ,"Computer Programmer");
    }

    public function describe_job(): string
    {
        return parent::describe_job() . ", don't forget to check out my Codewars account ;)";
    }
    
}

class WebDeveloper extends ComputerProgrammer {
    
    public function __construct(string|null $name, int|null $age)
    {
        parent::__construct($name, $age);
        $this->occupation = "Web Developer";
    }

    public function describe_job(): string
    {
        return parent::describe_job() . " And don't forget to check on my website :D";
    }

    public function describe_website(): string
    {
        return "My professional world-class website is made from HTML, CSS, Javascript and PHP!";
    }


}



$sales = new WebDeveloper("Muhammad Imam Syaifudin", 19);
echo $sales->describe_website();

?>
