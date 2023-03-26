const hourlyRate = 80; // Наша часовая ставка
const hoursWorkPerDay = 5; // Сколько частов в день мы работаем
const daysLeftToWeekend = 11 // Дней до вылета
const weekend = 2; // Сколько выходных
const needHours = 40; // Сколько часов предлагают

let leftHoursForWork = (daysLeftToWeekend - weekend) * hoursWorkPerDay;

function employmentCheck(hours) {

    if (hours <= leftHoursForWork) {
        console.log(`Есть ли время работы? ` + true);
    } else {
        console.log(`Есть ли время работы? ` + false);
    }
}
function priceOfWork(prices) {
    let paymentWork = needHours * prices;
    return paymentWork;
}

function workLogger() {
    let firstName = "Ivan"

    employmentCheck(needHours);
    console.log(String('10') - 5 + Boolean('') + '1');


    console.log(`Payment for work - ${priceOfWork(hourlyRate)}$`);
    
}
workLogger()