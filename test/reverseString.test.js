import { reverseString } from "../src/reverseString";

test("one word", () => {
  expect(reverseString("Hello")).toBe("olleH");
});

test("more than one word", () => {
  expect(reverseString(".esle enoyna rof eromyna emit sah eno oN")).toBe(
    "No one has time anymore for anyone else."
  );
});

test("not string", () => {
  expect(reverseString(1234)).toBe("Not a string");
});
