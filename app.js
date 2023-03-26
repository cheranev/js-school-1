const ruWelcome = "Привет!";
const enWelcome = "Hello!";
const deWelcome = "Guten tag!";
let inputLanguage = prompt("Select language (ru, en, de)")
function translateMain() {
    switch (inputLanguage) {
        case 'ru':
            alert(`Russian layout - ${ruWelcome}`)
            break;
        case 'en':
            alert(`English layout - ${enWelcome}`)
            break;
        case 'de':
            alert(`German layout - ${deWelcome}`)
            break;
        default:
            alert(`Incorrect input data`)
            break;
    }
}
translateMain()