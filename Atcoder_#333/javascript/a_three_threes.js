function main(input) {
  const n = Number(input);

  const n_string = n.toString();

  console.log(n_string);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
