class Stack {


    constructor() {

        this.items = []

    }

    push(z) {
        this.items.push(z)

    }

    pop() {
        if (this.items.length > 0)
            return this.items.pop()
        throw new Error("Stack  is Empty")

    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack  is empty");
        }
        return this.items[this.items.length - 1]
    }

    clear() {
        this.items = [];
    }

}


// Example usage:
let stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek());  // Output: 20
console.log(stack.pop());   // Output: 20
console.log(stack.pop());   // Output: 20
console.log(stack.pop());   // Output: 20
console.log(stack.size());  // Output: 1