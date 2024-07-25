class Utils {
    calculateNumber(type, a, b) {
        const operations = {
            'SUM': (a, b) => a + b,
            'SUBTRACT': (a, b) => a - b,
            'DIVIDE': (a, b) => {
                if (!b) return "Error";
                return a / b;
            }
        }

        a = Math.sign(a) * Math.round(Math.abs(a))
        b = Math.sign(b) * Math.round(Math.abs(b))
    
        return operations[type] ? operations[type](a, b) : undefined
    }
}

module.exports = Utils;