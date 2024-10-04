/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function (skill) {

    let sum = skill.reduce((s, v) => s + v, 0)
    let teamsCount = skill.length / 2
    let teamSkillSUm = sum / teamsCount



    let map = new Map()

    for (let a of skill) {
        map.set(a, (map.get(a) ?? 0) + 1)
    }



    let res = 0
    for (let a of skill) {
        let remKey = teamSkillSUm - a
        let remCount = map.get(remKey)
        if (!remCount)
            return -1

        res += a * remKey
        map.set(remKey, (map.get(remKey) ?? 0) - 1)
    }

    return res / 2

};