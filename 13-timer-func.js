// 기본적인 프로그램의 흐름 -> 동기방식
// console.log("command1");
// console.log("command2");
// console.log("command3");
// 얘들은 순서대로 처리되는데

// timer 함수
// 타이머 생성 : setTimeout(callback, delay)
// -> 비동기 방식

// 타이머 해제 : clearTimeout(timerId)
function timerTest() {
    console.log("2초 후에 인사합니다");         // 1번 호출
    setTimeout(() => {
        console.log("안녕하세요~!");           // 3번 호출!
    }, 2000);       // 2000 -> 2초
    console.log("End of function");           // 2번 호출 

    // 비동기의 간단한 예시
}
// timerTest();


// 그르네에 키오스크에 사용되는 기능들이네
// intervalTest : 특정 시간 간격으로 호출되는 함수 
function intervalTest() {
    let count = 10;
    console.log("10초 후에 타이머가 종료됩니다");
    console.log(count);

    let intervalId = setInterval(() => {        
        console.log(--count);
        if (count <0 ) {                                // 이거 안해주면 타이머 종료를 안함. 마이너스로 끝없이 떨어짐
            console.log("타이머를 종료합니다");
            clearInterval(intervalId);
        }
    }, 1000 );      // 1000 -> 1초
    console.log("End of Function");
}
intervalTest();








