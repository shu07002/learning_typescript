// object
let user: { id?: number; name: string } = {
  id: 1,
  name: "kkw",
};
user.id;

let dog: { name: string; color: string } = {
  name: "돌돌이",
  color: "갈색",
};
// 타입스크립트의 구조적 타입 시스템
// 객체의 구조를 기준으로 타입을 정의한다.

// user 객체의 id 프로퍼티를 옵셔널 프로퍼티라고 지정한다
user = {
  name: "jenny",
};

let config: { readonly apiKey: string } = {
  apiKey: "asdsadsad",
};
// 여기서 apiKey를 바꾸면 안된다면???
// 타입 정의 앞에 readOnly 를 달아주면 값을 바꾸지 못하게 함
