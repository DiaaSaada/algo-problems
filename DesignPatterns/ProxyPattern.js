// Define a real subject
class RealSubject {
    request() {
        console.log("RealSubject: Handling request.");
    }
}

// Define a proxy class
class Proxy {
    constructor(realSubject) {
        this.realSubject = realSubject;
    }

    // Proxy method intercepts the request and controls access to the real subject
    request() {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        } else {
            console.log("Proxy: Access denied.");
        }
    }

    // Helper method to check access rights
    checkAccess() {
        // Simulating access control logic
        return true;
    }

    // Helper method to log access
    logAccess() {
        console.log("Proxy: Access granted.");
    }
}

// Usage example
const realSubject = new RealSubject();
const proxy = new Proxy(realSubject);

// Client interacts with the proxy, unaware of the real subject
proxy.request();
