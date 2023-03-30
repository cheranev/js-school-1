let courseUSD = 77;
function convertCash(payment, typePayment, convertedPayment) {
    if (typePayment == "rub" && convertedPayment == "usd") {
        const resultUSD = parseInt(payment / courseUSD);
        console.log(`Converted cash from \"${typePayment}\" to \"${convertedPayment}\" - ${resultUSD}$`);

    } else if (typePayment == "usd" && convertedPayment == "rub"){
        const resultRUB = parseInt(payment * courseUSD);
        console.log(`Converted cash from \"${typePayment}\" to \"${convertedPayment}\" - ${resultRUB} RUB`);

    } else {
        console.log("Invalid Data");
    }
    
}
convertCash(2534, "rub", "usd");