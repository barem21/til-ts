//아래 상황은 Person이 하나로 합쳐진다.
interface Person {
  name: string;
}
interface Person {
  name: string;
  age: number;
}
interface Male extends Person {
  name: "gildong";
}
const who: Male = {
  name: "고길동", //오류 발생
  age: 10,
};
