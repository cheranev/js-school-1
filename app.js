let jsonQuery = {
    'search':'Вася',
    'take': 10
};

function fromJsonToUrlParametr(json) {
    return Object.entries(json).map(e => e.join('=')).join('&');
}
  
console.log(fromJsonToUrlParametr(jsonQuery));