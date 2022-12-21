// export default를 사용하면 Logger2라는 이름이 무시되며, 
// import할 때 이름을 지정할 수 없다며
// export default를 사용하면 import할 때 {}를 사용할 수 없다
export default class Logger2 {
  constructor(name) {
    this.name = name;
  }

  log(message) {
    console.log(`[${this.name}] ${message}`);
  }
}