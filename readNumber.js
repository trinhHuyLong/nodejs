const numberArray = ['không', 'môt', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín']

function handleHundred (number) {
    var result = ''
    result += numberArray[number[0]] +' trăm '
    if(number[1] === '0') {
        result += 'lẻ '
    } else {
        result += numberArray[number[1]] +' mươi '
    }

    if(number[2] !== '0') {
        result += numberArray[number[2]]
    }
    return result
}

function readNumber(number) {
    var numberString = number.toString()
    var result = ''
    if(numberString.length === 1) {
        result += numberArray[numberString]
    } else if(numberString.length === 2) {
        if(number)
        result += numberArray[numberString[0]] + ' mươi'
        if(numberString[1] !== '0') {
            result += numberArray[numberString[1]]
        }
    } else if(numberString.length === 3) {
        result = handleHundred(numberString)
    }
    return result 
}

console.log(readNumber(120))