class Matchers {
  constructor(input) {
    this.input = input;
  }

  printResult(message, result) {
    let css = result ? 'green' : 'red';
    console.log(`%c ${message}`, `background: ${css};`);
  }

  toEqual(matchValue) {
    let result = this.input === matchValue;
    let message = result
      ? `PASS: Input: ${this.input} is EQUAL to ${matchValue}`
      : `FAIL: Input: ${this.input} is NOT EQUAL to ${matchValue}`;
    this.printResult(message, result);
  }

  toNotEqual(matchValue) {
    let result = this.input !== matchValue;
    let message = result
      ? `PASS: Input: ${this.input} is NOT EQUAL to ${matchValue}`
      : `FAIL: Input: ${this.input} is EQUAL to ${matchValue}`;
    this.printResult(message, result);
  }
}
