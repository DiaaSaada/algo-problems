
var NumberContainers = function () {
    this.index2ValMap = new Map()
    this.val2indxMap = new Map()
};

/** 
 * @param {number} index 
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function (index, number) {

    let indcies = this.val2indxMap.get(number)
    if (!indcies) {

        indcies = new Set();
        this.val2indxMap.set(number, indcies)

    }
    indcies.add(index)

    let oldVal = this.index2ValMap.get(index)
    if (oldVal && oldVal != number) {
        let oldValIndcies = this.val2indxMap.get(oldVal)
        oldValIndcies.delete(index)
    }
    this.index2ValMap.set(index, number)



};

/** 
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function (number) {
    let indcies = this.val2indxMap.get(number)
    if (!indcies || indcies.size < 1) {
        return -1
    }
    return Math.min(...indcies)
};

/** 
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */