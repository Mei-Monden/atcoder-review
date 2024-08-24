function main(input) {
  const lines = input.split('\n');
  const [n, m] = lines[0].split(' ').map(Number);
  const s = lines[1];
  const t = lines[2];

  const isPrefix = (s === t.slice(0, n));

  const isSuffix = (s === t.slice(-n));

  if (isPrefix && isSuffix) {
    console.log(0);
  } else if (isPrefix) {
    console.log(1);
  } else if (isSuffix) {
    console.log(2);
  } else {
    console.log(3);
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
