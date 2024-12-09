// 새파일 생성 > 이름을 '03-string.js' 로 하고 
// 터미널에 nodemon 03-string.js 시작을 이렇게, 03 파일에 들어와

//string : 유니코드 문자의 연결 구조 
const s1 ="Modern JavaScript and Java";
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

console.log("================================================")

// 문자열 검색 메서드 
console.log("원본:", s1);

let pos=s1.indexOf("Java");
console.log("1st Search:", pos);        // 첫번째 Java의 위치    ( => 7번째라고 출력됨)
pos = s1.indexOf("Java", pos + 4);      // 검색 시작 위치 재정의 (7에서 4를 더해)
console.log("2nd Search:", pos);        // 두번째 Java의 위치
pos = s2.indexOf("Java", pos + 4);      // 검색어를 찾지 못하는 경우를 볼 예시
console.log("No Keyword:", pos);        // -1 :없음, 이 나오는걸 볼 수 있음

pos = s1.lastIndexOf("Script");         // 뒤로부터 앞으로 검색
console.log("lastIndexOF:", pos);

//  문자열 치환 
console.log("원본:" , s1);
console.log("replace:", s1.replace("JavaScript", "ECMAScript"));
console.log("원본:" , s1);              // 원본이 바뀌는건 아님. 다시 출력하면, 원본 그대로임. 바꿔서 쓰려면 함수로 변경해야해? 하는 듯?

// 좌우 화이트 스페이스 제거
const noisyStr = "          Hello, ECMAScript            ";
console.log(noisyStr);
console.log(noisyStr.trim());

// 문자열 보충 수업
// 이스케이프 문자 => 매우 유의하도록 하자 
//  \n : 줄 바꾸기
//  \t : 탭 
//  \' : 작은 따옴표 (')
//  \" : 큰 따옴표 (")
//  \` : 백틱(ES6에서 추가됨)       => 열어줄 문자열
//  \$ : 달러 기호(ES6에서 추가됨)  => 외부 변수를 이 문자열 변수에다 직접 연결? 하겠다고? 무슨 말인지 다 흘러나감 

let message = 'He said, "Hello"';           //이렇게 작은 따옴표로 하는거? 아무문제없음
console.log(message);
// message = "He said, "Hello"";               // 근데 이렇게 쌍따옴표를 중복되게 써? => 에러나. " 가 중복이잖아
// 되게 하려면
message = "He said, \"Hello\"";                 // 이게 이스케이프 문자 쓰면 정상적으로 출력됨

// 현재 실내 온도는 __도 입니다. => __ 안에 데이터를 넣어주고싶으면
let temp = 23;
message = "현재 실내 온도는 " + temp + "도 입니다";
console.log(message);                       // 예전 방식

// 템플릿 문자열 : 백틱(`), ${}
message = `현재 실내 온도는 ${temp} 도 입니다`;     // 템플릿을 활용한 요즘 방법. 굿 b
console.log(message);

// ` 의 장점. 여러 줄 문자열도 템플릿 문자열로 쉽게 표현 가능 
    // 예전에는 여러 줄\n
    // 문자열을 만드는 게\n
    // 쉽지 않앗습니다.
message =
"예전에는 여러 줄\n문자열을 만드는 게\n쉽지 않앗습니다.";
console.log(message);               // 이렇게 \n 개행 써서 하려면 할 수 있긴 하지만~ 길어질수록 복잡하고 힘들어지잖아.

message = `
하지만 ES6에서는
아주 손쉽게
여러 줄 문자열을 만들 수 있습니다`;     // 백틱 쓰면 이렇게 바로 됨 
console.log(message);                // 짜잔






