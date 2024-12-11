// 자바스크립트는 prototype으로 객체 지향을 일부 구현 
// ES6의 class 문법은 prototype의 Syntax Sugar 일 뿐이다

class Shape {
    // static (공유 영역)
    static create(x,y) {return new Shape(x,y) }  

    name = "Shape" ;        // ES7 확장 표현

    // 생성자       
    constructor(x,y) {
        this.name = "Shape";        // 인스턴스 속성 -> ES6 방식
        this.move(x,y);
    }

    move(x,y) {
        this.x=x;
        this.y=y;
    }

    area() {
        return 0;
    }

}

// 인스턴스 생성
const s = new Shape(10,20);
console.log(s, s.area());

// 상속
// Shape 로 부터 move 메서드, x, y, name 속성 등을 상속 받음 (extends Shape)
class Circle extends Shape {
    constructor(x,y,radius) {
        super(x,y);         // 부모 생성자 호출
        this.radius = radius;
    }

    area() {
        if(this.radius === 0) {
            // 0이면 면적을 못 구함
            return super.area();
        } 
        return this.radius ** 2 * Math.PI;      // PI의 r 제곱 ? ??? 뭔 소리
    }

}

const c = new Circle(10,20,30);
console.log(c, c.area());



