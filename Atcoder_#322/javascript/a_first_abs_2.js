function main(input) {
  const lines = input.split('\n');
  const n = parseInt(lines[0], 10);
  const s = lines[1].trim();

  const position = s.indexOf("ABC");

  if (position === -1) {
    console.log(-1);
  } else {
    console.log(position + 1);
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
