function main(input) {
  let s = input.trim();

  s = s.slice(0, -1) + "4";

  console.log(s);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
