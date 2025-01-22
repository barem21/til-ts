# 타입 단언 (Type Assertion)

- `타입스크립트야 이건 내가 타입을 정한게 맞다`
- 개발자가 타입을 보증한다라는 의미
- 검사하지 말고 나를 믿어라!
- 컴파일러를 속이는 과정이다.

```ts
type Sample = { name: string; age: number };

//아래는 타입추론에서 :{} 어노테이션으로 판단
//프로퍼티 name, 프로퍼티 age가 없다고 판단(오류)
let who = {};
who.name = "kim"; //오류
who.age = 20; //오류

//필수 프로퍼티가 할당 안됨(오류)
let who2: { name: string; age: number } = {}; //

//옵션은 개발자의 의도가 아닌 회피 방법(올바르지 않음)
let who3: { name?: string; age?: number } = {};

//최종 책임을 개발자가 지겠다. 타입검사 취소
let who4 = {} as Sample;
who4.name = "kim";
who4.age = 20;
//who4.gender = "male"; //오류
```

## 1. any 타입을 명확한 타입으로 단언

```ts
let value: any = "Hello";
let count: number = (value as string).length;
```

## 2. DOM을 활용할 때

```ts
const root: HTMLElement | null = document.getElementById("root") as HTMLElement;
const inputTag = document.querySelector("input");
(inputTag as HTMLInputElement).value = "hello";
```

## 3. 유니온 타입중 하나를 지정하기

```ts
type User = { name: string };
type Admin = { name: string; admin: boolean };

let person: User | Admin = { name: "kim", admin: true };
console.log((person as Admin).admin);
```

## 4. Null이 아닌 값으로 단언

- 이거 절대 null 아니라고 개발자가 알려준다.

```ts
let tag = document.querySelector("div");
//절대 null이 아니라고 알려줄겁니다.
(tag as HTMLDivElement).innerHTML = "hello, world";
```

## 5. const 단언

- 상당히 편리하게 사용할 수 있다.

```ts
let num = 10 as const;

//as const 활용시 readonly가 세팅되어 변경 불가
let animal = { name: "dog", age: 10 } as const;

animal.age = 20; //오류

//아래처럼 된다.
let animal2: { readonly name: "dog"; readonly age: 10 };
```

## 6. 타입 좁히기(Type Narrowing)과 함께 활용

```ts
function show(value: string | number) {
  //타입 좁히기
  if (typeof value === "string") {
    console.log((value as string).toUpperCase());
  } else {
    console.log((value as number).toFixed(2));
  }
}
```

## 7. 타입단언 사용시 주의 유형

- 모든 타입을 타입 단언으로 해결되지는 않는다.
- 수퍼타입과 서브 타입을 고민해야 한다.

```ts
//10은 number이고 never은 모든 타입의 서브타입, 10은 슈퍼타입이므로 타입 단언이 가능하다.
let num = 10 as never;

//10은 number이고 unknown은 최상위 수퍼타입, 10은 unknown의 서브타입이므로 타입 단언이 가능하다.
let num2 = 10 as unknown;

//10은 number이고 string은 number의 수퍼 또는 서브타입이 아니므로 타입 단언이 불가하다.
let num3 = 10 as string; //오류

//아래는 좋지 않은 단언 샘플
let num4 = 10 as unknown as string;
```
