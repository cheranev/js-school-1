// PATTERN DATE = DAY / MONTH / YEAR

const arrayOfString = ['10-02-2022','11/12/2023','12-31-2023','00/13/2022', '41/12/2023', '2023/12/23']
const characterDash = '-'
const characterSlash = '/'
const finallyDate = []
function parseInputDate(arrayOfDate) {

    for (let index = 0; index < arrayOfDate.length; index++) {
        let zxc = "";
        let elementOfarray = arrayOfDate[index];
        let replacedCharacter = elementOfarray.replaceAll(characterDash,characterSlash)
        let splitStringDate = replacedCharacter.split(characterSlash)

        if (splitStringDate[0] < 1 || splitStringDate[0] > 31) {
            console.log(`date \"${replacedCharacter}\" is not correct`)
        }
        else if (splitStringDate[1] > 12) {
            zxc = splitStringDate[1] + characterSlash + splitStringDate[0] + characterSlash + splitStringDate[2]
            finallyDate.push(zxc)
        }
        else {
            finallyDate.push(replacedCharacter)
        }
    }
    return finallyDate
}
console.log("Format date dd/mm/yyyy")
console.log(parseInputDate(arrayOfString))
