export const calculator = {
  errorMsg: "Invalid Input",
  validInput(a, b) {
    const firstOperator = parseInt(a) || null;
    const secondOperator = parseInt(b) || null;

    if (firstOperator !== null && secondOperator !== null) return true;
    else return false;
  },
  parseNumber(a, b) {
    return { firstOperator: parseFloat(a), secondOperator: parseFloat(b) };
  },
  add(a, b) {
    if (!this.validInput(a, b)) return this.errorMsg;
    const { firstOperator, secondOperator } = this.parseNumber(a, b);
    return firstOperator + secondOperator;
  },
  subtract(a, b) {
    if (!this.validInput(a, b)) return this.errorMsg;
    const { firstOperator, secondOperator } = this.parseNumber(a, b);
    return firstOperator - secondOperator;
  },
  divide(a, b) {
    if (!this.validInput(a, b)) return this.errorMsg;
    const { firstOperator, secondOperator } = this.parseNumber(a, b);
    return firstOperator / secondOperator;
  },
  multiply(a, b) {
    if (!this.validInput(a, b)) return this.errorMsg;
    const { firstOperator, secondOperator } = this.parseNumber(a, b);
    return firstOperator * secondOperator;
  },
};
