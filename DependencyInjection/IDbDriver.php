<?php
namespace DependencyInjectionExampleApp ;
interface IDbDriver
{
    public function writeToDB($msg);
}