const cardNumber = "4561-2612-1234-5464"

function checkCardNumberByLuna(parsedCardNumber) {

    let preparedArray = []
    for(let i = 0; i < parsedCardNumber.length; i++) {

      if(i % 2 === 0) {
        let numberAfterDivision = parseInt(parsedCardNumber[i]) * 2;
        if(numberAfterDivision > 9) {
            preparedArray.push(numberAfterDivision - 9);
        } else {
            preparedArray.push(numberAfterDivision);
        } 
      }
      else {
          let number = parseInt(parsedCardNumber[i]);
          preparedArray.push(number)
        }
    }
    let calculatedSummArray = preparedArray.reduce(function(a, b) { return a + b; });
    if (calculatedSummArray % 10) {
        return false
    }
    else {
        return true
    }
  }

console.log(checkCardNumberByLuna(cardNumber.replaceAll("-","")))