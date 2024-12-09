// ECMAScript의 Number 
// -> 산술 연산이 가능한 데이터를 number 라 할 수 있음 

let n1 = 7;              // Literak (소스에 직접 입력해 생성)
let n2 = Number(7);     // Number 객체를 이용한 생성 

console.log(n1, "==", n2, "?", n1 == n2);            // 자바에서 연산자 많이 했으니까 여선 별로 안한대유
console.log(typeof n1, typeof n2);

// 어음..음.. nodemon 하면 저장했을 때 자동 새로고침 (자동 터미널 업데이트) 되나봅니다 
// (ex) nodemon 02-numbers.js

// 다양한 방식의 데이터 입력
const red = 0xff00000;      // 16진수
const oct = 0o755;          // 8진수
const bin = 0b1101;         // 2진수

console.log(red, oct, bin);

// Math 내장 객체
console.log(Math.round(3.5678));

console.log(Math.max(1,5,3,2,6,7), 
            Math.min(1,5,3,2,6,7));

console.log(Math.round(3.567), 
            Math.trunc(3.567),
            Math.floor(3.567));

console.log("================== Castiong");
// 자바 스크립트는 변수 선언시 데이터 타입을 지정하지 않고,
// (기본적으로) 중간에 데이터 타입이 변경될 수 있기 때문에
// 데이터 형변환이 필요한 경우가 많다

// parseInt, parseFloat : Number 타입으로 변환하는 함수
console.log(parseInt("011"), typeof parseInt("011"));

console.log("11" + "12");
console.log(parseInt("11")+parseInt("12"));

console.log(parseInt("011", 2));                // 진법 변환 (2진수 데이터)
console.log(parseInt("0xFF0000", 16));          // 16 진수 데이터 

console.log(parseInt("123.456"));               // 정수 형태만 변환
console.log(parseFloat("123.456"));             // 실수 전체

console.log(parseInt(Math.PI));                 // float -> int
// 여기까지 정상적으로 변한 케이스 

// 숫자로 변환할 수 없는 형태의 문자열을 반환하면 -> NaN
let v = parseInt("a12345");
console.groupCollapsed(v, "->", typeof v);
// NaN가 포함된 연산의 결과는 항상 NaN 임
console.log(v, "* 3", "=",v * 3);
// number 데이터가 NaN인지 확인하려면 isNaN 함수
console.log(v, "is NaN?", isNaN(v));

console.log("============================== Infinity");
console.log("1/0 =", 1/0);

// 유한수(Finite) 확인 함수 (isFinite)
console.log("1/0 is Finite?", isFinite(1/0));                // 1/0이 유한수냐
console.log("2024 is finite?", isFinite(2024));              // 2024가 유한수냐 
console.log("NaN is finite?", isFinite(parseInt("abc")));    // abc가 유한수냐

// inFinity와 수치형 데이터의 산술 연산 -> inFinity
let result = 1/ 0 + 2024;
console.log(result, typeof result);