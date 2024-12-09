// 새파일 생성 > 이름을 '03-string.js' 로 하고 
// 터미널에 nodemon 03-string.js 시작을 이렇게, 03 파일에 들어와

//string : 유니코드 문자의 연결 구조 
const s1 ="Modern JavaStript and Java";
const s2 = String("Modern JavaStript");
console.log(typeof s1, typeof s2);

// property : .length -> 문자열 길이
console.log(s1, ", length =", s1.length);

// 문자열 추출 메서드 : zero-base 기본적으로 제로 베이스
console.log(s1.charAt(7));          //인덱스 7의 문자 
console.log(s1[7]);                 // 문자열은 배열처럼 취급된다

console.log(s1.substr(7, 10));      // 인덱스 7부터 10개
//          -> deprecated (폐지 예정인 방법)
console.log(s1.substring(7,17));    // 인덱스 7에서 17 앞까지
//          -> 대신 이 방법을 쓰셈
console.log(s1.substring(7));       // 인덱스 7부터 끝까지


