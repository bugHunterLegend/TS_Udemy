"use strict";
function combine(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        return +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combineAges = combine(20, 30, 'as-number');
console.log(combineAges);
const combineStringAges = combine('20', '30', 'as-text');
console.log(combineStringAges);
const combineNames = combine('Max', 'Nina', 'as-text');
console.log(combineNames);
