const m = [99, 2, 56, 97, 5, 6, 44, 78, 2, 33];

for (let i = 0; i < m.length - 1; i++) {
    for (let j = 0; j < m.length - 1 - i; j++) {
        if (m[j] > m[j + 1]) {
            let temp = m[j];
            m[j] = m[j + 1];
            m[j + 1] = temp;
        }
    }
}

console.log(m);
