# tsconfig.json 의 세팅은 회사기준 별도

# package.json : npm 명세서

# 타입스크립트란?

- `변수, 매개변수, 함수 리턴값의 타입(데이터 종류)을 작성`해주는 것

## 어노테이션(Annotation)

- 주석, 부가정보
- 코드에 대한 설명과 추가적인 정보를 제공하는 것을 말한다.

### typescript 어노테이션

```ts
const 변수명: 데이터타입;
function 함수명(매개변수: 데이터타입): 리턴타입 {
  return 리턴값;
}
```

### 메타데이터 어노테이션

- 일반적인 자바스크립트와 달리 Node.js, 또는 Spring에서 자주 봅니다.
- @기호를 어노테이션이라고 한다.
- 추가적인 정보를 제공하고 기능도 부여한다.

```java
@어노테이션
@Entity
@Table(name = "테이블명")
public void 함수명(){

}
```

## ts 어노테이션을 이용한 기본 데이터(Primitive) 종류 명시

### 1. 변수 어노테이션

- `const 변수명: 데이터종류 = 값;`

```ts
let num: number = 1;
let num1: number = 1.5;
let num2: number = 0x10;
let num3: number = Infinity;
let num4: number = -Infinity;
let num5: number = 1.5e10;
let num6: number = 1.5e-10;

let str: string = "hello";
let bool: boolean = true;
let un: undefined = undefined;
let nu: null = null;

let hi: "hello" = "hello";
hi = "how are you?"; //오류(hello만 쓸수 있게 제한했는데 how are you?를 넣으면 오류)

const age: 5 = 10; //오류(5만 쓸수 있게 제한했는데 10을 넣으면 오류)
```

### 2. 타입추론을 확인하고 잘못된 추론이면 직접 관여한다.

- 일단 타입추론을 적극적으로 반영한다.
- 필요시에 어노테이션을 변경한다.

```ts
let num: number | string = 1;
const go = "hello";
num = "hi";
```

### 3. ts의 데이터 종류

- unknown
- any
- null
- void
- undefined
- never
- number
- Number Enum
- bigint
- string
- String Enum
- symbol
- unique symbol
- object
- array
- tuple
- function
- constructor

## 객체 중 배열과 튜플

### 1. 배열

- 배열을 만드는 방법 1

```ts
const arr = [1, 2, 3];
console.log(arr);
```

- 배열을 만드는 방법 2 (어노테이션 정의하기)

```ts
const arr2: number[] = [1, 2, 3];
console.log(arr2);
```

- 배열을 만드는 방법 3 (어노테이션 정의하기-제네릭(<데이터종류>)이라는 문법 활용)

```ts
const arr3: Array<number> = [1, 2, 3];
console.log(arr3);
```

- 오류

```ts
const arr4: Array<number> = [1, 2, 3];
arr4[0] = "hello"; //오류

const arr5: Array<string> = ["hello", "world"];
arr5[1] = 10; //오류

const arr6: Array<number | string> = [10, "hello"];
arr6[0] = false; //오류
```

- 객체 리터럴 배열

```ts
const todos = [
  { id: 1, title: "hello", completed: false },
  { id: 2, title: "hi", completed: true },
  { id: 3, title: "world", completed: false },
];

const todos2: {
  id: number;
  title: string;
  completed: boolean;
}[] = [
  { id: 1, title: "hello", completed: false },
  { id: 2, title: "hi", completed: true },
  { id: 3, title: "world", completed: false },
];

const todos3: Array<{ id: number; title: string; completed: boolean }> = [
  { id: 1, title: "hello", completed: false },
  { id: 2, title: "hi", completed: true },
  { id: 3, title: "world", completed: false },
];
```

### 2. 튜플

- Tuple은 ts에만 있습니다.
- Tuple은 배열의 어노테이션입니다.
- Tuple은 `배열의 길이와 데이터 종류를 고정합니다.`
- Tuple은 `배열의 요소를 추가, 삭제할 수 없습니다.`

```ts
let arrT: [number, number, number | string] = [1, 2, 3];
arrT = [4, 5, 6];
arrT = [7, 8, 9, 0]; //길이 초과 오류
arrT = [4, 5, "hello"];

const arrT2: [string, string] = ["hello", "world"];
const arrT3: [number | boolean, string] = [10, "hi"];
arrT3[0] = false;

const todosT: [
  { id: number; title: string; completed: boolean },
  { id: number; title: string; completed: boolean },
  { id: number; title: string; completed: boolean }
] = [
  { id: 1, title: "hello", completed: false },
  { id: 2, title: "hi", completed: true },
  { id: 3, title: "world", completed: false },
];
```

### 3. 배열과 튜플의 메소드는 동일함

- 어짜피 배열이다.
- pop, push는 정상 작동되어버린다.
- 그래서 튜플을 안쓰게 되더라. (튜플 사용 경험이 적어짐)

## 객체 리터럴

```ts
let user = {
  name: "hong",
  age: 20,
};

let user2: {
  name: string;
  age: number;
} = {
  name: "hong",
  age: 20,
};

//오류 발생
//옵션을 제공한다.
let user3: {
  name: string;
  age: number;
  job?: string; //옵션 적용
} = {
  name: "hong",
  age: 20,
};
user3.job = "student";

//오류 발생
let user4: {
  readonly name: string; //코딩중 변경금지
  age: number;
} = {
  name: "hong",
  age: 20,
};
user4.name = "go"; //오류
```

## 타입 별칭

- 기존의 데이터 종류에 `새로운 이름으로 타입을 만드는 문법`
- 작성법은 `type 파스칼케이스(대문자로 시작) = 데이터형`으로 선언

```ts
export type User = {
  id: number;
  name: string;
  age: number;
  email: string;
  role: string;
  isAdmin: boolean;
  createAt: string;
  phone?: string;
};

const user_kim: User = {
  id: 2,
  name: "둘리",
  age: 10000,
  email: "dully@test.co.kr",
  role: "member",
  isAdmin: false,
  createAt: "2024-12-25",
};
user_kim.phone = "010-1111-2222";
```

- 타입 별칭 주의사항으로 동일한 이름으로 type을 재정의할 수 없다.

```ts
type User = {};
type User = {}; //오류(동일한 이름으로 재정의 불가)
```

- 인덱스 시그니처를 잘 이해하여야 한다.

```ts
type City = {
  daegu: string;
  busan: string;
  seoul: string;
  jeju: string;
};

// 인덱스 시그니처로 변경
type Citys = {
  [key: string]: string;
};

const city: Citys = {
  daegu: "대구",
  busan: "부산",
  seoul: "서울",
  jeju: "제주",
};

// 인덱스 시그니처로 적용
type AreaNumber = {
  [key: string]: number;
};

const areaNumber: AreaNumber = {
  daegu: 53,
  busan: 51,
  seoul: 2,
  jeju: 64,
};
```

### type의 내용 정리

- `/src/types 폴더`를 통상 생성합니다.
- 폴더 내에 type만 정의한 ts 파일이 다수 존재합니다.

```ts
export type Todo = {
  id: number;
  title: string;
  content: string;
  completed: boolean;
  date: Date;
};
export type User = {
  id: number;
  userId: string;
  nickName: string;
  role: string;
  follow: string[];
  date: Date;
};
export type Cart = {
  productId: number;
  quantity: number;
  price: number;
  total: number;
  date: Date;
};
```

## Enum

- `/src/contants 폴더` 생성
- 프로젝트 내에서 공통으로 사용하는 변수들의 관련 문서
  : colors.ts, values.ts, language.ts ...

```ts
//enum을 도입해서 상수를 관리합니다.
//같은 용도를 모아서 상수의 집합을 만들어 활용합니다.
//특정한 값이 없으면 0부터 숫자 대입 후 증가
enum MemberRole {
  Admin,
  Member,
  Guest,
}
enum Language {
  Korean = "ko",
  English = "en",
  Japanese = "ja",
}
const user_park = {
  userId: "park",
  nickName: "박존",
  role: MemberRole.Guest,
  language: Language.English,
};
```

## any

- ts 안쓰려고 합니다. 즉, `어노테이션 안합니다`..라고 선언함
- 가능하면 any를 사용하지 않는 것이 좋습니다.
- js버전을 마이그레이션하는 경우
- 해결이 안되는 경우의 어노테이션 회피 용도

```ts
let age: any = 20;
age = 25;
age = "hello";
```

## unknown

- any와 흡사하지만 큰 차이가 있습니다.
- 타입을 `if문과 typeof` 등으로 좁혀가면서 검사를 개발자가 처리 : 타입 좁히기, 타입가드
- `타입 단언` (Type Assertion) : `믿어줘 이 타입이 맞거든` 이라고 알려주는 문법

```ts

```

## any와 unknown의 차이를 확실히 구분해 봅시다.

```ts
//js 데이터 처리와 가장 흡사
let anything: any = "hello,world";
anything = 123;
anything.toUpperCase(); //오류(문자 적용)
anything.toFixed(2); //숫자 적용

let anythingUnknown: unknown = "hello,world";
anythingUnknown = 123;
//any보다는 unknown을 사용하세요.
//단, 타입을 검사하는 조건을 넣어서 안전하게 사용하세요.
if (typeof anythingUnknown === "string") {
  //타입 가드는 직접 적용
  anythingUnknown.toUpperCase(); //오류(문자 적용)
}
if (typeof anythingUnknown === "number") {
  //타입 가드는 직접 적용
  anythingUnknown.toFixed(2); //숫자 적용
}
```

```ts
function processAny(person: any) {
  console.log(person.nickName.toUpperCase());
}
processAny({ nickName: "홍", age: 10 });
processAny({ age: 10 });

function processUnknown(person: unknown) {
  if (
    typeof person === "object" && //person이 객체인지 확인
    person !== null && //null인지 확인
    "nickName" in person && //nickname 속성이 있는지 확인
    typeof person.nickName === "string" //nickname이 문자열인지 확인
  ) {
    console.log(person.nickName.toUpperCase());
  } else {
    console.log("nickname 속성이 없거나 유효하지 않습니다.");
  }

  if (
    typeof person === "object" && //person이 객체인지 확인
    person !== null && //null인지 확인
    "age" in person && //age 속성이 있는지 확인
    typeof person.age === "number" //age가 숫자인지 확인
  ) {
    console.log(person.age.toFixed(2));
  } else {
    console.log("age 속성이 없거나 유효하지 않습니다.");
  }
}
processUnknown({ nickName: "gildong", age: 10 });
processUnknown({ age: 10 });
```

```ts
function processAny(person: any) {
  console.log(person.person[0].toUpperCase());
}
processAny(["gildong", "hong"]);
processAny([20, 15]);

function processUnknown(person: unknown) {
  if (Array.isArray(person) && typeof person[0] === "string") {
    console.log(person[0].toUpperCase());
  } else {
    console.log("잘못된 배열입니다.");
  }
}
processUnknown(["gildong", "hong"]);
processUnknown([20, 15]);
```

```ts
type User = {
  id: number;
  name: string;
};

function processAny(person: any): string {
  return person.name;
}
const result = processAny({ id: 1, name: "gildong" });
const result2 = processAny({ id: 2 });

function processUnknown(person: unknown): string | null {
  if (typeof person === "object" && person !== null && "name" in person) {
    return (person as User).name;
  }
  return null;
}
const result3 = processUnknown({ id: 1, name: "gildong" });
const result4 = processUnknown({ id: 2 });
```

## never

- "절대로 일어나면 안됩니다." 라는 표현입니다. (불가능한 상황)
- "절대로 끝나지 않을거야" 라는 표현입니다. (무한루프)
- 절대 발생하지 않는 상태를 표현할 때
- 항상 에러를 던지는 함수 표현
- 끝나지 않는 함수
- 불가능한 상태처리 등에 활용
- 타입 안전성을 높이고, 예외 처리를 명확하게 하기 위한 용도

```ts
function go(): never {
  while (true) {}
}

function say(): never {
  throw new Error("error");
}
```

```ts
type Animal = "dog" | "cat" | "bird";
let a: Animal = "cat";
a = "dog";
a = "bird";
a = "horse"; //오류

//Animal 타입으로 정의한 것 이외에는 절대 값이 존재하면 안됨
//위의 문장을 어노테이션으로 타입을 표현하고 싶다.
function say(who: Animal): string {
  if (who === "cat") {
    return "고양이";
  } else if (who === "dog") {
    return "강아지";
  } else if (who === "bird") {
    return "새";
  } else {
    //이 곳까지 코드가 흘러오면 안됨!
    const no: never = who;
    throw new Error(`타입에 정의안됨 : ${no}`);
  }
}

say("horse");
```

- "아무값도 반환하지 않아요"를 정확히 명시하고 싶은 경우

```ts
function throwError(message: string): never {
  throw new Error(message);
}

throwError("프로그램 중지");
```

- 무한루프 함수 : "절대 끝나지 않는 함수"의 리턴을 명확히 표현하고 싶다.

```ts
function loop(): never {
  while (true) {
    console.log("무한루프");
  }
}

loop();
```

- 언제 사용할까?
  : switch, if_else 등 모든 경우를 처리한 경우
  : 항상 에러를 던져야 하는 함수
  : 무한 루프로 절대 종료되지 않는 함수
  : 명확한 코드흐름 안내

## void

- `아무것도 없어요`라는 의미
- 주로 `함수의 리턴 타입`으로 사용합니다.

```ts
function func1(): string {
  return "hello";
}

//함수에 리턴하는 값의 종류는 비어있어요.
function func2(): void {
  console.log("hello");
}

//값이 없다는 표현은 어떤게 있나요?
//함수 반환(return)이 없으면 기본이 void 입니다.
function func3(): void {}

//아래 함수는 return undefined 작성
//명시적으로 undefined를 리턴해야 한다면 작성해줘야 함
function func4(): undefined {
  return undefined;
}

//명시적으로 return 후 값이 없는 함수라면
//void를 리턴합니다.
function func5(): void {
  return;
}

//명시적으로 null을 리턴하고 싶다면 작성해줘야 함
function func6(): null {}
function func7(): null {
  return null;
}
```

- void를 사용하는 곳
  : 아무것도 반환하지 않을 때
  : 반환값이 필요없는 콜백 함수
  : 비동기 함수에 리턴되는 값이 없음을 나타낼 때

```ts
//비동기 함수
async function fetchGetTodo(): Promise<void> {
  const res = await fetch("주소");
}

async function fetchGetTodo2(): Promise<string> {
  const res = await fetch("주소");
  return "hello";
}

async function fetchGetTodo3(): Promise<boolean> {
  const res = await fetch("주소");
  return true;
}

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

async function fetchGetTodo4(): Promise<Todo> {
  const res = await fetch("주소");
  return { id: 1, title: "할일", completed: false };
}
```
