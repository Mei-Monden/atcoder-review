function main(input) {
  const s = input.trim();
  let result = "Yes";

  for (let i = 1; i < s.length; i += 2) {
    if (s[i] !== '0') {
      result = "No";
      break;
    }
  }

  console.log(result);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
