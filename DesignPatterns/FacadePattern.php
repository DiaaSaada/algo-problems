<?php
/**
 * Facade Pattern help us achieve "The principle of least knowledge"
 * which means client class/function show know as less as possible about
 * the consumed System components
 * e.g. when an IDE call compile function it should not know about the 100s of classes
 * a compiler consists of, instead a FacdeCLass will take only
 * necessary input and hide the complexity behind it
 *
 */

class StockManagement
{

    function updateStock(int $productId, int $qty)
    {
        echo "call stock service and update stock DB/tables";
        return true;
    }
}


class Notification
{

    function notifyVendor()
    {
        echo "Send new Order was Placed Email to product vendor\n";
    }

    function notifyCustomer()
    {
        echo "Send Order-Placed Email to the client\n";
    }
}


class Mailer
{

    function ssmtpSetup()
    {

    }

    function sendEmail()
    {

    }
}

/**
 * Class SalesOrderPlacingFacade
 * this is the Facde class allowing our eCommerce platform to
 * simpley placing an order without knowing all logistic related classes
 */
class SalesOrderPlacingFacade
{
    public function placeOrder(int $product, int $qty): bool
    {
        try {
            $stock = new StockManagement();
            $stock->updateStock($product, $qty);

            $nottification =  new Notification();
            $nottification->notifyCustomer();
            $nottification->notifyVendor();

            return true ;
        }catch (Exception $e){
            // Rollback and return false
            return false;
        }
    }
}

//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
//-------------------------Client COde--------------------------------------------

$po =  new SalesOrderPlacingFacade();
$po->placeOrder(1, 2) ;