function main(input) {
  const [b, g] = input.trim().split(' ').map(Number);

  if (b > g) {
    console.log("Bat");
  } else {
    console.log("Glove");
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
