function main(input) {
  const n = Number(input);

  console.log("10".repeat(n) + "1")
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
