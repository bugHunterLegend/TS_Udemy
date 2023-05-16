"use strict";
function add(n1, n2) {
    return n1 + n2;
}
// function printResult (num:number) : void {
//     console.log('Result is:' + num);
// }
// printResult(add(4,7));
let combineValues;
combineValues = add;
// combineValues = printResult;
console.log(combineValues(8, 7));
