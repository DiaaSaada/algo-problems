const m = [99, 2, 56, 97, 5, 6, 44, 78, 2, 33];

for (let i = 0; i < m.length; i++) {
    let minValIndex = minValIndex(i);
    let temp = m[i];
    m[i] = m[minValIndex];
    m[minValIndex] = temp;
}

function minValIndex(start) {

    let minValIndex = start
    for (let j = start; j < m.length; j++) {
        minValIndex = m[j] < m[minValIndex] ? j : minValIndex;
    }
    return minValIndex

}

console.log(m);
