<?php

class Person
{
    protected  $name;
    protected  $age;
    protected  $occupation;
    
    public function set_name($name)
    {
        $this->name = $name;
    }

    public function set_age($age)
    {
        $this->age = $age;
    }

    public function set_occupation($occupation)
    {
        $this->occupation = $occupation;
    }

    public function get_name()
    {
        return $this->name;
    }

    public function get_age()
    {
        return $this->age;
    }
    
    public function get_occupation()
    {
        return $this->occupation;
    }
}

$person = new Person();
$person->set_name(20);
echo $person->get_name();
