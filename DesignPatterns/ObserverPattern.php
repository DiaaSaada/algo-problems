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
     * @var bool
     */
    public $customer_email = false;
    public string $placed_at = "-";
    public string $paid_at = "-";

    /**
     * Order constructor.
     * @param String $email
     */
    public function __construct( $email)
    {
        $this->customer_email = $email;
    }


    /**
     * @var array
     */
    public array $observers = [];

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




    public function setOrderStatusPaid()
    {
        $this->paid_at = date("Y-m-d H:i:s");
        $this->notify();
    }

    public function setOrderStatusPlaced()
    {
        $this->placed_at = date("Y-m-d H:i:s");
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
    private Order $order;


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
        echo "Order is placed ==> Email was sent to Customer {$this->order->getCustomerEmail()}
        \n placed @: {$this->order->placed_at}  
        \n paid @: {$this->order->paid_at} \n";
    }
}


/////////////////////////////////////////////////////////////////////////
/// Example Code
///
/**
 * @var Order
 */
$order = new Order( substr(str_shuffle("abcdefghijklmnopqrstuvwxyz"), -8) . '@gmail.com' );

/**
 * #var OrderPlacedEmail
 */
$aOrderPlacedEmail = new OrderPlacedEmail($order);
$order->register($aOrderPlacedEmail);


$order->setOrderStatusPlaced();
sleep(5);
$order->setOrderStatusPaid();

// deregister $aOrderPlacedEmail  so NO email will be sent on next order update
$order->deregister($aOrderPlacedEmail);
$order->setOrderStatusPaid();