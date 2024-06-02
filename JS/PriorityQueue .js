class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    insert(element) {
        this.heap.push(element);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex].priority <= this.heap[index].priority) {
                break;
            }
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    remove() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return root;
    }

    heapifyDown() {
        let index = 0;
        while (this.getLeftChildIndex(index) < this.heap.length) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            let rightChildIndex = this.getRightChildIndex(index);
            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].priority < this.heap[smallerChildIndex].priority) {
                smallerChildIndex = rightChildIndex;
            }
            if (this.heap[index].priority <= this.heap[smallerChildIndex].priority) {
                break;
            }
            this.swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}


class PriorityQueue {
    constructor() {
        this.minHeap = new MinHeap();
    }

    enqueue(element, priority) {
        this.minHeap.insert({ element, priority });
    }

    dequeue() {
        const minElement = this.minHeap.remove();
        return minElement ? minElement.element : null;
    }

    peek() {
        return this.minHeap.heap.length > 0 ? this.minHeap.heap[0].element : null;
    }

    isEmpty() {
        return this.minHeap.isEmpty();
    }

    size() {
        return this.minHeap.heap.length;
    }
}

// Example usage:
const pq = new PriorityQueue();
pq.enqueue("Task 1", 2);
pq.enqueue("Task 2", 1);
pq.enqueue("Task 3", 3);

console.log(pq.peek()); // Output: Task 2
console.log(pq.dequeue()); // Output: Task 2
console.log(pq.dequeue()); // Output: Task 1
console.log(pq.size()); // Output: 1
console.log(pq.dequeue()); // Output: Task 3
console.log(pq.isEmpty()); // Output: true
