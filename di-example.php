<?php
require 'vendor/autoload.php';

use DependencyInjectionExampleApp\MyApp;

$app =  new MyApp();
$app->writeMsg("Hello-DI");