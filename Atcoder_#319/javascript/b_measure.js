function main(input) {
  const n = parseInt(input.trim(), 10);
  const result = [];

  for (let i = 0; i <= n; i++) {
    let found = false;
    
    for (let j = 1; j <= 9; j++) {
      if (n % j === 0 && i % (n / j) === 0) {
        result.push(j.toString());
        found = true;
        break;
      }
    }
    
    if (!found) {
      result.push('-');
    }
  }

  console.log(result.join(''));
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
