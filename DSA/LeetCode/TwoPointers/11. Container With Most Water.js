/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {

    let left = 0
    let right = height.length - 1

    let area = 0
    while (left < right) {
        newArea = (right - left) * Math.min(height[left], height[right])
        area = Math.max(area, newArea)
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }

    }

    return area

};