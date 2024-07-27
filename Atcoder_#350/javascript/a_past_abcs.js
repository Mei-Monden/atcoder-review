function main(input) {
  const inputs = input.trim();

  const number = parseInt(inputs.slice(3, 6), 10);

  if ((number >= 1 && number <= 315) || (number >= 317 && number <= 349)) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
