<?php
/**
 * Observer Pattern example
 * includes
 * Observer interface with its concrete class OrderPlacedEmail
 * Observable interface with its concrete class Order
 * Upon Order status change to paid the OrderPlacedEmail will be notified via update which in turn
 * will do some action e.g. send an EMail to the customer to confirm that order is placed
 */


/**
 * Interface IObservable
 */
interface IObservable
{
    /**
     * @param IObserver $observer
     * @return mixed
     */
    function register(IObserver $observer);

    function deregister(IObserver $observer);

    function notify();
}


/**
 * Class Order
 */
class Order implements IObservable
{

    /**
     * @var array
     */
    public $observers = [];

    /**
     * @param IObserver $observer
     * @return mixed|void
     */
    function register(IObserver $observer)
    {
        $this->observers[spl_object_hash($observer)] = $observer;
    }

    function deregister(IObserver $observer)
    {
        unset( $this->observers[spl_object_hash($observer)])  ;
    }

    function notify()
    {
        foreach ($this->observers as /** @var IObserver */ $observer) {
            $observer->update();
        }
    }


    /**
     * @var bool
     */
    public $customer_email = false;

    public function setOrderStatusPaid()
    {
        $this->customer_email = substr(str_shuffle("abcdefghijklmnopqrstuvwxyz"), -8) . '@gmail.com';
        $this->notify();
    }

    public function getCustomerEmail()
    {
        return $this->customer_email  ;
    }
}

//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
//---------------- Observer Code---------------------------------------------------------

/**
 * Interface IObserver
 */
interface IObserver
{
    function update();
}

class OrderPlacedEmail implements IObserver
{

    /**
     * @var Order
     */
    private $order;


    /**
     * OrderPlacedEmail constructor.
     * @param Order $order
     */
    public function __construct(Order $order)
    {
        $this->order = $order;
    }

    function update()
    {
        $this->sendEmail();
        // doAction2();
        // doAction3();
    }

    public function sendEmail()
    {
        echo "Order is placed ==> Email was sent to Customer {$this->order->getCustomerEmail()}\n";
    }
}


/////////////////////////////////////////////////////////////////////////
/// Example
///
/**
 * @var Order
 */
$order = new Order();

/**
 * #var OrderPlacedEmail
 */
$aOrderPlacedEmail = new OrderPlacedEmail($order);
$order->register($aOrderPlacedEmail);


$order->setOrderStatusPaid();
sleep(2);
$order->setOrderStatusPaid();

// deregister $aOrderPlacedEmail  so NO email will be sent on next order update
$order->deregister($aOrderPlacedEmail);
$order->setOrderStatusPaid();