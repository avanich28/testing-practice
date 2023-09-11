export function caesarCipher(str) {
  // Add a after z character
  const chars = "abcdefghijklmnopqrstuvwxyzaABCDEFGHIJKLMNOPQRSTUVWXYZA";

  if (
    typeof str !== "string" ||
    str.split("").every((char) => !chars.includes(char))
  )
    return "No characters";

  const indexArr = str
    .split("")
    .map((char) => (chars.includes(char) ? chars.indexOf(char) : char));

  const cipher = indexArr
    .map((index) => (typeof index === "number" ? chars[index + 1] : index))
    .join("");

  return cipher;
}
