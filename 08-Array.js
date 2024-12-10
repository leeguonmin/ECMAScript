// 배열 
// 생성 1. Array 객체 이용 
const v1 = new Array(10);                // 10개짜리 빈 배열
const v2 = new Array();                  // 빈 배열 
const v3 = new Array(1,"ABC",true);      // 초기화 배열 
console.log(v1, v1.length);
console.log(v2, v2.length);
console.log(v3, v3.length);

// 두번째 생성 
// 생성 2. 리터럴로 생성 ( 더 좋은 방법? 추천 방법 )
const v4 = [];                  // 빈 배열 
const colors = ["red", "green", "blue", "yellow"];

// 타입 체크 
console.log(typeof v4, typeof colors);          // 근데 이거로는 특정 객체가 배열이지 아닌지 알 수 없음. 
//                                                  이것도 object object 인것만 알려줬잖아  

// 특정 객체가 배열인지 아닌지 확인할 때 
console.log(Array.isArray(v4), Array.isArray(colors));

// 기본 값으로 채우기 
const v5=new Array(10).fill(1);         // 배열 10개를 다 1로 채움 
console.log(v5);                
v5.fill("a");                           // 배열 10개를 1이 아닌 a로 변경 
console.log(v5);


// 객체로 배열처럼 접근할 수 있음 
const person = {
    name : "홍길동",
    age: 28
};
console.log(person[`name`], person[`age`]);

// 자바 스크립트의 배열은 인덱스 범위를 엄격히 체크하지 않는다! 
const arr = [];
console.log(arr, arr.length);

// 인덱스 범위를 벗어난 배열의 접근
arr[10] = 2024;                         // 0~10개의 방이니까 총 11개의 방 
console.log(arr, arr.length);           // -> [ <10 empty items>, 2024 ] 11 == 배열 안에 10개의 빈 방과, 2024 있음 

console.log(`
===================================== Methods 메서드`);
// 배열 합치기 : concat
const veges = ["배추", "무", "쪽파"];
const sources = ["소금", "고추가루", "새우젓"];

// console.log(Array.concat(veges, sources))       // 파이썬은 이거 된대 
// console.log(Array.concat(sources))

const ingr = veges.concat(sources);     // 합치고
console.log(ingr);                      // 출력

// join : 특정 문자열 기준 합치기
console.log("김장 재료:", ingr.join(","));      // 합치면서 배열들에 , 추가
console.log("");


// push, pop  ->  Stack 자료형처럼 사용 가능
let fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log(fruits);
fruits.push("Kiwi");            // Kiwi 추가. push
console.log(fruits);

console.log(fruits.pop());      // 늦게 들어간 애가 제일 먼저 꺼내짐 Kiwi
console.log(fruits.pop());      // Mango 꺼내 pop
console.log(fruits.pop());      // Orange 꺼내 pop
console.log(fruits);            // -> 남은 애들 ['Apple', 'Banana']


fruits.push('Orangr', 'Mango', 'Kiwi');     // 다시 push
console.log(fruits);

// 이제 앞에서부터 꺼내볼거임 
console.log(fruits.shift());    // 가장 앞에 있던 Apple 꺼내짐 shift
console.log(fruits.shift());    // Banana 꺼내 
console.log(fruits.shift());    // Orangr 꺼내 
console.log(fruits);            // -> 남은거 [ 'Mango', 'Kiwi' ]


console.log("----------------------------- splice");
// splice
fruits = [ 'Apple', 'Banana', 'Orangr', 'Mango', 'Kiwi' ];
console.log(fruits);

// 매개변수가 1개 : 해당 인덱스부터 끝까지 추출 후, 제거! (인수가 한개일 경우, 기본이 삭제)
/*
console.log(fruits.splice(2));       // 2번 인덱스부터 끝까지 추출 ('Orangr', 'Mango', 'Kiwi' 추출 후 삭제)
console.log(fruits);                // 남은건 ['Apple', 'Banana']
*/


/*
// 매개변수가 2개 : 첫번째 매개변수 인덱스부터 ~ 
//                  두번째 매개변수 개수 만큼 추출 후 삭제
console.log(fruits.splice(2,1));    // 2번 인덱스부터 1개 추출 후 삭제 ('Orangr' 삭제  )
console.log(fruits);                // 남은거 ['Apple', 'Banana', 'Mango', 'Kiwi']
*/



// 매개변수가 3개 이상 : 첫번째 매개변수 인덱스부터 ~ 
//                      두번째 매개변수 개수 만큼 추출 후 삭제 하고!
//                      + 세번째 이후 매개변수를 요소로 추가! 
console.log(fruits.splice(2,1,"Guava", "Grape"));           // 2번부터 1개 추출하고, "Guava", "Grape" 추가 
console.log(fruits);                                        // ['Apple', 'Banana', 'Guava', 'Grape', 'Mango', 'Kiwi']

console.log("----------------------------- reverse : 순서 반전");       // 순서 반전. 뒤집기
console.log("원본:" , fruits);
fruits.reverse();
console.log("REVERSE:", fruits);                        // 'Kiwi', 'Mango', 'Grape', 'Guava', 'Banana', 'Apple'

console.log("---------------------------- slice");
console.log("원본:", fruits);                           // 'Kiwi', 'Mango', 'Grape', 'Guava', 'Banana', 'Apple'
let slice = fruits.slice(2,5);                          // 2번 인덱스 앞부터 5번 인덱스까지
console.log("SLICE:", slice);                           // 'Grape', 'Guava', 'Banana'

console.log("--------------------------- sort : 정렬 ");        // 정렬
console.log(fruits);                                    // 'Kiwi', 'Mango', 'Grape', 'Guava', 'Banana', 'Apple'


/*
fruits.sort();              // 기본값은 오름차순
console.log("sort:", fruits);
*/

/*
fruits.sort((v1,v2) => {
    // 역순 정렬                                        // 자바스크립트는 역순이 많이 으렵네..........
    // 0이면 순서가 같다 (즉, 변경 업음)
    // 0보다 작을 때 => v1이 앞으로
    // 0보다 클 때 => v2가 앞으로
    //      (이 규칙을 우리가 만들어줘야함)                 

    if (v1 < v2) return 1;
    if (v1 > v2) return -1;
    if (v1 == v2) return 0;

});

console.log("sort:", fruits);               
*/

/* 문자열 길이순으로 정렬 */
fruits.sort((v1,v2) => {
    return v1.length = v2.length;
});

console.log("sort:", fruits); 

// 아니 여기서 v1 v2 가 뭔데? 갑자기 이게 왜 나오는겨? 이런 혼란 오랜만이네 ;;; 


// split 
console.log("======================== String :: split");        // 문자열의 split
// 구분자를 기준으로 문자열을 분할 -> 후, 배열로 반환
const str = "JavaScript is something strange then other languages";
console.log(str);
let chinks = str.split(' ');            // 공백 문자를 기준으로 분리 
console.log(chinks);                    // 분리됨. 루프 돌릴 수 잇게 됨 

for (let i=0; i<chinks.length; i++) {
    console.log(chinks[i]);
}