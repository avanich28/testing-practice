export function caesarCipher(str) {
  // Add a after z character
  const chars = "abcdefghijklmnopqrstuvwxyzaABCDEFGHIJKLMNOPQRSTUVWXYZA";

  if (
    typeof str !== "string" ||
    str.split("").every((char) => !chars.includes(char))
  )
    return "No characters";

  const cipher = str
    .split("")
    .map((char) =>
      chars.includes(char) ? chars[chars.indexOf(char) + 1] : char
    )
    .join("");

  return cipher;
}
