<?php

trait Validation {

    private array $listValidation = [];
    private array $messsage = [];

    private function setListValidation(array $listValidation)
    {
        $this->listValidation = $listValidation;
    }

    public function validate(string $data, string $request)
    {
        $this->setListValidation(explode("|", $data));
    }

    

}