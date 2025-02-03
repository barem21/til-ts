//약속을 지켜라
interface CarInterface {
  name: string;
  brand: string;
  price: number;
  move(): void;
  stop(): void;
}

interface ElectricInterface {
  battery: number;
  isBattery: boolean;
}

//인터페이스를 구현
class ElectricCar implements CarInterface, ElectricInterface {
  constructor(
    public name: string,
    public brand: string,
    public price: number,
    public battery: number,
    public isBattery: boolean
  ) {}
  move() {
    console.log("움직여라!");
  }
  stop() {
    console.log("멈춰라!");
  }
}

let modelX = new ElectricCar("modelX", "tesla", 10000, 10, true);
