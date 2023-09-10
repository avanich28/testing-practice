export function capitalize(str) {
  const regEx = /[a-z]/gi;
  if (typeof str !== "string" || !regEx.test(str)) return "No characters";

  const newStr = str.match(/\(?[^\.\?\!]+[\.!\?]\)?/g);

  return (newStr || [str])
    .map(
      (sentence) =>
        sentence.trim()[0].toUpperCase() +
        sentence.trim().slice(1).toLowerCase()
    )
    .join(" ")
    .replaceAll(" i ", " I ");
}
