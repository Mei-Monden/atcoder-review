function main(input) {
  let n = parseInt(input.trim(), 10);

  while (n % 2 === 0) {
    n /= 2;
  }

  while (n % 3 === 0) {
    n /= 3;
  }

  if (n === 1) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
