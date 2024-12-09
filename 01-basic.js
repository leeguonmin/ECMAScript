// 한줄 주석
/*  여러 줄 주석 */

// 콘솔 출력은 전역 객체 console 의 출력 메서드를 사용
console.error("에러 메세지");
console.warn("경고 메세지");
console.debug("디버그 메세지");
console.log("일반 메세지");
console.info("정보 메세지");

// 내용을 연속적으로 출력할 때는 ,로 구분
// 예
console.log("ECMAScript", 2024, true);

console.log(process);

// 객체의 속성에 접근할 때는 .으로 접근한다
// 예
console.log("Process Version:", process.version);
console.log("Process Platform:", process.platform);
console.log("Process Architecture:", process.arch);

// console.timeLog("==============================");
console.log("==============================");

// var, let, const
var testVar = "var";            // ES6 이전 JS 방식 
let testLet = "let";            // 재할당 가능 (mutable)
const testConrst = "const";     // 재할당 불가 (immutable)

// 변경
testVar = "var changed";
testLet = "let changed";
/* testConrst = "const changed";   // error : const 는 재할당 불가 */

// ES6 지원 환경에서는 let,const 사용
// 우선 const를 먼저 고려하고 ->
//      값이 바뀌는 것이 자연스러울 경우 let 으로 교체 (데이터의 돌변성?)

// 자바스크립트는 데이터 타입이 고정되지 않는다
// 데이터가 할당되었을 때, 그 타입이 결정된다
let v = "This is String";
// 데이터 타입을 확인하고자 할 때, typeof 키워드 
console.log(v, "->", typeof v);

v=2024;
console.log(v, "->", typeof v);     // 터미널에서 확인하면, 2024 -> number 이렇게 떠. 2024는 number 타입이라고