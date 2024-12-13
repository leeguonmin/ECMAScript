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
// testLogicPromise();


// 좀 더 편하게 promise 비동기 구현을 위해 async /  await 키워드를 이용
// async 함수는 비동기 처리를 위해 promise 를 반환한다
// (비동기 처리를 함에도, 동기처럼 처리)
async function f() {
    console.log("async function");
    return 1;
}
console.log("Before f()");
f().then(console.log);
console.log("End Of Code");

// 가상 시나리오
// 프라미스를 이용해서 네트워크통신으로- 즉, ajax로 데이터 가져올 때
function fetchData() {
    // 네트워크 통신 : 가정
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("서버로부터 가져온 데이터");
    }, 3000);
});
}

async function processData() {
    console.log("데이터를 가져오는 중....");

    // await 키워드 : promise 가 해결될 때까지 코드를 일시 중단 시킨다
    // promise 가 해결되면 await 는 promise 의 결과를 반환한다
    const data = await fetchData();         // 여기 반드시 비동기 함수여야한다고?
    console.log("가져온 데이터: ", data);

}
processData();

