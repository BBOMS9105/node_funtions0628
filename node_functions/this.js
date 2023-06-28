console.log(this); // global인가? result = {}

console.log(this === module.exports); // 전역스코프에서 this는 module.exports이다

function a(){
    console.log(this === global); // 함수 안에서 this는 global이다
}

a();