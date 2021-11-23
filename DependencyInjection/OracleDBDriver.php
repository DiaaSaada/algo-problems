<?php
namespace DependencyInjectionExampleApp ;
class OracleDBDriver implements IDbDriver
{

    private array $config = [];

    public function __construct($somconfig)
    {
        $this->config = $somconfig;
    }



    public function writeToDB($msg)
    {
        echo "$msg was written to DB";
    }
}