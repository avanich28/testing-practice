import { calculator } from "../src/calculator";

test("pass a number", () => {
  expect(calculator.add(2, 3.5)).toBeCloseTo(5.5);
  expect(calculator.subtract(2, 3)).toBeCloseTo(-1);
  expect(calculator.divide(1, 2)).toBeCloseTo(0.5);
  expect(calculator.multiply(2.5, 3)).toBeCloseTo(7.5);
});

test("pass a number as string", () => {
  expect(calculator.add("2", "3.5")).toBeCloseTo(5.5);
  expect(calculator.subtract("2", "3")).toBeCloseTo(-1);
  expect(calculator.divide("1", "2")).toBeCloseTo(0.5);
  expect(calculator.multiply("2.5", "3")).toBeCloseTo(7.5);
});

test("not pass a number", () => {
  expect(calculator.add("ab", "cd")).toBe("Invalid Input");
  expect(calculator.subtract("ab", "cd")).toBe("Invalid Input");
  expect(calculator.divide("ab", "cd")).toBe("Invalid Input");
  expect(calculator.multiply("ab", "cd")).toBe("Invalid Input");
});

test("pass a number with unit", () => {
  expect(calculator.add("16px", "15px")).toBeCloseTo(31);
  expect(calculator.subtract("16px", "15px")).toBeCloseTo(1);
  expect(calculator.divide("16px", "15px")).toBeCloseTo(1.066);
  expect(calculator.multiply("16px", "15px")).toBeCloseTo(240);
});
