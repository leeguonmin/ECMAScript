// array 확장

// forEach : 배열 내부 요소들을 하나씩 추출해서, 콜백 함수로 전달한다
function testForEach() {
    console.log("================================== testForEach");
    const source = ["Apple", "Banana", "Carrot", "Durian"]

    console.log("-------------------- 요소만 전달");
    source.forEach(item => {                // item : 현재 배열 요소. 임의 이름 ( ["Apple", "Banana", "Carrot", "Durian" 의 경우, 첫번째 반복에서는 "Apple", 두번째 반복에는 "Banana" )
        console.log(item);
    })

    console.log("-------------------- 요소와 함께 인덱스 전달")
    source.forEach((item,index) => {        // index : 현재 배열 요소의 인덱스, 위치. ("Apple의 위치는 0, "Banan"의 위치는 1)
        console.log(`${index}번째 요소 -> ${item}`);
    })


    console.log("-------------------- 요소, 인덱스와 원본 배열까지 전달하고자 할때")
    source.forEach((item,index,arr) => {        // arr : forEach 메서드가 호출된 원본 배열 전체. 이 경우는 arr는 source 배열 (["Apple", "Banana", "Carrot", "Durian"])과 동일 >반복마다 동일한 배열 참조가 전달되므로 원본 배열을 참조하거나 조작하는 데 사용할 수 있음<
        console.log(`${index}  -> ${item}`, arr);
    })
};
testForEach();

function testEverySome() {
    console.log(`
================================== Every Some`);

    const data = [
        { name: "홍길동",age:25},
        { name: "장길산", age:35},
        {name:"전우치", age:25}

    ];      // 객체의 배열
    console.log("원본 데이터:", data);


    // 모든 객체의 age 가 25세 초과하는지 검증 
    let result = data.every(obj => obj.age > 25);       // 검증 로직
    console.log("모든 인물의 나이가 25세 초과?", result);

    // 모든 객체의 age 가 10세 이상인지 검증 
    let res = data.every(obj => obj.age > 10);      // (얘랑)
    console.log("모든 인물의 나이가 10세 초과?", res);

    
    // 일부 객체의 age가 15세를 초과하는지 검증 
    result = data.some(obj => {                      // (얘랑)
        return obj.age > 25;
    });
    console.log("일부 인물의 나이가 25세 초과?", result);


    // data 배열의 요소들이 객체기 때문에, 
    // ojb(얘도 임의로 정한 이름 ) 는 현재 순회 중인 객체를 의미

    /*
    (obj => obj.age > 25);           => every 는 data 배열의 각 요소를 순회함 
    얘랑 

    {
        return obj.age > 25;
    }); 
    얘는 

    똑같은 코드임. 일부러 다르게 써서 보여준거임

    */ 


}
testEverySome();






// 데이터 처리 파이프라인 
const numbers = [1,2,3,4,5,6,7,8,9,10];
const source = [12,4,19,33,86];

// map 함수를 통과시킨 다음에 ->
// -> 필요한 정보만 filter 하고 
// -> sort 
// -> reduce 
// map -> filter -> sort -> reduce


// map : 배열 형태는 그대로. 배열 요소를 변형시킨다
function testMap() {
    console.log(`
================================== map`);
    console.log("원본 배열 :" , numbers);

    // numbers 배열의 모든 요소를 2배로
    // 방법 1 (기존 방식의 구현, 예전 방식)
    let multiply = [];
    for (let i=0; i<numbers.length; i++) {
        multiply.push(numbers[i] * 2);
    }

    console.log("기존 방식: *2:", multiply);

    // 방법2
    multiply = numbers.map(item => item * 2);
    console.log("MAP: *2:", multiply);

}
testMap();






// filter : 내부 요소는 그대로, 조건 만족하는 요소만 뽑아서 새 배열 생성
function testFilter() {
    console.log(`
================================== filter`);

    // numbers 배열에서 짝수만 필터링  해봅세
    let result = numbers.filter(item => item % 2 == 0);
    console.log("원본 데이터:", numbers);
    console.log("짝수 데이터:", result);

    console.log("3의 배수: ", numbers.filter(item => item % 3 == 0));
}
testFilter();