/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

    let left;
    let right


    let max = ""

    function findLongestFrom(left, right) {

        while (left >= 0 && right < s.length) {

            if (s[left] !== s[right]) {

                break;
            }
            if ((right - left + 1) > max.length) {
                max = s.substr(left, right + 1 - left);
            }

            left--;
            right++;
        }
        return max;
    }

    for (let mid = 0; mid < s.length; mid++) {


        left = right = mid;
        max = findLongestFrom(left, right);


        left = mid;
        right = mid + 1;
        max = findLongestFrom(left, right);
    }

    return max
};


