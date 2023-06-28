//const value = require('./var')
//console.log(value);

const { odd, even } = require('./var');

function checkOddOrEven(number){
    if (number % 2) {
        return odd;
    } else {
        return even;
    }
}

// module.exports는 파일에서 한 번만 사용해야함
module.exports = checkOddOrEven;