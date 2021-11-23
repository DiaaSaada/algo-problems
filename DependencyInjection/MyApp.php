<?php

namespace DependencyInjectionExampleApp;

use DependencyInjectionExampleApp\Container;
use DependencyInjectionExampleApp\IDbDriver;
use DependencyInjectionExampleApp\OracleDBDriver;

namespace DependencyInjectionExampleApp;
class MyApp
{
    /**
     * @var Container
     */
    private Container $container;
    public function __construct()
    {
        $this->container = new Container();
        $this->container->set(IDbDriver::class, OracleDBDriver::class);
        // Register other services here

    }

    public function writeMsg(string $msg)
    {
        $this->writeToDBwithDI($msg);
    }

    private function writeToDBwithDI(string $msg, $db = IDbDriver::class)
    {

        /**
         * @var IDbDriver
         */
        $db = $this->container->get( $db, ["aaa" => "bbbb"]);
        $db->writeToDB($msg);
    }
}
