# 타입 호환성

- SuperType : 더 많은 값을 포함하는 타입
- SubType : 특정 값이나 조건을 가진 타입

## 예시

- Animal은 수퍼타입
- Cat은 서브타입

## 1. any

- 타입스크립트 `최상위 수퍼타입`입니다.
- 어떤 타입도 `any의 서브타입`이 됩니다.

```ts
let value: any;

value = "hello"; //string은 any의 서브타입이라서 할당가능
value = 1; //number는 any의 서브타입이라서 할당가능
value = true; //boolean은 any의 서브타입이라서 할당가능
```

## 2. unknown

- unknown은 모든 타입의 수퍼타입입니다.
- 하지만 반드시 타입체크를 직접해야 합니다. (타입가드)
- typeof 등등

```ts
let value: unknown;

value = "hello"; //string은 unknown의 서브타입이라서 할당가능
value = 1; //number는 unknown의 서브타입이라서 할당가능
value = true; //boolean은 unknown의 서브타입이라서 할당가능

//담겨진 unknown을 활용하려면 타입체크 필요
if (typeof value === "string") {
  value.toUpperCase(); //대문자로 바꾸기
}
```

- unknown은 다른 타입의 서브 타입이 아니다.

```ts
//js를 마이그레이션 하면서 any를 조심하다보니 unknown을 사용함
let value: unknown = "hi";

//아래 구문처럼 unknown 타입을 서브 타입으로 타입 캐스팅하면서 오류 발생
let word: string = value; //오류
```

## 3. never

- never는 수퍼타입이 될 수 없다.
- never는 존재할 수 없는 값이다.
- never는 모든 타입의 서브 타입이다.

```ts
let value: never;
//never는 수퍼타입이 될 수 없다.
value = 5; //오류
```

## 4. void

- void는 undefined의 수퍼타입이다.
- void는 any나 unknown의 서브타입이 될 수 있다.

```ts
let value: void;
let go: undefined = undefined;
//void는 undefined의 수퍼타입이다.
value = go;
value = undefined;

//any나 unknown이 아니므로
value = 5; //오류

function hello(_count: number): string {
  return "hello" + _count;
}
let result: void;
//string은 void의 서브타입이 아니라서 호환안됨
result = hello(10); //오류
```

## 5. string, number, boolean

- 위의 타입은 각각의 리터럴 타입의 수퍼타입이다.
- 위의 타입은 각각 any, unknonw 의 서브타입이다.

```ts
//리터럴은 실제 값을 말한다.
//아래는 "hello"는 "hello"라는 리터럴이다.
let constStr: "hello" = "hello";
// const 상수로 만들면 값은 "hello"로 고정된다.
//그러나 어찌되었든 "hello" string

//"hello" 리터럴은 문자열에 포함된다. (업캐스팅된다.)
let str: string = constStr;

//리터럴로 표현하면
let num: 100 = 100;
//100 리터럴은 숫자형에 포함된다. (업캐스팅된다.)
let num2: number = num;

//false 리터럴은 boolean에 포함된다. (업캐스팅된다.)
const isLive: boolean = false;
```
