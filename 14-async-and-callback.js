function logic() {
    console.log("begin logic A");                    // 첫번째 출력 
    setTimeout(() => {
        console.log("callbackA called");            // 세번째 출력 
        console.log("begin logicB");                // 네번째 출력 
        setTimeout(() => {
            console.log("callbackB called");        // 6번째 출력 
            console.log("begin logicC");            // 7번째 출력 
            setTimeout(() => {
                console.log("callbackC called");        // 9번째 출력      
            }, 2000);
            console.log("end logcC");               // 8번째 출력 
        }, 2000);
        console.log("end logicB")                   // 다섯번째 출력 
    }, 2000);
    console.log("end logicA")                    // 두번째 출력 
}
// logic();
// 이렇게하면 보기도 힘들고 다 힘들고....
// -> 비동기 처리를 수행하되, 전체적인 흐름을 동기방식처럼 처리할 필요가 있음
// => promise

function logicpromise() {
    console.log("begin logicPromise");

    return new Promise(function (resolve, reject) {
        // resolve => fullfill 상태로 이전 시킬 때 사용하는 콜백
        // reject => reject 상태로 이전시킬 때 사용하는 콜백
        console.log("begin logicPromise");
        setTimeout(() => {
            // resolve("RESOLVE");          // -> then
            reject("REJECTED");             // -> catch
        }, 3000);
    })
}

function testLogicPromise() {
    console.log("Test Logic Promise");
    logicpromise()     // Promise
        // then : fullfill 상태로 이전할 때 호출 
        .then(value => { console.log("PROMISE resolve:", value)})
        .catch(reason => { console.error("PROMISE reject:" , reason)});
}
testLogicPromise();

