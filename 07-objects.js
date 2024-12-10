// 자바 스크립트 객체

// 객체 생성 방법 1
const person = new Object();
// 동적으로 속성 추가 
person.name = "홍길동";
person.age=28;
// 동적으로 메서드 추가 
person.showInfo = function() {
    // this : 현재 인스턴스 자체
    let message = `Name : ${this.name}, Age: ${this.age}`;
    console.log(message);
}
console.log(person);
person.showInfo();

// 객체 생성 방법 2 : JSON(JavaScript Object Notation)
console.log("======================================JSON")
const person2 = {                //여기서부터
    // 키 : 값
    name: "혼길동",
    age:288,
    showInfo: function() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }

}                                // 여기까지 하나의 객체인거임

console.log(person2);           // 객체 안에 아무것도 없을땐, 비어있디고 나와
console.log(person2.name);      // 속성 접근 
// console.log(person.showInfo);
person2.showInfo();              // 메서드 접근 

// JSON 은 JS 객체 표기에도 중요하지만,
// 데이터 포맷으로 사용되기 때문에 중요하다

// Prototype
console.log("========================= 프로토타입 상속");
const Mamber = function(name, position) {
    this.name = name;
    this.position = position;
}

let m1 = new Mamber("강백호", "PF");
let m2= new Mamber("서태웅", "SF");

console.log("m1:", m1);
console.log("m2:", m2);

// 동적으로 속성과 메서드를 추가할 수 있다
m1.sayHi = function() {
    console.log(`${this.name}님이 당신을 부릅니다.`);
}
m1.sayHi();
// m2.sayHi();               // 에러나. sayHi 함수 없으니까
console.log("m1:", m1);     // => m1: Mamber { name: '강백호', position: 'PF', sayHi: [Function (anonymous)] }
console.log("m2:",m2);      // => m2: Mamber { name: '서태웅', position: 'SF' }

// 여러 인스턴스들이 공유 메모리영역인 prototype 영역에 
// 공용 속성, 메서드를 구현하면 
// 모든 인스턴스들이 해당 메서드를 사용할 수 있다

console.log("m1의 constructor:", m1.constructor);
console.log("m2의 constructor:", m2.constructor);   
// 둘다 constructor가 Mamber
// constructor가 가지고 있는 공유 메모리 영역
// -> prototype

Mamber.prototype.introduce = function() {       // 이름이 introduce인 함수 생성
    console.log(`안녕, 하는 ${this.name}이야!`)
};
console.log(Mamber.prototype);

m1.introduce();
m2.introduce();

// 심지어는, 원래 있는 기존 객체들에도 동적으로 속성과 메서드를 추가할 수 있다
console.log(String.prototype);
String.prototype.sayHello = function() {
    return "Hello, " + this;
};
console.log("둘리".sayHello());

// TODO : this binding
















