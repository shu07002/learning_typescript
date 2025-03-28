// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거헤두고 사용하는 타입
enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}
// 숫자를 할당하지 않으면 순서대로 0부터 시작
// 10부터 시작하고 싶으면 첫번째 요소에 10 할당 나머지는 그대로
// enum은 컴파일 해도 js에서 사라지는 게 아니라 객체로 변환됨

enum Language {
  KOREAN = "ko",
  ENGLISH = "en",
  JAPANESE = "jp",
}

const user1 = {
  name: "kkw",
  role: Role.ADMIN /* admin */,
  language: Language.KOREAN,
};

const user2 = {
  name: "qqq",
  role: Role.USER /* 일반 유저 */,
};

const user3 = {
  name: "bbb",
  role: Role.GUEST /* 게스트 */,
};

console.log(user1, user2, user3);
