function main(input) {
  let [k, g, m] = input.trim().split(' ').map(Number);

  let glass = 0;
  let mug = 0;

  for (let i = 0; i < k; i++) {
      if (glass === g) {
          glass = 0;
      } else if (mug === 0) {
          mug = m;
      } else {
          let transfer = Math.min(mug, g - glass);
          mug -= transfer;
          glass += transfer;
      }
  }

  console.log(glass, mug);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
