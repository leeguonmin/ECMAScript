// boolean 
// 비교 & 논리 연산의 결과값 
// 조건 확인이나 루프 등에 사용함 
//  일단, 터미널에 <nodemon 04-boolean.js> 적어서 이 파일에 들어가줘

let v1;             // 선언만. 할당은 하지 않음. => undefined 상태
let v2 = null;      // 의도적으로 빈값을 할당한 null 

// undefined : 자바스크립트 엔진이 할당하는 값
// null : 개발자가 직접 할당하는 값
console.log(v1,v2);

console.log(v1 == v2);                           // == : 값의 형태만 비교
console.log(v1, typeof v1, v1 == undefined);   // undefined 자체가 v1의 타입이 되는 거임 (중요)
console.log(v2, typeof v2, v2 == null);         // 반면, 얘는 타입은 object 로 뜨지. null의 타입은 object 인
console.log(v1 === v2); 


console.log("==================================================");
// == : 타입과 상관없이 값만 비교 
// === : 값과 함께 타입도 비교
console.log(123 == "123");      
console.log(123 === "123");     // 형태가 같긴 한데, 123은 num고 "123"은 string 이라서 타입은 같지 않으니 false 




console.log("==================================================");
// Boolean   
// let b1 = 7 > 5;           // 비교 연산의 결과 (논리 연산의 결과)
// let b2 = v1 == v2;       // 얘네로 하려다 말았음

let a=7;
let b =5;

let b1 = a > b ;                // 비교 연산의 결과 (논리 연산의 결과)
let b2 = b >= 0 && b <= 10;     // 논리 연산의 결과
// 논리 연산자 : AND(&&), OR(||), NOT(!)    => 눈리 결과 조합
console.log(b1,b2);


console.log("==================================================");
// Boolean 타입 함수를 이용한 Boolean 판정
// number ( : 0이면 false 인가봐 )
// string : 내용이 있으면 참 true , 빈 문자열이면 false
// => 숫자열이랑 문자열도 논리 연산값에 포함 가능
console.log(Boolean("ECMAScript"), Boolean(""));
console.log(Boolean(2024), Boolean(0));


// ShortCircuit
console.log(true && "Test");        // 왜 Test 가 나오냐? => true면 Test여야 하니까. true로 만들기 위해 Test가 출력
console.log(false && "Test");       // 값이 false 여야 하니까 "" 여기가 Test 든 말든, 볼 것도 없이 false 출력

console.log(true || "Test");        // 왜 true가 나오냐? => true 값이 나와야 하니까, 얘도 뒤에 "" 여기가 Test 든 말든, 볼 것도 없이 true 출력
console.log(false || "Test");













