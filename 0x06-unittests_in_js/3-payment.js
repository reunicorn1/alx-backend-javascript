const Utils = require("./utils");
utility = new Utils()


function sendPaymentRequestToApi(totalAmount, totalShipping) {
    result = utility.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;