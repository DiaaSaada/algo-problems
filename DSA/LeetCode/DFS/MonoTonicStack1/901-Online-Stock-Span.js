
var StockSpanner = function () {
    this.prices = []
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {

    if (this.prices.length == 0 || price < this.prices[this.prices.length - 1].price) {
        this.prices.push({ price, pre: 1 })
        return 1
    }


    let sum = 1
    while (this.prices.length > 0 && price >= this.prices[this.prices.length - 1].price) {
        const last = this.prices.pop();
        sum += last.pre
    }
    this.prices.push({ price, pre: sum })

    return sum;
};