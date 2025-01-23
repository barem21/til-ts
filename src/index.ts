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
