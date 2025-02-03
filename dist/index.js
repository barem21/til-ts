let car = {
  //Property (속성)
  name: "matiz",
  brand: "gm",
  price: 100,
  year: 50,
  //Method (행동)
  move() {
    console.log("driving");
  },
  stop() {
    console.log("stop");
  },
};

let car2 = {
  //Property (속성)
  name: "morning",
  brand: "kia",
  price: 120,
  year: 30,
  //Method (행동)
  move() {
    console.log("driving");
  },
  stop() {
    console.log("stop");
  },
};

//class로 구현해 본다.
//클래스명은 반드시 대문자로 시작
class Car {
  //속성
  name;
  brand;
  price;
  year;

  //인스턴스 생성자(이름 변경 불가)
  constructor(name, brand, price, year) {
    //this는 생성되어질 instance를 가리킨다.
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.year = year;
  }

  //Method (행동)
  move() {
    console.log(`${this.name}을 운전합니다.`);
  }
  stop() {
    console.log(`${this.name}을 멈춥니다.`);
  }
}

//상속, 즉 확장을 통한 클래스 정의
class ElectricCar extends Car {
  batteryLevel;

  //인스턴스 생성자(이름 변경 불가)
  constructor(name, brand, price, year, batteryLevel) {
    //부모의 constructor를 먼저 실행해 주어야 한다.
    super(name, brand, price, year);
    this.batterylevel = batteryLevel;
  }

  //자식 클래스에 해당하는 메소드
  level() {
    console.log(`${this.batteryLevel} 입니다.`);
  }
}

//인스턴스 생성
let matiz = new Car("matiz", "gm", 1250, 80);

let morning = new Car("morning", "kia", 1200, 30);
ray.move();
ray.stop();

let model3 = new ElectricCar("model3", "tesla", 35000, 10);
model3.move();
model3.stop();
model3.level();
