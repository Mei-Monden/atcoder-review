function main(input) {
  const x =  BigInt(input);

  if (x % 10n === 0n) {
    console.log((x / 10n).toString());
  } else if  (x > 0) {
    console.log((x / 10n + 1n).toString());
  } else {
    console.log((x / 10n).toString());
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
