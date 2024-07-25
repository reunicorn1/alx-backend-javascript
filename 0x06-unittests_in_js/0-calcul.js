function calculateNumber(a, b) {
    a = Math.sign(a) * Math.round(Math.abs(a))
    b = Math.sign(b) * Math.round(Math.abs(b))

    return a + b
}

module.exports = calculateNumber;