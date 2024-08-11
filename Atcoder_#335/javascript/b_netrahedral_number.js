function main(input) {
  const n = Number(input);

  for (let x = 0; x <= n; x++) {
      for (let y = 0; y <= n; y++) {
          for (let z = 0; z <= n; z++) {
              if (x + y + z <= n) {
                console.log(`${x} ${y} ${z}`);
              }
          }
      }
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
