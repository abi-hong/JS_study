const { odd, even } = require('./var');
//모듈로부터 값을 불러올 때 변수 이름을 다르게 지정할 수도 있다.
const checkNumber = require('./func');

function checkStringOddOrEven(str) {
    if (str.length % 2){ //홀수면
        return odd;
    }
    return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));