function main(input) {
  let n = input.trim();
  let result = "Yes";

  for (let i = 0; i < n.length - 1; i++) {
    if (n[i] <= n[i + 1]) {
      result = "No";
      break;
    }
  }

  console.log(result);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
