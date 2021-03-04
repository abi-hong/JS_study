//require함수안에 불러올 모듈의 경로를 적는다.
const { odd, even } = require('./var');

function checkOddOrEven(num) {
    if(num % 2) { //홍수면
        return odd;
    }
    return even;
}
//다른 모듈을 사용하는 파일을 다시 모듈로 만들 수 있다.
//module.exports에는 객체만 대입해야 하는 것이 아니라 함수나 변수를 대입해도 된다.
module.exports = checkOddOrEven;