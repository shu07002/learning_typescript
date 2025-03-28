// 배열
// 배열의 타입을 정의하는 방법
let numArray: number[] = [1, 2, 3];
let strArray: string[] = ["hello", "world"];
let boolArray: Array<boolean> = [true, false];
// 타입스크립트에서 꺽쇠를 열어서 다른 타입을 집어넣는 문법을 제네릭

// 배열에 들어가는 요소의 타입이 다양할 경우
let multiArr: (string | number)[] = [1, 2, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let multiArr2: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// 튜플
// 배열의 길이가 고정되고 각 요소의 타입이 지정된 배열
let tupe1: [number, number] = [1, 2];
// tupe1 = [1, 2, 3]; // 에러 발생
// tup11 = ["1", "2"]; // 에러 발생
let tupe2: [number, string, boolean] = [1, "2", true];
//튜플도 결국 배열임
// 그래서 배열 메소드를 사용 가능한데, 내가 위에서 길이 제한을 걸었어도
// push나 pop 같은 메소드를 사용하면 에러가 발생하지 않음
// 그래서 튜플 사용할 때는 좀 조심해야함
