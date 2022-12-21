import * as loggerModule from './logger2.mjs';

// 이렇게 찍어보면 객체의 이름이 default로 나타나지만
// $ node ex7.mjs
// [Module: null prototype] { default: [class Logger2] }
// default는 이름을 사용할 수는 없다
console.log(loggerModule);
