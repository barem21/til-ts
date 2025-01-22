type Person = {
  name: string;
  age: number;
};

function func(value: string | number | Date | null | Person) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (typeof value === "number") {
    console.log(value.toFixed(2));
  } else if (value instanceof Date) {
    //Date라는 것을 보장
    console.log(value.getTime());
    //} else if (value instanceof Person) { //오류
    //} else if ("age" in value) { //오류
    //}else if(value && "age" in value) { //성공
  } else if (value as Person) {
    //성공
    console.log((value as Person).age);
  }
}
