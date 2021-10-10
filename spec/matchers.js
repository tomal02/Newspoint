class Matchers {
  constructor(input) {
    this.input = input;
  }

  printResult(message, result) {
    let css = result ? 'green' : 'red';
    console.log(`%c ${message}`, `background: ${css};`);
  }
}
