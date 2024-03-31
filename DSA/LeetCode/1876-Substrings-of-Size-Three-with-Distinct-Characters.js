//1876. Substrings of Size Three with Distinct Characters

/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {

// "xyzzaz"
    const map = new Map();
    let left = 0
    updateMap(s.charAt(0));
    updateMap(s.charAt(1));
    //updateMap(s.charAt(2));
    let counter  = 0 ;
    for( let right  =2 ; right< s.length; right++){
        let char = s.charAt(right);
        updateMap(char)
        if( map.size === 3){
            counter++
        }
        reduceMap( s.charAt(left))
        left++

    }
    return counter;

    function updateMap(char){
        if( map.has(char)){
            map.set(char, map.get(char)+1)
        }else{
            map.set(char, 1)
        }
    }


    function reduceMap(char){
        const count = map.get(char)
        if( count === 1){
            map.delete(char)
        }else if( count > 1){
            map.set(char, count-1)
        }
    }

};