// any
// 타입을 확실하게 모를 때
let anyVar: any = 10;
anyVar = "hello";
anyVar = true;
anyVar = {};
anyVar = [];
anyVar = () => {};
// 딱 자브스크립트 할 때 처럼 쓸 수 있음
// any 타입은 타입스크립트의 모든 타입을 포함
let num: number = 10;
num = anyVar;
// any는 결국 타입 검사를 걍 건너뛰는 것처럼 행동함
// 그래서 컴파일을 하면 런타임에서 에러가 발생함
// 그래서 any는 최대한 쓰지 않는 것이 좋음

// unknown
let unknownVar: unknown;
unknownVar = 10;
unknownVar = "hello";
unknownVar = true;
// 아무 타입의 값이 들어갈 수 있음
// num = unknownVar;
// unknown은 any와 비슷하지만, any보다는 타입 안전성을 더 보장함
if (typeof unknownVar === "number") {
  num = unknownVar;
}
// 그래서 타입이 확실시 되었을 때만 사용가능함 (타입 정제)
