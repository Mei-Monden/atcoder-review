const { endianness } = require('os');

function main(input) {
  let lines = input.split('\n');
  let [n, l, r] = lines[0].trim().split(' ').map(Number);
  let a = lines[1].trim().split(' ').map(Number);

  let ans = [];

  for (let i = 0; i < n; i++) {
    if (a[i] < l) {
      ans.push(l)
    } else if (a[i] > r) {
      ans.push(r)
    } else (
      ans.push(a[i])
    )
  }

  console.log(ans.join(' '));
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
