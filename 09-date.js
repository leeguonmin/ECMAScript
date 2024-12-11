// 날짜 정보
// Date 생성자
let now = new Date();           // 현재 시간
console.log(now);

let today=new Date(2024, 11 , 11);      // month는 0부터 시작이라 -1 해줘야함
console.log(today);

let time = new Date(2024,11,11,10,2,0);     // 2024년 12월 11일 10시 2분 0초
console.log(time);

console.log("년도 정보:", now.getFullYear());
console.log("월 정보:", now.getMonth() + 1);        // 0부터 시작이니까 +1 해줘야 오늘 요일인게지
console.log("일 정보:", now.getDate());
console.log("요일 정보:", now.getDay());


