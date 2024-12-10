// 컨트롤 c 해서 터미널 나가고 
// nodemon 06-functions.js 써서 이 파일로 입장 

// 함수 
// 함수 선언문
function sum(a,b) {
    return a+ b;
}
// 함수에 필요한 것들 
// sum : 함수 이름                              (snm 임의로 정한 식별자 이름)
// a , b : 함수의 매개 변수, 입력값              (a , b 임의로 정한 이름)
// retuen : 출력

// 함수의 목적 : 입력 -> 함수 -> 로직 -> 출력 = 입력받아서 함수를 이용해 로직을 거쳐 값을 출력
// 코드의 집합을 다른 곳에서 재사용하기 위해서 만들어진 것이 함수

 console.log(sum(10,20));
 console.log(sum(30,40));


 // 함수 표현식 : 이름이 없는 함수 => 익명 함수
/*   이렇게 쓰면, 이름 없는 익명 함수 임. 이름이 없으면 return 할 수 없잖아. 그러니까 이름 const asum 넣어주자. 
 function(a,b) {
    return a + b;
 };
 */
 const asum = function(a,b) {
    return a + b;
 };
 console.log(typeof asum, asum(10,20));

// Function Programming (함수형 프로그래밍)

// 매개변수의 이해
console.log("====================매개 변수============================");
// 매개변수 선언 여부와 별도로 전달된 모든 매개 변수가 
// arguments 라는 함수 내장 매개변수로 전달

function getNumberTotal() {     // 매개변수 정의가 없는 상태
    // console.log("전달된 매개변수:", arguments);
    
    // 전달받은 모든 매개변수를 합산, 해서 돌려줘보자 (return)
    // let result =0;
    // for (let i=0; i<arguments.length; i++) {
    //     result += arguments[i];
    // }
    // return result;

    let result =0;
    for (let i=0; i<arguments.length; i++) {
        if(typeof arguments[i] === "number")
        result += arguments[i];
    }
    return result;
};

// 매개변수 여기서 선언?
console.log(getNumberTotal(1,2,3,4,5));         // => undefined
console.log(getNumberTotal(1,2,"3",4,5));       // => undefined

/*
let result =0;
    for (let i=0; i<arguments.length; i++) {
        result += arguments[i];
    }

    함수 줄 때 

    console.log(getNumberTotal(1,2,"3",4,5)); 가

    3345 가 나오는 이유는 
    1, 2 까지는 더해서 3 했는데
    "3"부터 문자열이라 다 그 뒤로 다 문자열로 바뀌어서 그럼 

    제대로 숫자를 더한 값을 추가하려면? 
    if(typeof arguments[i] === "number")
    추가해서 타입 구분을 잘 해줘야함 

    <최종> 위에 있는 것고 ㅏ같음 
    let result =0;
    for (let i=0; i<arguments.length; i++) {
        if(typeof arguments[i] === "number")
        result += arguments[i];


*/




console.log("====================콜백 함수============================");
// JavaScript 의 함수는 '1급 시민 '
// - Number, String 과 동등한 지위를 갖는다 
// - 변수에 할당 될 수 있고, 
//          다른 함수의 매개변수로 전다로딜 수 있다
// - 함수의 결과로 리턴 될 수 있다 => 고계 함수 

function sandbox(va11, va12, func) {
    if (typeof func === "function")
        return func(va11, va12)

}

// 콜백 함수
sandbox(3,4,function(v1,v2) {
    console.log(v1 + v2);
});
sandbox(3,4,function(v1,v2) {
    console.log(v1 * v2);
});

// 함수를 전달해주고, 함수 내부에서 거꾸로 호출되는 함수
// => 콜백 함수 callback 함수
// 데이터 처리 함수, 이벤트 처리 함수 등에서 활용 됨 (중요한 기법임)

// 화살표 함수 : =>
console.log("======================화살표 함수=======================")
const f1 = function() {
    return "hello";
};

console.log(f1());


const f1Arrow = () => "hello";      // 화살표 함수
console.log(f1Arrow());



const f2 = function(name) {
    return "Hello, " + name;
}
console.log(f2("홍길동"));
// 매개변수가 하나, 혼길동. 화살표 함수로 바꿔보자
const f2Arrow = name => "Hello, " + name;       // 매개변수 하나 있을땐 name의 가로 생략해도 됨
console.log(f2Arrow("홍길동"));

console.log(sandbox(3,4, (v1,v2) => v1 * v2));
console.log(sandbox(3,4,(v1,v2) => v1 / v2));







