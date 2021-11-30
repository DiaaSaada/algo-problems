<?php

interface Tree
{
    public function fruit(): Seed;
}

class CoffeeTree implements Tree
{

    public function fruit(): Seed
    {
        return new Seed(CoffeeTree::class);
    }
}

class Seed
{

    private $isSprout = false;
    private $typeOfTree;

    public function __construct(string $typeOfTree)
    {
        $this->typeOfTree = $typeOfTree;
    }

    public function sprout(): ?Tree
    {
        if ($this->isSprout) {
            throw new Exception("already sprouted");
        }
        $this->isSprout = true;
        $tree = new $this->typeOfTree();
        if (is_a($tree, Tree::class)) {
            return $tree;
        }
        throw new Exception("Invalid seed type");

    }
}

/*$a = new Seed(CoffeeTree::class);
var_dump($a->sprout());  =>  OK
var_dump($a->sprout());  =>  Exception */