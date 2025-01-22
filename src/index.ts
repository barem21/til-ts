type Animal = { name: string };
type Yaong = { age: number };
type Sample = Animal & Yaong;

const lion: Sample = { name: "lion" }; //오류
const tiger: Sample = { age: 5 }; //오류
const puma: Sample = { name: "puma", age: 10 }; //정상
