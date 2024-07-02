const returnEmptyString = function returnEmptyString (string) {
    return ""
}

const returnZeroNumber = function returnZeroNumber (number) {
    return 0
};

const returnEmptyArray = function returnEmptyArray (array) {
    return []
};

const returnEmptyObject = function returnEmptyObject(object) {
    return {}
};

const returnAbcString = function returnAbcString (string) {
    return "abc123"
};

const returnSumOfTen = function returnSumOfTen (a, b) {
    return a + b
};

const subtraction = function subtraction (a, b) {
    return a - b
};

const multiplication = function multiplication (a, b) {
    return a * b
};

const division = function division (a, b) {
    return a / b
};

const returnArray = function returnArray (array) {
    return [1, 2, 3]
};

const returnFirstIndex = function returnFirstIndex (array) {
    return array[0]
};

const returnSecondIndex = function returnSecondIndex (array) {
    return array[1]
};

const returnArrayLength = function returnArrayLength (array) {
    return array.length;
};

const arraySum = function arraySum (array) {
    return array.reduce;
};

const arraySubtraction = function arraySubtraction (array, number) {
    return array.map(num => num - num);
};

const multiplicationArray = function multiplicationArray (array, num) {
    return array.map(num => num * num);
};

const divisionArray = function divisionArray (array, num) {
  return array.map(num => parseFloat((num / num),tofixed(3)));
};

const oddArray = function oddArray (array) {
        return array.filter(num => num % 2 !== 0);
      
};

const evenArray = function evenArray (num) {
    return num.filter(num => num % 2 === 0);
};

module.exports = {
returnEmptyString,
returnZeroNumber,
returnEmptyArray,
returnEmptyObject,
returnAbcString,
returnSumOfTen,
subtraction,
multiplication,
division,
returnArray,
returnFirstIndex,
returnSecondIndex,
returnArrayLength,
arraySum,
arraySubtraction,
multiplicationArray,
divisionArray,
oddArray,
evenArray
}
