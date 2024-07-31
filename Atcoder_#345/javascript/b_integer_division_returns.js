function main(input) {
  const x = Number(input.trim());

  if (x % 10 === 0) {
    console.log(x / 10);
  } else {
    console.log((x + 9) / 10);
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
