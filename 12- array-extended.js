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

    똑같은 함수 콜백 코드임. 일부러 다르게 써서 보여준거임

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





function testReduce() {
    console.log(`
================================== Reduce`);
        // 가장 일반적인 Reduct -> 집계 
    console.log("원본:", source);

    // source 배열의 모든 요소 합산
    let sum = source.reduce((acc, value, index, arr) => {
        
        console.log(
            `콜백 파라미터 (                
            acc: ${acc}, 
            value: ${value},  
            index ${index}, 
            arr: ${arr} )`
            , acc + value       // -> reduce 메서드에서 누적값에서 현재값을 더한거임
        // // `콜백 파라미터(acc: $ {acc},value: $ {value},index $ {index}, arr: $ {arr} )`, acc + value)`
        );
        // acc -> 현재 까지의 집계값. 이전 콜백에서 반환된 값이 여기로 들어가.
        // value -> 현재 값. 현재 처리 중인 배열의 현재 요소
        // index -> 현재 요소의 인덱스. 위치 
        // arr -> reduce 를 호출한 원본 배열 
        //(얘네 이름을 바꿔도 기능은 구현되지만, 거의 고정된 이름이라고 보면 됨. 메서드임.)

        return acc + value;     // -> 다음번 콜백의 acc 로 전달
    }, 0);

    // 합산값
    console.log("합산 결과:", sum);
}
testReduce();




function testReduce2() {
    console.log(`
---------------------------------------------------------------`)
    // 반복되는 모든 것에는 reduce 함수를 적용할 수 있음 
    // map함수를 reduce 함수로 구현
    // 모든 요소를 *2 한 새 배열 생성
    console.log("원본 배열:", numbers);

    let result = numbers.reduce((acc, value) => {
        console.log(`콜백 파라미터: (acc: ${acc}, value: ${value})`);
        acc.push(value * 2);
        console.log(` -> ${acc}`);

        return acc;
    },  [] )
    
    console.log("\n 요소 두배 : ", result);

}
testReduce2();







function testReduce3() {
    console.log(`
---------------------------------------------------------------`)
    // reduce를 이용, filter 함수 구현 
    // number 배열의 요소 중, 짝수만 필터링
    console.log("원본 배열:", numbers);

    let result = numbers.reduce((acc, value) => {
        if (value % 2 == 0) {       // 짝수 필터링
            acc.push(value);
        }
        return acc;
    }, [] )                  // 초기값은 빈배열

    console.log("짝수 배열:", result);
}
testReduce3();



// 데이터 만들고 
const data = [
    { name: "철수", kor:85, eng: 92, math:88 },
    { name: "영희", kor: 70, eng:74, math:95 },
    { name: "지후", kor:91, eng:89, math:85 },
    { name: "지수", kor:65, eng:70, math:72 },
    { name: "윤정", kor:80, eng:90, math:91 }
];
// 데이터 파이프라인 구축 예제
// 졸려 죽게성요 ............. 졸ㄹ려요 살려주자ㅏ 날ㄹ 
function testDataPipeline() {
    console.log(`
================================= map, filter, sort, reduce를 이용한 데이터 파이프라인`);
    console.log("원본데이터:", data);
    
    // map 함수 이용 -> total 파생 변수
    const studentWithTotal = data.map(student => ({          // {}만 하면 코드 블락됨. 그게 아니라 객체 만들어주고 싶은거니까 ()도 추가해야하는거 
        ...student, total:student.kor + student.eng + student.math
    }));                    // 선생님은 중간에 student 를 s로 수정했음. 너무 길어져서
    console.log("map:", studentWithTotal);


    // filter 함수 이용 -> total >= 240 만 출력
    const filteredStudents = 
                studentWithTotal.filter(student => student.total >= 240);
    console.log("총점 240 이상:", filteredStudents);

    
    // sort 함수 이용 정렬 -> total 총점 기준으로
    const sortedStudents = filteredStudents.sort(
        // (a,b) => a.total - b.total       // 오름차순 
        (a,b) => b.total - a.total          // 내림차순 
    );
    console.log("total 순 정렬:", sortedStudents);


    // reduce 함수 활용 -> (sort 했으니까 240 이상인)학생들의 총점 평균 
    const totalSum = sortedStudents.reduce(
        (acc, student) => acc + student.total, 
        0   //  초기값 0
    );
    console.log("총점 240 이상 학생들의 총점:", totalSum);

    const avgTotalSum = totalSum / sortedStudents.length;
    console.log("총점 240 이상 학생드리의 평균:" , avgTotalSum);

}   
testDataPipeline();



console.log(
    "데이퍼 파이프라인 구축:",
    data 
        .map(student => ({
            ...student,
            total: student.kor + student.eng + student.math
        }))
    .filter(student => student.total >= 240)
    .sort((a,b) => b.total - a.total)
    .reduce((acc, student) => acc + student.total, 0) / 3
     
);




