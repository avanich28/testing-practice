import { analyzeArray } from "../src/analyzeArray";

test("pass number array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("pass array with string number", () => {
  expect(analyzeArray(["10", "8", "3", "4", "2", "6"])).toEqual({
    average: 5.5,
    min: 2,
    max: 10,
    length: 6,
  });
});

test("pass array with not number elements", () => {
  expect(analyzeArray(["a", "2", "c", 4])).toBe("Invalid Input");
});
