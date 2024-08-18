function main(input) {
  let lines = input.split('\n');
  let n = Number(lines[0]);
  let s = lines[1];
  let result = "No"

  for (let i = 0; i < n -1; i++) {
    if ((s[i] === "a" && s[i + 1] === "b") || (s[i] === "b" && s[i + 1] === "a")) {
      result = "Yes";
      break;
    }
  }
  console.log(result);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
