export function reverseString(str) {
  if (typeof str !== "string") return "Not a string";

  return str.split("").reverse().join("");
}
