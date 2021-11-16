<?php

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

class Order implements IObservable
{


    public $observers = [];

    /**
     * @param IObserver $observer
     * @return mixed|void
     */
    function register(IObserver $observer)
    {
        $this->observers[] = $observer;
    }

    function deregister(IObserver $observer)
    {
        //$this->observers[] =  $observer ;
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
}

//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
//---------------- IObserver ---------------------------------------------------------
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
        echo "Order is placed ==> Email was sent to Customer {$this->order->customer_email}";
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


sleep(5);
$order->setOrderStatusPaid();
