/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {

    const v1 = version1.split(".")
    const v2 = version2.split(".")


    for (i = 0; i < Math.max(v1.length, v2.length); i++) {
        if (parseInt(v1[i] ?? 0) > parseInt(v2[i] ?? 0)) {
            return 1
        } else if (parseInt(v1[i] ?? 0) < parseInt(v2[i] ?? 0)) {
            return -1
        }

    }

    return 0



};