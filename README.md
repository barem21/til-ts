# 서로소 유니온(Discriminated Union)

- `Tag 유니온`이라고도 하더라
- 여러가지 Type 중에 특정한 타입으로 타입 좁히기
- 특정 타입으로 판단하도록
- `서로소` 관계라는 것은 string | number처럼 어떤 교집합도 없는 것

## 예제 1

```ts
//회원별 서비스 타입 정의
type Admin = {
  tag: "ADMIN";
  name: string;
  memberCount: number; //회원수
};
type Member = {
  tag: "MEMBER";
  name: string;
  point: number; //포인트
};
type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number; //방문횟수
};

//유니온을 이용해서 회원 구별 타입 생성
type User = Admin | Member | Guest;

//로그인 후 회원에 따라서 안내 메시지를 보여준다.
function login(user: User) {
  //user의 종류에 따라서 메시지 출력
  //타입을 좁혀서 상세하게 구분해서 처리
  //user는 객체입니다.

  //in 문법으로 구분하기
  if ("memberCount" in user) {
    console.log(`관리자님, ${user.memberCount}명이 회원입니다.`);
  } else if ("point" in user) {
    console.log(`회원님, ${user.point} 포인트 보유중입니다.`);
  } else {
    console.log(`방문객님, ${user.visitCount}회 방문하셨습니다.`);
  }

  //별도의 구분요소(타입:문자열)로 처리
  if (user.tag === "ADMIN") {
    console.log(`관리자님, ${user.memberCount}명이 회원입니다.`);
  } else if (user.tag === "MEMBER") {
    console.log(`회원님, ${user.point} 포인트 보유중입니다.`);
  } else {
    console.log(`방문객님, ${user.visitCount}회 방문하셨습니다.`);
  }

  //가독성을 위해서
  switch (user.tag) {
    case "ADMIN":
      console.log(`관리자님, ${user.memberCount}명이 회원입니다.`);
      break;
    case "MEMBER":
      console.log(`회원님, ${user.point} 포인트 보유중입니다.`);
      break;
    case "GUEST":
      console.log(`방문객님, ${user.visitCount}회 방문하셨습니다.`);
      break;
  }
}
```

## 예제 2

```ts
type Cat = { kind: "CAT"; sound: string; color: string };
type Dog = { kind: "DOG"; sound: string; food: string };
type Bird = { kind: "BIRD"; sound: string; fly: boolean };
type Animal = Cat | Dog | Bird;

//동물의 소리를 출력하는 기능
function song(animal: Animal) {
  switch (animal.kind) {
    case "CAT":
      console.log(`고양이는 야옹`);
      break;
    case "DOG":
      console.log(`강아지는 멍멍`);
      break;
    case "BIRD":
      console.log(`새는 쨱쨱`);
      break;
  }
}
```
