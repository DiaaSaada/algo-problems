// Returns Boolean
// a, b, c are Numbers
function isSumEqualToZero(a, b, c) {
    // #1 get the most preci
    const prec = Math.max(
        (`${a}`.split('.')[1] ?? "").length,
        (`${b}`.split('.')[1] ?? "").length,
        (`${c}`.split('.')[1] ?? "").length,
    )


    let sum = a + b + c


    return parseFloat(sum.toFixed(prec)) === 0
}

console.log(isSumEqualToZero(0.1, 0.2, -0.3))