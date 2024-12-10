// 컨트롤 c로 터미널 나가주고 
// nodemon 05-flow-control.js 입력해서 여기로 입장~

// if ~ else if ~ else
// Switch ~ case
// for, while, do wile 
// => 모두 c계열 문법과 거의 동일 


console.log("연습 문제 1-1) for문 구구단");
// 연습 문제 1-1) for문 구구단
// 1단 ~ 9단까지 루프돌며 출력
for (let v = 1; v < 10; v++) {
    for(let i=0; i<10; i++) {
        console.log(v, "x", i, "=", v*i);
    }
    console.log("");
}

console.log("==============선생님================");
// 선생님 정답 
for (let dan=2; dan <= 9; dan++) {
    console.log(dan + "단");
    for (let num =1; num < 10; num++) {
        console.log(dan, "*", num, "=", dan * num);
    }
}

// 와 그래두.... 어케해야하는지 대충 감이 오긴 하네. 전엔 감도 안 왔는데
// 결국 보고 해야한다는 점이 크게 나아진 건 없다는걸 알려주지만 ㅋㅋㅋ 



console.log(`
연습 문제 1-2) while 문 구구단`);
// 연습 문제 1-2) while 문 구구단
// 1단 ~ 9단까지 루프 돌며 구구단 출력 
let y =1;
while (y <10 ) {
    let i = 1;
    while(i<10) {
        console.log(y, "x", i, "=", y*i);
        i += 1;
    }
    console.log("");
    y += 1;
}

console.log("==============선생님================");
// 선생님 정답 
let da = 2;         // 반복변수 초기화 
while(da <= 9) {
    console.log(da + "단");
    let nu = 1;
    while(nu <=9 ) {
        console.log(da, "*", nu, "=", da * nu);
        nu++;
    }
    da++;                   // 이거 안해주면 진자 대박 미친일이 일어나는걸 봤음
}

// while(i>10) {
//     console.log(y, "x", i, "=", y*i)
//     i += 1;              // 이걸 아직도 혼자 생각못함 나가리데스요
//     y += 1;
// }




console.log(`
연습 문제 2-1) for 문을 이용해서 별 그리기 `);
// 연습 문제 2-1) for 문을 이용해서 별 그리기 
/* (문제 예시)

*****
****
***
**
*

*/
// let u = "*";
// console.log(u);
// for (let i = 5; i <= 1; i--) {
//     console.log("*".repeat(i));
// }
console.log("==============선생님================");
// for문 역삼각형 문제 선생님 정답 
for (let row=5; row >0; row--) {
    // console.log(row);
    let stars = "";
    for (let col = 1; col <= row; col++) {
        stars += "*";
    }
    // 루프 다 돈 다음에 출력 
    console.log(stars);
}



console.log(`
while 문을 이용해서 별 그리기`);
// 연습 문제 2-2) while 문을 이용해서 별 그리기 
/* (문제 예시)

*****
****
***
**
*

*/
console.log("==============선생님================");
// while문 역삼각형 문제 선생님 정답 
let ro = 5;
while (ro > 0) {
    let star = "";
    let co = 1;
    while(co <= ro ) {
        star += "*";
        co ++;          // 반복 변수 증가 
    }
    // 힌복 한번
    console.log(star);
    ro --;
}


// TODO : for ... in
//  - 객체의 속성 key를 반복하는 루프

// TODo : for ... of 
//  - 컬렉션 객체(배열)의 요소 순환







