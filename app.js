function sortArray() {
    let arrayNums = [1,40,-5,10,0]

    for (var i = 1; i < arrayNums.length; i++)

    for (var j = 0; j < i; j++)

        if (arrayNums[i] < arrayNums[j]) {

            var x = arrayNums[i];
            arrayNums[i] = arrayNums[j];
            arrayNums[j] = x;
        }
    return arrayNums;
}

console.log(sortArray());