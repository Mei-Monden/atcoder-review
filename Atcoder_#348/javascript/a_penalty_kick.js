function main(input) {
  const n = input.trim()

  let result = ""

  for (let i = 0; i < n; i++) {
    if ((i + 1) % 3 === 0) {
      result += 'x';
    } else {
      result += 'o';
    }
  }

  console.log(result);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
