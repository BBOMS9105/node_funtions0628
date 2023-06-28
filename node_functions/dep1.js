// dep2가 실행되는 순간 dep1이 실행되는 무한루프
// Node에서 순환참조를 감지하면 자동으로 {} 빈 객체로 바꿔버림
// 순환참조는 되도록이면 처음부터 하지 않는게 좋음
const dep2 = require('./dep2');
console.log('require dep2', dep2);
module.exports = () => {
    console.log('dep2', dep2);
}