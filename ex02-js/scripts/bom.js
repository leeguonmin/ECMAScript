// js 따로 빼서 만들어주고 불러주는 형태로 해볼라고 폴더 만들고 ask.js , bom.js , pint.js  만든거임 

let newWin;  


// 새 창 열기 
function openWindow() {
    // window.open("https://www.daum.net");


    // window.open("https://www.daum.net", 
    //             "daum", 
    //             "width=400, height=400, left=100, top=100");

     
                                           // newWin 만들어서 window.open~ 할당
    newWin = window.open("https://www.daum.net",        // newWin > 창 닫을때 뭘 닫는지 알아야하니까 만든거임
                "daum", 
                "width=400, height=400, left=100, top=100");
}




// 새 창 닫기
function closeWindow() {
    if (newWin !== undefined && !newWin.closed)
        newWin.close();
}
/*
newWin !== undefined : newWin 변수가 정의되어 있는지 확인 (newWin은 일반적으로 window.open() 메서드를 사용하여 새로운 브라우저 창을 열 때 반환되는 객체)
//                       => newWin이 undefined가 아니어야만 실행된다!
!newWin.closed : newWin.closed는 newWin이 열린 창이 아직 닫히지 않았는지 확인하는 속성
//                       => newWin.closed는 창이 닫히면 true가 되고, 열린 상태이면 false
//                       => !newWin.closed는 이 값이 false일 때 (즉, 창이 열려 있을 때)만 실행
*/





// 창 크기 확인 
function printInner() {
    let message = `현재 윈도우 창의 크기는` +
    ` ${window.innerWidth} x ${window.innerHeight} 입니다.`;
    alert(message);
}