// void
// 공허
// 아무것도 없음을 의미하는 타입
function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

let a: void;
// void 타입으로 선언한 변수에는 어떤 값도 담을 수 없음
// 오직 undefined만 담을 수 있음
// config에서 strictNullChecks가 false면 null을 담을 수 있음

// never
// 절대 발생하지 않는 값
// 불가능한 타입
function func3(): never {
  while (true) {}
  // 이 녀석이 정상적으로 종료될 수 없어서 반환하는게 모순이다!! => never
}
function func4(): never {
  throw new Error();
}

let b: never;
// 어떤 값도 담을 수 없다
// config에서 striuctNullChecks가 false여도 null을 못 담음
