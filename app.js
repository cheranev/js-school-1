const staticArray = [1,10,11,3,4,5,55,9]

function sortArray(arrayToSortAfterClear) {

    for (let i = 1; i < arrayToSortAfterClear.length; i++)

    for (let j = 0; j < i; j++)

        if (arrayToSortAfterClear[i] < arrayToSortAfterClear[j]) {

            let x = arrayToSortAfterClear[i];
            arrayToSortAfterClear[i] = arrayToSortAfterClear[j];
            arrayToSortAfterClear[j] = x;
        }
    return arrayToSortAfterClear;
}

function clearArray(arrayToDelete) {

    let clearArray = []

    for (let i = 0; i < arrayToDelete.length; i++){
        if (arrayToDelete[i] <= 5) {
            arrayToDelete.slice(i)
            console.log(`index[${i}] does not meet the requirement | ${arrayToDelete[i]} <= 5`)
        } else {
            clearArray.push(arrayToDelete[i])
            continue
        }
    }
    return sortArray(clearArray)
    
}
console.log(clearArray(staticArray))