
// Статичные переменные

const addressLat = 100;
const addressLong = 100;
const positionLat = 400;
const positionLong = 300;

function getDistance(x1, y1, x2, y2){
    let y = x2 - x1;
    let x = y2 - y1;
    
    return Math.sqrt(x * x + y * y);
}

function navigatorMain() {
    console.log(getDistance(addressLat, addressLong, positionLat, positionLong));
    
}

navigatorMain()