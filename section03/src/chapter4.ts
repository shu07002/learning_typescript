// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  age: number;
  bio: string;
  location: string;
};
// 동일한 스코프 내에서 같은 이름의 타입 별칭 재선언 불가능
// 타입 별칭은 컴파일해서 js로 만들어지면 다 사라짐

let user1: User = {
  id: 1,
  name: "kkw",
  nickname: "kkw",
  age: 30,
  bio: "hello",
  location: "seoul",
};

let user2: User = {
  id: 1,
  name: "kkw",
  nickname: "kkw",
  age: 30,
  bio: "hello",
  location: "seoul",
};
let user3: User = {
  id: 1,
  name: "kkw",
  nickname: "kkw",
  age: 30,
  bio: "hello",
  location: "seoul",
};

function func() {
  type User = {};
  // func 안에서는 빈 객체 타입 별칭, 밖에서는 프로퍼티 있는 타입 별칭
}
//==========================================================
// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};
let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedStates: "us",
  Japan: "jp",
};
// 지금 객체 보면 키가 스트링, 값이 스트링
// 이런 경우에는 인덱스 시그니처를 사용할 수 있음
// 인덱스 시그니처는 객체의 키와 값의 타입을 정의하는 방법

type CountryNumberCodes = {
  [key: string]: number | string;
  Korea: number;
};
let countryNumberAndStringCodes: CountryNumberCodes = {
  Korea: 82,
  UnitedStates: "us",
  Japan: 81,
};
// 주의 할 점은 객체 내부를 텅 비워도 에러가 발새하지 않는다는 점
// 인덱스 시그니처는 주어진 규칙을 위반하지만 않으면 모든 객체 허용
// 그래서 꼭 넣어야하는 프로퍼티가 있으면 같이 타입 별칭에 추가하면 됨됨
