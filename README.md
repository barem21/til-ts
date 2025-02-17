# Primitive (기본데이터 형)

- js와 ts에 모두 있는 데이터형
-

```ts
//Primitive (기본데이터 형)
// 6개의 타입 (js와 ts 공용으로 사용함)
const stringVar: string = "hello";
const numberVar: number = 100;
const boolVar: boolean = true;
const nullVar: null = null;
const undefinedVar: undefined = undefined;
const symbolVar: Symbol = Symbol("hello");
//const bigIntVar: bigint = BigInt(9999999999); //TS에만 있어요.
```

- ts에만 존재하는 타입
- any와 unknown은 아무 값이나 할당할 수 있다.
- any는 어느 곳이든 값을 할당할 수 있지만
- `unknown은 아무곳에서도 값을 할당할 수 없다.`

```ts
//TS에만 있다.
//any는 아무 타입이나 할당할 수 있다.
//type 체크를 하지 않는다.
// 과도하게 사용하면 곤란함.
let anyVar: any;
anyVar = stringVar;
anyVar = numberVar;
anyVar = boolVar;
anyVar = nullVar;
anyVar = undefinedVar;
anyVar = symbolVar;

//any라는 타입을 string에 대입함
let newStringVar: string = anyVar; //ok
let newNumberVar: number = anyVar; //ok

//unknown - 타입을 알 수 없다.
let unknownVar: unknown;
unknownVar = stringVar;
unknownVar = numberVar;
unknownVar = boolVar;
unknownVar = nullVar;
unknownVar = undefinedVar;
unknownVar = symbolVar;

//unknown라는 타입을 string에 대입함
let newStringVar2: string = unknownVar; //error
let newNumberVar2: number = unknownVar; //error

//unknown과 any의 차이점
//any와 unknown은 값을 대입할 때 다르다.
```

# Object (배열, 객체)

## array (배열)

```ts
//Object (객체 형)
//Array(배열)
const numberArr: number[] = [1, 2, 3];
const stringArr: string[] = ["A", "B", "C"];
const booleanArr: boolean[] = [true, false, true];
const stringNumberArr: (string | number)[] = ["A", 1, "B", 2];
const stringNumberBooleanArr: (string | number | boolean)[] = ["A", 1, true, "B", 2, false];

//제네릭을 이용한다면?
const numberArrGe: Array<number> = [1, 2, 3];
const stringArrGe: Array<string> = ["A", "B", "C"];
const booleanArrGe: Array<boolean> = [true, false, true];
const stringNumberArrGe: Array<string | number> = ["A", 1, "B", 2];
const stringNumberBooleanArrGe: Array<string | number | boolean> = ["A", 1, true, "B", 2, false];
```

## Object (객체리터럴)

```ts
//Object(객체리터럴)
const obj: object = {};
const personObject: { name: string; age: number } = { name: "길동", age: 17 };
```

# type

- 개발자가 이름을 만들어서 정의하는 데이터 타입
- ts에만 존재

```ts
//type
//관례상 타입별칭은 대문자로 시작
type StringType = string;
const stringT: StringType = "hello";

type NumberType = number;
const numberT: NumberType = 100;

type NullType = null;
const nullT: NullType = null;

//유니온을 이용하면?
type StringNumberType = string | number;
let stringNumberType: StringNumberType = 1;
stringNumberType = "hello";
stringNumberType = true; //오류발생

type GenderType = "male" | "female";
let genderType: GenderType = "female";
genderType = "male";
genderType = "trans"; //오류발생

//객체를 타입으로 만들기
type TidolType = { name: string; age: number };
```

## interface

- 개발자가 정하는 `객체 모양의 데이터 타입`

```ts
//interface
//type는 기본형 데이터를 사용 가능하지만
//interface는 무조건 객체러터럴 형태여야 한다.
type TidolType = { name: string; age: number };
interface IidolType {
  name: string;
  age: number;
}
//현재까지는 type와 interface는 차이가 없다.
//차이점은 = 를 사용하는가 하지 않는가의 차이

const iu: { name: string; age: number } = { name: "아이유", age: 20 };
const bts: { name: string; age: number } = { name: "BTS", age: 10 };

//type 사용하기
const iu1: TidolType = { name: "아이유", age: 20 };
const bts1: TidolType = { name: "BTS", age: 10 };

//interface 사용하기
const iu2: IidolType = { name: "아이유", age: 20 };
const bts2: IidolType = { name: "BTS", age: 10 };

//객체 속성의 옵션?을 살펴보자.
type OptionalIdol_Type = {
  name: string;
  age: number;
  year?: number;
};

interface OptionalIdol_Interface {
  name: string;
  age: number;
  year?: number;
}

const iuT: OptionalIdol_Type = { name: "아이유", age: 20 };
iuT.year = 2024; //좋지 않아요
const btsI: OptionalIdol_Interface = { name: "BTS", age: 10 };
btsI.year = 2025; //좋지 않아요
```

- type과는 다르게 `interface는 무조건 객체 리터럴 타입`만 들어감
- interface는 Primitive를 할당할 수 없다.

# Enum

- 여러 개의 `상수를 정의하고 사용`할 때 편리
- 외부 연동시 활용 추천

```ts
//외부 연결 상태
function runNetwork() {
  let status: string = "INITIAL";
  try {
    status = "LOADING";
    //중간처리
    status = "DONE";
  } catch (error) {
    status = "ERROR";
  } finally {
    return status;
  }
}

//오타 발생 위험
if (runNetwork() === "DONE") {
  console.log("성공");
} else {
  console.log("실패");
}

//오타 발생 위험 회피를 위해서
const initState = "INITIAL";
const loadingState = "LOADING";
const doneState = "DONE";
const errorState = "ERROR";

function runNetwork2() {
  let status: string = initState;
  try {
    status = loadingState;
    //중간처리
    status = doneState;
  } catch (error) {
    status = errorState;
  } finally {
    return status;
  }
}
//오타 발생 위험
if (runNetwork() === doneState) {
  console.log("성공");
} else {
  console.log("실패");
}

//enum을 이용한 상수로 처리
//관례상 대문자를 사용함
enum Status {
  INITIAL = "init", //기본값 0
  LOADING = "loading",
  DONE = "done",
  ERROR = "error",
}

function runNetwork3() {
  let status: string = Status.INITIAL;
  try {
    status = Status.LOADING;
    //중간처리
    status = Status.DONE;
  } catch (error) {
    status = Status.ERROR;
  } finally {
    return status;
  }
}
```

# 타입 추론 (Type Interface)

- 타입 어노테이션 없이 타입 추론

```ts
//Type interface (타입 추론)

let str = "hello"; //let라서 데이터 타입이 string면 아무거나 다 들어감
let num = 100; //let라서 데이터 타입이 number면 아무거나 다 들어감

const strConst = "hello"; //const는 고정
const numConst = 100; //const는 고정

//let bts:{name:string,age:number}
let bts = { name: "BTS", age: 10 };
bts.name = "방탄소년단";

//const iu{name:string,age:number}
const iu = { name: "아이유", age: 20 };
iu.name = "iu";

//객체를 const화 하자
//const bp: {readonly name: "블랙핑크";readonly age: 30;}
const bp = { name: "블랙핑크", age: 30 } as const;
bp.name = "black pink"; //읽기 전용이므로 오류발생
```

# Tuple

```ts
//Type interface (타입 추론)

//Tuple
//배열의 요소의 개수와 각 요소의 데이터 타입 미리 정의
//const twoNumberArr: readonly [1, 2]
const twoNumberArr = [1, 2] as const;
twoNumberArr.push(3); //읽기전용이라 오류발생
twoNumberArr[10] = 4; //읽기전용이라 오류발생

let twoNumberArr2 = [1, 2] as const;
twoNumberArr2[10] = 4; //let라고 하더라도 as const에 의해 읽기전용이라 오류발생
```

# Casting (캐스팅)

- 타입 추론을 조금 더 개발자가 구체화하는 것
- 특정 타입으로 지정하는 것
- js에는 없는 개념(ts에만 존재)
- as는 타입을 강제로 변환하지만 사용에서는 정말 조심하자.
- ts에서는 오류가 아닌데 런타임에서는 오류발생 가능성

```ts
//Casting (캐스팅)

const numberVar = 10;
//const numberVar: 10으로 추론
//아래는 문자열을 대문자로 고치겠다고 했는데 숫자값이라 오류발생
numberVar.toUpperCase(); //오류발생

const sampleNumber: any = 5;
//ts에서 타입체크를 못하고 런타임 오류가 밸생함(실행해봐야 알수 있는 오류)
sampleNumber.toUpperCase(); //런타임 오류발생

//const count: 10
const count = 10;
//let sample=count as string;
let sample = count as unknown as string;
//오류는 해결했지만 런타임 오류가 발생함(실행해 봐야 알수 있는 오류)
sample.toUpperCase(); //런타임 오류발생
```

# Union 기초

- 타입들을 합칠 수 있는(병합) 여러 방법 중 하나이다.

```ts
//Union 기본

type StringOrBool = string | boolean;
let sb: StringOrBool = "hello";
sb = false;

type StringOrBoolOrNull = string | boolean | null;
let sbn: StringOrBoolOrNull = "hi";
sbn = false;
sbn = null;

type StateType = "LOADING" | "DONE" | "ERROR" | "INIT";
let state: StateType = "DONE";
state = "GO"; //타입오류

//배열의 Union
type StringArrOrBooleanArr = string[] | boolean[];
let sob: StringArrOrBooleanArr = ["IU", "BTS"];
sob = [true, false, false];
//string배열이나 boolean배열만 들어올 수 있는데 string+boolean합쳐진 배열이라 오류 발생
sob = ["BP", true]; //타입오류

type StringArrOrBooleanArr2 = (string | boolean)[];
let sob2: StringArrOrBooleanArr2 = ["IU", false];
sob2 = ["BP", false];

//인터페이스 Union
interface Animal {
  name: string;
  age: number;
}
interface Human {
  name: string;
  age: number;
  address: string;
}

type AnimalOrHuman = Animal | Human;
let aoh: AnimalOrHuman = { name: "IU", age: 20, address: "seoul" };

aoh;
aoh.address;
aoh.name;
aoh.age;

aoh = { name: "야옹이", age: 5 };
aoh;
aoh.age;
aoh.name;
aoh.address; //오류발생(Animal에 address속성 없음)
(aoh as Human).address; //런타임 오류발생

//위의 내용과는 완전히 다르게 겹치는 속성이 없는 경우
type Person = {
  name: string;
  age: number;
};
type Cat = {
  breed: string;
  country: string;
};
type PersonOrCat = Person | Cat;
let hong: PersonOrCat = { name: "gildong", age: 20 };
let yaong: PersonOrCat = { breed: "koshort", country: "korea" };
let mix: PersonOrCat = { name: "gildong", age: 20, breed: "koshort", country: "korea" };
let mix2: PersonOrCat = { name: "gildong", breed: "koshort", country: "korea" };
//아래는 오류가 발생함
//어느 타입이라도 필수요소에 반드시 포함되어야 한다. (Person이나 Cat 타입 중에 하나에는 반드시 필수요소가 포함되어야 함)
//어느 타입이라도 필수요소가 충족되지 않으면 오류가 발생한다.
let mix3: PersonOrCat = { name: "gildong", country: "korea" }; //오류발생
```

# InterSection Type

- 타입을 합칠 때 모든 타입을 만족하는 타입

```ts
//Intersection Type
//Union은 하나는 만족하면 됨(OR조건과 동일)
//Intersection은 모두 만족해야 됨(AND조건과 동일)

//Interface
interface Human {
  name: string;
  age: number;
}
interface Contact {
  phone: string;
  address: string;
}

type HumanAndContact = Human & Contact;
let hong: HumanAndContact = { name: "gildong", age: 20, phone: "010-0000-1111", address: "seoul" };

//예외사항 (기본형에서는 관례상 사용하지 않는다)
type StringAndNumber = string & number; //type StringAndNumber = never (절대로 존재할 수 없다!)
let hong2: StringAndNumber = "hello"; //무엇을 넣어도 오류발생(존재할 수 없다!)
```

# Narrowing (타입 좁히기)

- Union을 이용해서 만들어진 타입에 구체적인 타입으로 변환

```ts
//Narrowing

let numberOrString: number | string;
numberOrString = "hong"; //let numberOrString: string | number
numberOrString; //let numberOrString: string (타입 좁히기가 일어남)

//특정 값을 할당해서 타입 좁히기
let numberOrString2: number | string = "hong";
numberOrString2; //let numberOrString2: string

let numberOrString3: number | string = 123;
numberOrString3; //let numberOrString3: number

//typeof 연산자를 사용해서 타입 좁히기
//js가 런타임 중에 값이 결정되는 상황을 만들어 봄
let numberOrString4: number | string = Math.random() > 0.5 ? 123 : "hong";
if (typeof numberOrString4 === "string") {
  numberOrString4; //let numberOrString4: string
} else {
  numberOrString4; //let numberOrString4: number
}

//조건문에서 특정값을 할당해서 타입 좁히기
let numberOrString5: null | string[] = Math.random() > 0.5 ? null : ["hong", "go"];
if (numberOrString5) {
  numberOrString5; //let numberOrString5: string[]
} else {
  numberOrString5; //let numberOrString5: null
}

//비교문을 이용해서 타입 좁히기
//JS에서는 불가능하지만 TS에서는 타입 비교를 사용할 수 있다.
let numberOrString6: number | string = Math.random() > 0.5 ? 100 : "hong";
let stringOrBoolean: string | boolean = Math.random() > 0.5 ? "hong" : true;
if (numberOrString6 === stringOrBoolean) {
  numberOrString6; //let numberOrString6: string
  stringOrBoolean; //let stringOrBoolean: string
} else {
  numberOrString6; //let numberOrString6: string | number
  stringOrBoolean; //let stringOrBoolean: string | true
}

let numberOrStringOrNull: number | string | null = Math.random() > 0.5 ? 100 : Math.random() > 0.5 ? "hong" : null;
if (typeof numberOrStringOrNull === "number") {
  numberOrStringOrNull; //let numberOrStringOrNull: number
} else if (typeof numberOrStringOrNull === "string") {
  numberOrStringOrNull; //let numberOrStringOrNull: string
} else {
  numberOrStringOrNull; //let numberOrStringOrNull: null
}

//in연산자(속성명)로 타입 좁히기
interface Human {
  name: string;
  age: number;
}
interface Dog {
  name: string;
  country: string;
}

let human: Human = { name: "hong", age: 20 };
let dog: Dog = { name: "white", country: "korea" };
let humanOrdog: Human | Dog = Math.random() > 0.5 ? human : dog;
if ("age" in humanOrdog) {
  humanOrdog; //let humanOrdog: Human
} else {
  humanOrdog; //let humanOrdog: Dog
}

//instanceof연산자로 타입 좁히기
let dateOrString: Date | string = Math.random() < 0.5 ? new Date() : "hong";
if (dateOrString instanceof Date) {
  dateOrString; //let dateOrString: Date
} else {
  dateOrString; //let dateOrString: string
}

//Discriminated Inion
//특정 속성에 상수로 문자열을 배치해서 비교하여 타입 좁히기
interface Animal {
  type: "dog" | "human";
  height?: number;
  breed?: string;
}
let animal: Animal = Math.random() > 0.5 ? { type: "human", height: 100 } : { type: "dog", breed: "chiwawa" };
if (animal.type === "human") {
  animal.height;
} else {
  animal.breed;
}
//위의 사항은 정확한 타입 좁히기가 처리된 상황이 아니다.

interface Human2 {
  type: "human";
  height: number;
}
interface Dog2 {
  type: "dog";
  breed: string;
}

type HumanOrDog2 = Human2 | Dog2;
let animal2: HumanOrDog2 = Math.random() > 0.5 ? { type: "human", height: 180 } : { type: "dog", breed: "chiwawa" };
if (animal2.type === "human") {
  // let animal2: Human2
  animal2;
} else {
  // let animal2: Dog2
  animal2;
}
switch (animal2.type) {
  case "human":
    // let animal2: Human2
    animal2;
    break;
  case "dog":
    // let animal2: Dog2
    animal2;
    break;
}
```

# 함수

```ts
//함수

//기본적으로 함수 파라메터는 any로 생각합니다.
//가능하면 배제하고 그래도 모르겠으면 차라리 unknown 주고 타입 좁히기(Narrowing)하는 것을 추천
function showName(name: any) {
  console.log(name);
}

function viewName(name: string) {
  console.log(name);
}

//옵션 파라메터
function showMember(name: string, age?: number) {
  console.log(name, age);
}
showMember("hong", 10);
showMember("go");

//Rest 파라메터
function showInfo(...args: string[]) {
  console.log(args);
}

function showInfo2(age: number = 0, ...args: string[]) {
  console.log(args);
}

//함수의 리턴타입
//function add(a: number, b: number): number;
function add(a: number, b: number) {
  return a + b;
}
function add2(a: number, b: number): number {
  return a + b;
}

//function random(): "hong" | 123
function random() {
  return Math.random() > 0.5 ? "hong" : 123;
}

//void 반환타입(아무것도 돌려주지 않음)
function notReturn(): void {}

//never 반환타입(존재할 수 없음)
function throwError(): never {
  throw new Error("this is error!");
}

//무한반복으로 절대로 결과값이 안 나오는 케이스
function loop(): never {
  while (true) {}
}
```

# 함수 시그니처(선언 구조)로 타입선언

- 시그니처란? 선언 구조

```ts
//함수 시그니처로 타입 구성

//type으로 함수 정의
const runner = () => {
  return ["hong", "go"].map((x) => x);
};

type Mapper = (x: string) => string; //함수의 모양에 대한 타입
const runner2 = (callback: Mapper) => {
  return ["hong", "go"].map(callback);
};
runner2((x) => `${x} 입니다.`);

type TwoMembers = (a: number, b: number) => number; //함수 모양에 대한 타입
function twoFunction(a: number, b: number): number {
  return a + b;
}

const add = (a: number, b: number): number => a + b;
const minus = (a: number, b: number): number => a - b;
const multi = (a: number, b: number): number => a * b;
const divide = (a: number, b: number): number => a / b;

const addT: TwoMembers = (a, b) => a + b;
const minusT: TwoMembers = (a, b) => a - b;
const multiT: TwoMembers = (a, b) => a * b;
const divideT: TwoMembers = (a, b) => a / b;

//interface로 함수의 타입 정의하기
interface IntFunc {
  //키명:키값
  (a: number, b: number): number;
}

const addI: IntFunc = (a, b) => a + b;
const minusI: IntFunc = (a, b) => a - b;
const multiI: IntFunc = (a, b) => a * b;
const divideI: IntFunc = (a, b) => a / b;
```

# 함수 오버로딩

- 이렇게 하면 코드가 더 복잡해 질 것이다.
- 알아만 두면 어떨지 ... ?!

```ts
//함수 오버로딩
//하나의 함수로 여러개의 처리를 진행하도록 구성

//매개변수 1개, 매개변수 3개만 받아서 출력하는 함수
//그런데 함수의 이름이 같다?!
function showString1(a: string): void {
  console.log(a);
}
function showString3(a: string, b: string, c: string): void {
  console.log(a, b, c);
}

//나는 3개로 처리할거야 ?를 사용할 거야.
function showString(a: string, b?: string, c?: string): void {
  if (b && c) {
    console.log(a, b, c);
  } else {
    console.log(a);
  }
}
showString("A");
showString("A", "B", "C");
showString("A", "B"); //오류는 아니지만 원하지 않는 기능이라서 오류

function showStringOver(a: string): void;
function showStringOver(a: string, b: string, c: string): void;
function showStringOver(a: string, b?: string, c?: string): void {
  if (b && c) {
    console.log(a, b, c);
  } else {
    console.log(a);
  }
}
showStringOver("A");
showStringOver("A", "B", "C");
showStringOver("A", "B"); //오류발생(오버로딩 정의에 없으니까)
```

# Type Predicate (타입 프리디케이트)

- 어떤 종류의 데이터 타입인지를 확인해서 `데이터 타입, 또는 boolean`을 리턴해 준다.

```ts
//Type Predicate (타입 프리디케이트)

//숫자 데이터 타입인지 아닌지 알아내는 함수
//맞다면 number 아니면 false 리턴한다.
function isNumber(a: any) {
  return typeof a === "number";
}
//a가 number이라고 타입추론되기를 원했지만 a가 boolean이다. 타입을 알아낼 수 없네?!
let a = isNumber(123); //const a: boolean
let b = isNumber("hello"); //const a: boolean

//나는 true, false가 아니고 리턴되는 값의 타입을 알고 싶다.
//그때 사용하는 것이 타입 프리디케이트이다.

function isNumber2(a: any): a is number {
  return typeof a === "number";
}
let a2 = 123; //let a2: number
if (isNumber2(a2)) {
  a2; //let a2: number
}

let b2 = "hello"; //let a: string
if (isNumber2(b2)) {
  b2; //let b2: never
}

//interface에서 타입 알아내기
interface Dog {
  name: string;
  age: number;
}
interface Cat {
  name: string;
  breed: string;
}
type DogOrCat = Dog | Cat;

//나는 Dog 타입인지 Cat 타입인지 정확히 타입을 좁히고 싶다?!
//Dog 타입이라면 Dog에 대한 코딩 처리
//Cat 타입이라면 Cat에 대한 코딩 처리
//여기서는 true/false가 아닌 타입을 리턴받고 싶다.

//boolean 리턴
function isDog(a: DogOrCat) {
  return (a as Dog).age !== undefined;
}
//아래 코드로는 타입체크를 할 수 없음
const dogs: DogOrCat = { name: "멍멍이", age: 5 };
//true,false 체크 및 boolean 리턴
if (isDog(dogs)) {
  dogs;
} else {
  dogs;
}

//type 리턴
function isDogTypeReturn(b: DogOrCat): b is Dog {
  return (b as Dog).age !== undefined;
}
//타입 체크 및 타입 리턴
//분명히 const dogsL DogOrCat라고 타입을 정의했다.
//아래 코드로는 타입체크 가능
if (isDogTypeReturn(dogs)) {
  dogs; //const dogs: Dog
} else {
  dogs; //const dogs: never
}
```

# type 과 interface 의 차이 3

- 1번은 type과 interface는 만드는 법이 다르더라.

```ts
type A = { age: 1 };
interface A {
  age: 1;
}
```

- 2번은 type에는 데이터타입 할당, interface는 할당못함

```ts
type A = string
interface string // 이런 문법은 없다.
```

- 3번은 type과 interface의 함수 시그니처(구조) 정의 차이

```ts
type A = (x: number) => number;
interface A {
  //키명: 키값;
  (x: number): number;
}
```

```ts
//type와 interface의 차이 4

//type에서만 가능
type String = string;
type unionT = string | number;
type tupleT = [string | number];

//interface에서만 가능
//interface 합치기(같은 이름으로 정의가 가능)
interface Box {
  width: number;
}
interface Box {
  width: string; //오류 발생(같은 이름은 사용할 수 있지만 타입 변경은 불가)
  height: number;
}

//type는 같은 이름으로 정의 불가
//type Go={} //오류 발생
//type Go={} //오류 발생

class Review {
  //속성(property) : 인스턴스에 소속
  getX = (x: string) => {
    return x;
  };

  //메소드(method) : 프로토타입에 소속
  getXY(x: string) {
    return x;
  }
}
interface GetXnY {
  //프로퍼티 형식
  getX: (x: number) => number;
  getY: (y: number) => number;
}
interface GetXnY {
  getX: (x: number) => number;
  //getY: (y: string) => number; //오류 발생(매개변수 타입이 달라서)
  //getY: (y: number) => string; //오류 발생(리턴 타입 달라서)
}

//메소드 방식으로 merging하기
interface GetXnYMethod {
  //프로퍼티 형식
  getXP: (x: number) => number;
  getYP: (y: number) => number;

  //메소드 형식
  getX(x: number): number;
  getY(y: number): number;
}
interface GetXnYMethod {
  //메소드 형식
  //getX(x: number): number;
  //getY(y: string): number; //ok(매개변수 타입 바꿔도 문제없음)
  getY(y: number): string; //ok(리턴 타입 바꿔도 문제없음)
  //getY(y: number,z:string): string; //ok(매개변수 개수를 바꿔도 문제없음)
}
```

# type의 확장과 interface의 확장

```ts
//interface 확장(extends)
interface IName {
  name: string;
}
interface IAge extends IName {
  age: number;
}
const hong: IAge = { age: 10, name: "hong" };

//type의 확장 (&를 통해서 확장)
type TName = {
  name: string;
};
type TAge = TName & {
  age: number;
};
const kim: TAge = { age: 20, name: "kim" };

//interface확장에 type을 사용
interface INameAge extends TName {
  age: number;
}
const go: INameAge = { age: 40, name: "go" };

//type확장에 interface를 사용
type TNameAge = IName & {
  age: number;
};

//type 여러개를 상속받아서 확장하는 법(&를 이용)
type DogName = {
  name: string;
};
type DogAge = {
  age: number;
};
type DogBreed = {
  breed: string;
};
type Dog = DogName & DogAge & DogGreed;

//interface 여러개를 상속받아서 확장하는 법
interface CatName {
  name: string;
}
interface CatAge {
  age: number;
}
interface Cat extends CatName, CatAge {
  breed: string;
}

//overriding
type THeight = {
  height: number;
};
type TRectangle = THeight & {
  height: string;
  width: number;
};
//string과 number를 &하면 never 타입이 나옴
//never는 존재할 수 없는 타입
const box: TRectangle = {
  height: 100, //오류 발생 (height:never)
  width: 200,
};

type TWidth = { width: string | number };
type TRectangle2 = TWidth & {
  width: number;
  height: number;
};
const box2: TRectangle2 = {
  height: 100,
  width: 200,
};

//interface의 예
interface IHeight {
  height: number;
}
interface IWidth {
  width: number;
}
interface IRectangle extends IHeight {
  //height:string; //타입 오류 발생
  height: number; //타입을 반드시 맞춰준다.
  width: number;
}
```

# Tuple

- js에는 존재하지 않음

```ts
//Tuple
//요소의 타입과 개수를 지정할 수 있다.
//무조건 순서에 맞는 타입의 요소를 넣어야 한다.
//Tuple도 배열

let members: string[] = ["hong", "kim", "go"];
//튜플
let membersTuple: [string, string, string] = ["hong", "kim", "go"];
//무조건 순서에 맞는 타입의 요소를 넣어야 한다.
let hong: [number, string] = [20, "gilding"];
hong.push("male"); //js에서 배열이 바뀌므로 오류없음([20,"gildong","man"])

//Tuple의 요소 개수를 지켜주려면
let kim: readonly [number, string] = [40, "gildong"];
kim.push("male"); //오류 발생 (readonly에 의해서 요소 개수 유지)

//배열값을 tuple로 정의하는 법
let go = [30, "gildong"] as const; //let go: readonly [30, "gildong"]

//Named Tuple
//요소 타입의 이름을 주는 문법
let actors: [string, number] = ["hong", 20];
let actors2: [name: string, age: number] = ["hong", 20];

//Tuple과 Tuple을 할당
let ages: [number, number] = [1, 2];
let sampleAges: [number, number] = ages;
let sampleAges2: [number, string] = ages; //오류 발생 (타입이 맞지 않음)
let sampleAges3: [number, number, number] = ages; //오류 발생 (요소 개수가 맞지 않음)

//Multi Dimenstion Tuple (다차원 튜플)
const membersTuple2: [string, number][] = [
  ["hong", 20],
  ["kim", 40],
];
```

# TS객체 상세히 알아보기

```ts
//객체
let obj: { age: number; name: string } = {
  age: 20,
  name: "hong",
};
interface IHong {
  age: number;
  name: string;
}
type THong = {
  age: number;
  name: string;
};

//속성 초과 검사
//객체 리터럴로 값을 할당하는 경우에만 ts가 검사
type TName = { name: string };
type TAge = { age: number };
//객체 리터럴로 정의한 객체
//속성이 초과되었는지 검사를 ts가 실행
//아래의 예는 타입 정의가 없어서 실행하지 않고 있음
const hong = {
  name: "gildong",
  age: 20,
};
//객체 리터럴로 정의
const kim: TName = {
  name: "gildong",
  age: 20, //오류 발생 (속성이 초과됨)
};
const go: TAge = {
  age: 30,
  name: "gildong", //오류 발생 (속성이 초과됨)
};
//아래부터 조심
const gang = {
  age: 30,
  name: "gildong",
};
const gang1: TAge = gang; //변수, 즉 객체 리터럴이 아닌 경우에는 초과검사를 ts가 안함
gang1.age;
gang1.name; //실행시 오류 발생 (속성이 없음)
```

```ts
//중첩 속성 객체
//중첩 속성은 가능하면 정의하지 않는다.
//별도의 정의를 진행하는 것이 좋음

type Person = {
  identity: {
    name: string;
    age: number;
  };
  country: string;
};
const hong: Person = {
  identity: {
    name: "gilding",
    age: 20,
  },
  country: "korea",
};

//중첩은 베제하자.
type Identity = {
  name: string;
  age: number;
};
type TPerson = {
  identity: Identity;
  country: string;
};
const kim: TPerson = {
  identity: {
    name: "gilding",
    age: 20,
  },
  country: "korea",
};
```

```ts
//객체 끼리의 union

const dogCat = Math.random() > 0.5 ? { name: "강아지", age: 5 } : { name: "야옹이", breed: "코숏" };
dogCat; //const DogCat:{name:string;age:number;breed?:undefined;} | {name:string;breed:string;age?:undefined;}
dogCat.name; //(property) name: string
dogCat.age; //(property) age?: number | undefined
dogCat.breed; //(property) breed?: string | undefined

//ts는 가능하면 타입 유추에 의해서 오류 발생하는 것을 제거 가능하면 해주자.
interface Dog {
  name: string;
  age: number;
}
interface Cat {
  name: string;
  breed: string;
}
type DogCat = Dog | Cat;
const dogCat2: DogCat = Math.random() > 0.5 ? { name: "강아지", age: 5 } : { name: "야옹이", breed: "코숏" };
dogCat2.name;
dogCat2.age; //오류 발생
dogCat2.breed; //오류 발생

// 타입 좁히기로 데이터 파악
if ("age" in dogCat2) {
  // const dogCat2: Dog
  dogCat2;
} else {
  // const dogCat2: cat
  dogCat2;
}
```

```ts
//객체 끼리의 인터섹션

type PersonT = {
  name: string;
  age: number;
};
type companyT = {
  company: string;
  regNumber: number;
};
type PersonAndCompany = PersonT & companyT; //모두 만족해야 한다.
const hong: PersonAndCompany = { age: 20, name: "gildong", regNumber: 1234, company: "naver" };
```

# Key Value 매핑

- Key와 Value를 자동으로 매핑시키는 법

```ts
//Key Value 매핑

enum State {
  LOADING,
  SUCCESS,
  ERROR,
  INITIAL,
}
//API 타입 1
type ApiState = {
  getUser: State | string | number | undefined;
  paginateUser: State | undefined;
  defeceUser: State | null;
  getPost: State;
};

//API 타입 2
type UserApiState = {
  getUser: State | string | number;
  paginateUser: State | undefined;
  defeceUser: State | null;
};

//API 타입 3
// 아래처럼 구성하면 타입이 변경이 일어나도 추가 작업이 없다.
// 속성이 변화가 일어나도 한번에 모두 변화가 일어난다.
type UserApiState2 = {
  getUser: ApiState["getUser"];
  paginateUser: ApiState["paginateUser"];
  defeceUser: ApiState["defeceUser"];
};

//API 타입 4
type UserApiState3 = {
  [key in "getUser" | "paginateUser" | "defeceUser"]: ApiState[key];
};

//API 타입 5
// 유틸리티 타입 (수요일 쯤에 정리해 드릴께요.)

// Pick 원하는 것만 뽑을 경우
type UserApiState4 = Pick<ApiState, "getUser" | "paginateUser" | "defeceUser">;

// Omit 원하는 것만 제외하는 경우
type UserApiState5 = Omit<ApiState, "getPost">;

//keyof
type Allkeys = keyof ApiState;
const key1: Allkeys = "getUser";
const key2: Allkeys = "paginateUser";
const key3: Allkeys = "defeceUser";
const key4: Allkeys = "getPost";
const key5: Allkeys = "goGo"; //오류 발생

//API 타입 6
//속성 모두 가져오기
type UserApiState6 = { [key in keyof ApiState]: ApiState[key] };

//유틸리티 사용해 보기
//항목 한개 빼기
type UserApiState7 = { [key in Exclude<keyof ApiState, "getPost">]: ApiState[key] }; //getPost 속성은 제거하고 나머지를 뽑아서 정의하라

//항목 한개 빼고 모두 옵션으로 바꾸어라
type UserApiState8 = { [key in Exclude<keyof ApiState, "getPost">]?: ApiState[key] }; //getPost 속성은 제거하고 나머지를 뽑아서 정의하라
```
