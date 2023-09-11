import { caesarCipher } from "../src/caesarCipher";

test("pass only characters", () => {
  expect(caesarCipher("abc def")).toBe("bcd efg");
});

test("pass characters with number or symbol", () => {
  expect(caesarCipher("123zab# &")).toBe("123abc# &");
});

test("not pass any characters", () => {
  expect(caesarCipher("1234#%")).toBe("No characters");
});

test("not pass input as a string", () => {
  expect(caesarCipher(1234)).toBe("No characters");
});
