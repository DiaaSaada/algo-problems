/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {


    let map = new Map();
    let used = new Map();

    if (s.length !== t.length)
        return false;


    for (let i = 0; i < s.length; i++) {
        if (
            (used.has(t.charAt(i)) && used.get(t.charAt(i)) !== s.charAt(i)) ||
            (map.has(s.charAt(i)) && map.get(s.charAt(i)) !== t.charAt(i))) {

            return false;
        } else {
            map.set(s.charAt(i), t.charAt(i))
            used.set(t.charAt(i), s.charAt(i))
        }
    }
    return true

};