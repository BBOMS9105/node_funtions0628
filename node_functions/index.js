const { odd, even } = require('./var');
// 변수명은 변경 가능하다
const checkNumber = require('./func');

function checkStringOddOrEven(str){
    if(str.length % 2){
        return odd;
    } else {
        return even;
    }
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));