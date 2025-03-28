// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = Infinity;
let num5: number = -Infinity;
let num6: number = NaN;
// :type 이렇게 쓰는게 "타입 주석"/ "어노테이션" 이라고 함

// string
let str1: string = "hello";
let str2: string = "hello";
let str3: string = `${str1} world`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// config의 strictNullChecks가 false일 때
// true일 때는 에러 발생함 숫자에 널 넣었다고
let numA: number = null;
numA = 30;

// literal type
let numB: 10 = 10;
// 변수의 타입을 값 그 자체로 정의
// numB = 20; // 에러 발생
// 10이라는 값만 가질 수 있음, 10이라는 값만 허용하는 타입을 만든 것
// 이렇게 값으로 만든 타입을 리터럴 타입이라고 함
let strA: "hello" = "hello";
let boolA: true = true;
