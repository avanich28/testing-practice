import { capitalize } from "../src/capitalize";

test("one word", () => {
  expect(capitalize("test")).toBe("Test");
});

test("more than one word", () => {
  expect(capitalize("i Feel happy.")).toBe("I feel happy.");
});

test("has more than one sentence and separates the sentence with full stop", () => {
  expect(
    capitalize("learn continually. there's Always one more Thing to learn.")
  ).toBe("Learn continually. There's always one more thing to learn.");
});

test("separates sentence with various type of delimiter", () => {
  expect(
    capitalize(
      "if someone else has done it, i can do it too. if no one Has, then i can be first."
    )
  ).toBe(
    "If someone else has done it, I can do it too. If no one has, then I can be first."
  );
});

test("number", () => {
  expect(capitalize(1234)).toBe("No characters");
});

test("not include any characters", () => {
  expect(capitalize("1234@#$%!")).toBe("No characters");
});

test("includes some characters, but not in word and sentence", () => {
  expect(capitalize("123aBcf")).toBe("123abcf");
});
