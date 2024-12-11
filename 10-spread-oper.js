// 전개 연산자
console.log("=========================================== 배열 전개 연산 ");

let arr1 = ['혼길동', '장길산'];
let arr2 = ['임꺼정', '전우치'];
// arr1랑 arr2 를 하나로 합치려면? 

let combined = [];
// 방법1 (직관적이라 이해는 쉽지만 무식한 방법)
combined = [arr1[0],arr1[1],arr2[0],arr2[1]];
console.log("Combined 합친 방법 1:", combined);

// 방법2 
combined = arr1.concat(arr2);
console.log("combied 합친 방법 2:", combined);

// 방법3
combined = [].concat(arr1, arr2);
console.log("combied 합친 방법 3:", combined);

// ES6 빙식
// 방법4
combined = [...arr1, ...arr2];       // ...arr == arr안에 담긴 모든 요소를 다 풀어라!
console.log("ES6 conbined 방법 4:", combined);

// 배열의 전개 
console.log(`
=========================================== 배열의 전개 `);
console.log("arr1", arr1);

/*
let first = arr1[0];
let second = arr[1];
// 문제 1. 안의 요소가 얼마나 있는지 알 수 없음
// 문제 2. 못받아적음
*/

let [first1, second1, third1, ...others1] = arr1;
console.log(first1, second1, third1, others1);
// 혼길동 장길산 undefined []

let [first, second, third = "empty", ...others] = arr1;
console.log(first, second, third, others);
// 혼길동 장길산 empty []     => third에 기본값을 "empty" 줘서

                                                                console.log("");

console.log("combined:", combined);
[first, second, third = "empty", ...others] = combined;
console.log(first,second, third, others);


console.log(`
=========================================== 객체 전개 연산 `);
let obj1 = {one:1, two:2, other:0};
let obj2 = {three:3, four:4, other:-1};

// 방법 2
combined={
    one: obj1.one,
    two: obj1.two,
    three: obj2.three,
    four: obj2.four,
    other: obj2.other   // 중복 속성 ('내가' obj2.other 쓰기로 결정 한거지? 이건)
}
console.log("combined 방법 1:", combined);

// 방법 2
combined = Object.assign({}, obj1,obj2);        // {} 안에 obj1,obj2를 할당하겠다는 뜻 
console.log("combined 방법 2", combined);       // 중복은, 자연스럽게 뒤에 있는 obj2 걸로 덮어써서 출력
//                                                obj1 가 뒤에 있었으면 other: 0로 덮어씌어질거임

console.log(`
------------------------------------------------- ES6 방식`);
combined = {
    ...obj1,            // obj1 의 모든 속성을 전개한다
    ...obj2,            // obj2 의 모든 속성을 전개한다
}
console.log("ES6 combined: ", combined);
// => ES6 combined:  { one: 1, two: 2, other: -1, three: 3, four: 4 }

// 연결 순서 변경
combined = {
    ...obj2,
    ...obj1
}
console.log("ES6 combined 순서 변경:", combined);
// => ES6 combined 순서 변경: { three: 3, four: 4, other: 0, one: 1, two: 2 }

console.log(`
=========================================== 객체 전개 할당 `);
console.log("object:", combined);

let { other, ...remains} = combined;
console.log(other, remains);