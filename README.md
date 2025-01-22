# 객체 타입 호환성

## 1. object 타입의 호환성

- object는 모든 객체 타입의 수퍼타입이다.
- object는 any, unknown의 서브타입이다.

```ts
let obj: {
  name: string;
} = {
  name: "kim",
};

let obj2: object = { name: "kim" };

let a: any = obj;
let b: unknown = obj2;
```

## 2. Array 타입의 호환성

- Array<any>은 모든 배열 타입의 수퍼타입이다.
- Array<특정타입>은 더 구체적인 배열 타입의 수퍼타입이다.

```ts
let numArr: number[] = [1, 2, 3];
let numArr2: Array<number> = [1, 2, 3];

//Array<any>는 Array<number>의 수퍼타입이다.
let anyArr: Array<any> = numArr;
let anyArr2: any[] = numArr2;
```

## 3. 유니온 타입의 호환성 (합집합)

- 아래 문장은 기본형 타입의 유니온
- 문자열, 또는 숫자형 데이터를 대입할 수 있다.
- 합집합 (서로 연관성이 전혀 없는 데이터 형을 조합한 새로운 타입정의)

```ts
type StringNumber = string | number;
```

- `A | B는 A 또는 B를 포함`하는 두 타입의 `수퍼타입`이다.

```ts
type StringNumber = string | number;

//문자열은 StringNumber 타입의 서브타입이므로 업캐스팅됨
let now: StringNumber = "hello";

//숫자데이터는 StringNumber 타입의 서브타입이므로 업캐스팅됨
now = 10;
```

### 3.1. 데이터를 변수에 담아서 `변수로 전달`할 때

- 같은 종류의 데이터라고 인정해줘 (객체 타입 호환성)

```ts
type Animal = {
  name: string;
  age: number;
};
type Yaong = {
  name: string;
  age: number;
  color: string;
};
```

- `변수로 전달`할 때

```ts
const cat: Yaong = {
  name: "cat",
  age: 5,
  color: "Black",
};

//Animal 타입은 name, age만 있어야 한다.
//Cat 타입은 name, age 외에 color가 있어야 한다.
//ts에서는 객체 값을 입력할 때 속성을 비교한다.
//프로퍼티 개수가 적은 타입에 프로퍼티 개수가 많은 타입은 업캐스팅된다.
//최소 조건을 만족하면 인정
const ani3: Animal = cat;
```

### 3.2. 데이터를 `객체리터럴`에 담아서 전달할 때

```ts
//변수에 담겨진 형태가 아닌 객체 리터럴로 전달하면 프로퍼티 초과 오류가 발생
const ani5: Animal = { name: "dog", age: 10, color: "white" }; //오류(color)
```

### 3.3. 데이터를 변수로 담아서 전달

```ts
const ani: Animal = {
  name: "dog",
  age: 10,
};

//Yaong의 name, age, color 필수 프로퍼티를 충족하지 못함
const ani4: Yaong = ani; //오류(color 없음)
```

### 3.4. 유니온 샘플

```ts
type Animal = {
  name: string;
  age: number;
};
type Yaong = {
  name: string;
  age: number;
  color: string;
};
type Sample = Animal | Yaong;

const zoo: Animal = { age: 10, name: "lion" };
const tiger: Yaong = { age: 5, name: "tiger", color: "White" };
const now: Sample = zoo;
const now2: Sample = tiger;
const now3: Sample = { age: 10, name: "fox", color: "Red" };
//실제타입은 3가지가 나온다.
//{age:number, name:string}
//{age:number, name:string, color:string}
//{age:number, name:string, color:string}
```

## 4. 인터섹션 타입 (A & B, 교집합)

- A & B는 A도 만족하고 B도 만족하는 타입
- A & B는 A와 B 모두의 서브타입

```ts
type Sample = number & string;
//서로 교차하는 공통의 데이터가 종류가 없음
// 결코 존재할 수 없는 타입이므로 never 타입이 된다.
const go: Sample = 1; //오류
```

```ts
type Animal = { name: string };
type Yaong = { age: number };
type Sample = Animal & Yaong;

//속성이 하나만 누락되어도 오류
const lion: Sample = { name: "lion" }; //오류
const tiger: Sample = { age: 5 }; //오류

//Sample 타입은 Animal과 Yaong 모두의 서브타입
const puma: Sample = { name: "puma", age: 10 }; //정상
```
