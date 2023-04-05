const inputTestMessage = 'messages'; 
let result = [];
// @cryptPassword Function for crypt. Password protected, has the ability to transfer input text
function cryptPassword(inputText) {
    for(i = 0; i < inputText.length; i++)
    {
        result[i] = inputText[i].charCodeAt(0);
    }
    let middleNum = result.length / 2
    return String.fromCharCode(...result.slice(middleNum, result.length)) + String.fromCharCode(...result.slice(0,middleNum));
    
}

// @chechCryptPassword Accepts ciphertext and output is plain text

function checkCryptPassword(cryptedMessage, originalMessage) {
    let middleNum = cryptedMessage.length / 2
    let decryptedMessage = cryptedMessage.slice(middleNum, cryptedMessage.length) + cryptedMessage.slice(0, middleNum);
    if (decryptedMessage === originalMessage) {
        console.log('Message is valid!');
    } else {
        console.log('Message is not valid!');
    }
}

// Call function

checkCryptPassword(cryptPassword(inputTestMessage), inputTestMessage);
