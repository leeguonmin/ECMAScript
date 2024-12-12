// js 따로 빼서 만들어주고 불러주는 형태로 해볼라고 폴더 만들고 ask.js , bom.js , pint.js  만든거임 

let newWin;  

function openWindow() {
    // window.open("https://www.daum.net");

    // let newWin;
    // newwindow.open("https://www.daum.net", 
    //             "daum", 
    //             "width=400, height=400, left=100, top=100");

     
                                           // newWin 만들어서 window.open~ 할당
    newWin = window.open("https://www.daum.net",        // newWin > 창 닫을때 뭘 닫는지 알아야하니까 만든거임
                "daum", 
                "width=400, height=400, left=100, top=100");
}

function closeWindow() {
    if (newWin !== undefined && !newWin.closed)
        newWin.close();
}




function printInner() {
    let message = `현재 윈도우 창의 크기는 ` +
    `${window.innerWidth} x ${window.innerHeight} 입니다.`;
    alert(message);
}