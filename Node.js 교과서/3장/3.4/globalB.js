//global 객체에 속성명이 message인 값을 대입하고 globalA 모듈의 함수를 호출한다.
const A = require('./globalA');

global.message = '안녕하세요';
console.log(A());
//콘솔 결과는 globalB에서 넣은 global.message값을 globalA에서도 접근할 수 있음을 보여준다.