/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
    this.stack = new Array(maxSize)
    this.index = -1
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
    if (this.index < this.stack.length - 1) {
        this.index++
        this.stack[this.index] = x

    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
    if (this.index >= 0) {

        let r = this.stack[this.index]
        this.stack[this.index] = -1
        this.index--

        return r


    }

    return -1

};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {

    for (let i = 0; i < k; i++) {
        this.stack[i] += val
    }


};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */