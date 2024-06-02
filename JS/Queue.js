class Queue {


    constructor() {

        this.items = []

    }

    enqueue(z) {
        this.items.push(z)

    }

    dequeue() {
        if (this.items.length > 0)
            return this.items.shift()
        throw new Error("Queue is Empty")

    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length
    }

    front() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.items[0]
    }

    clear() {
        this.items = [];
    }

}


// Example usage:
let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.front()); // Output: 10
console.log(queue.dequeue()); // Output: 10
console.log(queue.size()); // Output: 1