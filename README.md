# 클래스

- 여러 개의 인스턴스를 만들기 위한 객체의 `설계도`
- JS, React와 Next에서 클래스는 활용도가 엄청 낮다.
- 대개 함수를 기반으로 프로젝트를 진행하므로 ...
- typescript를 기반으로 백엔드를 구축한다. (Node.js, Express.js, Nest.js)
- 예) java를 기반으로 백엔드를 구축한다. (JSP, Spring)
- 예) SQL구문을 기반으로 DB를 제어한다. (JPA, TypeORM)

## 1. 일반 객체로 생성하는 경우

```js
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
```

## 2. 클래스의 기본형

```js
//class로 구현해 본다.
class 클래스명 {
  //속성
  속성명 1;
  속성명 2;

  //인스턴스 생성자(이름 변경 불가)
  constructor() {}

  //메소드
  메소드명1(){};
  메소드명2(){};
}

//인스턴스 생성
let 인스턴스=new 클래스명();
```

## 3. 클래스의 속성 필드 정의

- let, var, const 키워드 작성못함
- 객체 속성과는 다르게 `;`로 마감
- 초기값 세팅은 constructor에서 진행

```js
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

//인스턴스 생성
let ray = new Car("ray", "kia", 1200, 30);
ray.move();
ray.stop();

//인스턴스 생성
let matiz = new Car("matiz", "gm", 1250, 80);
```

## 4. 상속을 통한 클래스 확장

```js
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
```

## 5. 최종 js

```js
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
```

## 6. 타입스크립트로 속성 필드 타입 정의하기

```ts
//class로 구현해 본다.
//클래스명은 반드시 대문자로 시작
class Car {
  //속성필드 타입정의
  name: string;
  brand: string;
  price: number;
  year: number;

  //인스턴스 생성자(이름 변경 불가)
  constructor(name: string, brand: string, price: number, year: number) {
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
```

## 7. 타입스크립트로 속성 필드 초기값 정의하기

```ts
//class로 구현해 본다.
//클래스명은 반드시 대문자로 시작
class Car {
  //속성필드 초기값 정의
  name: string = "";
  brand: string = "";
  price: number = 0;
  year: number = 0;

  //인스턴스 생성자(이름 변경 불가)
  constructor(name: string, brand: string, price: number, year: number) {
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
```

## 8. 클래스 상속를 통한 확장

```ts
//상속, 즉 확장을 통한 클래스 정의
class ElectricCar extends Car {
  batteryLevel: number = 100;

  //인스턴스 생성자(이름 변경 불가)
  constructor(
    name: string,
    brand: string,
    price: number,
    year: number,
    batteryLevel: number
  ) {
    //부모의 constructor를 먼저 실행해 주어야 한다.
    super(name, brand, price, year);
    this.batterylevel = batteryLevel;
  }

  //자식 클래스에 해당하는 메소드
  level() {
    console.log(`${this.batteryLevel} 입니다.`);
  }
}
```

## 9. 접근(속성, 또는 메소드) 제어자

- public, private, protected
- public : 모든 곳에서 접근 가능
- private : 클래스 내부에서만 접근 가능
- protected : 클래스 내부, 또는 상속된 클래스에서만 접근 가능

### 9.1. public

```ts
//class로 구현해 본다.
//클래스명은 반드시 대문자로 시작
class Car {
  //속성필드 타입정의
  public name: string = ""; //자동으로 public 세팅됨
  public brand: string = ""; //자동으로 public 세팅됨
  public price: number = 0; //자동으로 public 세팅됨
  public year: number = 0; //자동으로 public 세팅됨

  //인스턴스 생성자(이름 변경 불가)
  constructor(
    name: string = "",
    brand: string = "",
    price: number = 0,
    year: number = 0
  ) {
    //this는 생성되어질 instance를 가리킨다.
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.year = year;
  }

  //Method (행동)
  public move() {
    console.log(`${this.name}을 운전합니다.`);
  }
  public stop() {
    console.log(`${this.name}을 멈춥니다.`);
  }
}

let morning = new Car("morning", "kia", 1200, 30);
morning.name;
morning.brand;
morning.price;
morning.year;
//public 속성값 변경
morning.price = 1350;
```

- 가능하면 메소드는 public으로 정의한다.
- 이유는 외부에서 메소드를 통해 속성에 접근하는 것이 정석이다.

### 9.2. private

- 기본적으로 private을 추천한다.
- 속성 읽기 및 수정은 메소드를 통해서 예외처리하면서 접근한다.

```ts
//class로 구현해 본다.
//클래스명은 반드시 대문자로 시작
class Car {
  //속성필드 타입정의
  public name: string = ""; //자동으로 public 세팅됨
  public brand: string = ""; //자동으로 public 세팅됨
  //사용자가 외부에서 데이터값을 변경하지 못하도록 하겠다.
  private price: number = 0; //수동으로 private 세팅함
  public year: number = 0; //자동으로 public 세팅됨

  //인스턴스 생성자(이름 변경 불가)
  constructor(
    name: string = "",
    brand: string = "",
    price: number = 0,
    year: number = 0
  ) {
    //this는 생성되어질 instance를 가리킨다.
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.year = year;
  }

  //private 속성에 접근하는 읽기 메소드
  getPrice() {
    console.log(this.price);
  }
  //private 속성에 접근하는 쓰기기 메소드
  setPrice(p: number) {
    if (p < 0) {
      console.log("가격은 0보다 커야 합니다.");
    }
    this.price = p;
  }
}

let morning = new Car("morning", "kia", 1200, 30);
morning.name;
morning.brand;
//private 속성값 읽기
//morning.price; //private라서 읽기 접근금지
morning.getPrice();
morning.year;
//private 속성값 변경
//morning.price = 1350; //private라서 쓰기 접근금지
morning.setPrice(1350);
```

### 9.3. protected

- 클래스에서 직접 접근하거나 상속된 클래스에서는 접근가능

```ts
//class로 구현해 본다.
//클래스명은 반드시 대문자로 시작
class Car {
  //속성필드 타입정의
  public name: string = ""; //자동으로 public 세팅됨
  public brand: string = ""; //자동으로 public 세팅됨
  private price: number = 0; //수동으로 private 세팅함
  //클래스 내부, 또는 상속된 클래스에서만 접근 가능하도록 하겠다.
  protected year: number = 0; //수동으로 protected 세팅함

  //인스턴스 생성자(이름 변경 불가)
  constructor(
    name: string = "",
    brand: string = "",
    price: number = 0,
    year: number = 0
  ) {
    //this는 생성되어질 instance를 가리킨다.
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.year = year;
  }

  //Method (행동)
  //protected 속성에 내부에서 접근하는 읽기 메소드
  getYear() {
    console.log(this.year);
  }
}

let morning = new Car("morning", "kia", 1200, 30);
morning.year; //protected라서 외부에서 읽기 접근금지

//상속, 즉 확장을 통한 클래스 정의
class ElectricCar extends Car {
  batteryLevel: number = 100;

  //인스턴스 생성자(이름 변경 불가)
  constructor(
    name: string,
    brand: string,
    price: number,
    year: number,
    batteryLevel: number
  ) {
    //부모의 constructor를 먼저 실행해 주어야 한다.
    super(name, brand, price, year);
    this.batteryLevel = batteryLevel;
  }

  //자식 클래스에 해당하는 메소드
  level() {
    console.log(`${this.batteryLevel} 입니다.`);
  }

  //부모 protected 속성에 접근
  showYear() {
    console.log(this.year);
  }
}

//인스턴스 생성
let model3 = new ElectricCar("model3", "tesla", 35000, 10, 100);
model3.price; //private라서 외부 접근 에러
model3.year; //protected라서 외부 접근 에러
```

## 10. 혹시 이럴수도 있습니다. (문법 및 라이브러리 소스를 보시면 자주 나옵니다.)

- 생성자, 즉 constructor에서 필드를 생략하는 경우를 볼 수 있습니다.

```ts
  constructor(public name: string = "", public brand: string = "", private price: number = 0, protected year: number = 0) {
    // 아래 생략되어도 같은 효과를 봄
    ///this.name = name;
    ///this.brand = brand;
    ///this.price = price;
    ///this.year = year;
  }
```

## 11. 전체 ts

```ts
class Car {
  constructor(
    public name: string = "",
    public brand: string = "",
    private price: number = 0,
    protected year: number = 0
  ) {
    // 아래 생략되어도 같은 효과를 봄
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.year = year;
  }
  public move() {
    console.log(`${this.name}을 운전합니다.`);
  }
  public stop() {
    console.log(`${this.name}을 멈춥니다.`);
  }
  // private 속성 price 에 접근하는 읽기 메서드
  // private 속성 price 에 접근하는 쓰기 메서드
  getPrice() {
    console.log(this.price);
  }
  setPrice(p: number) {
    if (p < 0) {
      console.log("가격은 0 보다 커야 합니다.");
    }
    this.price = p;
  }
  // protected 속성 year 접근
  getYear() {
    console.log(this.year);
  }
}

// 상속
class ElectricCar extends Car {
  // 상속받은 경우의 생성자 축약형
  constructor(
    name: string = "",
    brand: string = "",
    price: number = 0,
    year: number = 0,
    public batteryLevel: number = 0
  ) {
    super(name, brand, price, year);
  }

  level(): void {
    console.log(`배터리 레벨이 ${this.batteryLevel}% 입니다.`);
  }

  // 부모 protected 속성에 접근
  showYear(): void {
    console.log(`생산년도: ${this.year}년`);
  }
}

let ray = new Car("ray", "kia", 1400, 30);
ray.name;
ray.brand;
//ray.price; // private 이라서 읽기 접근금지
ray.getPrice();
// ray.year; // protected 라서 읽기 접근금지

// public 속성 값 변경
// ray.price = 1550; // private 이라서 쓰기 접근금지
ray.setPrice(1550);

let EV6 = new ElectricCar("EV6", "kia", 5000, 30, 100);
// EV5.price ; // private 이라서 외부 접근 에러
// EV5.year ;  // protected 라서 외부 접근 에러
```

## 12. 인터페이스

- `약속`을 지켜서 클래스를 만들어라.
- 클래스 만드는 것은 좋은데 이러한 속성 필드와 이러한 속성 메서드는 `반드시 구현`하라.

```ts
//약속을 지켜라
interface CarInterface {
  name: string;
  brand: string;
  price: number;
  move(): void;
  stop(): void;
}

interface ElectricInterface {
  battery: number;
  isBattery: boolean;
}

//인터페이스를 구현
class ElectricCar implements CarInterface, ElectricInterface {
  constructor(
    public name: string,
    public brand: string,
    public price: number,
    public battery: number,
    public isBattery: boolean
  ) {}
  move() {
    console.log("움직여라!");
  }
  stop() {
    console.log("멈춰라!");
  }
}

let modelX = new ElectricCar("modelX", "tesla", 10000, 10, true);
```
