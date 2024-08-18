function main(input) {
  const b = BigInt(input.trim());
  let ans = -1n;

  for (let a = 1n; a <= b; a++) {
    const aa = a ** a;

    if (aa === b) {
      ans = a;
      break;
    } else if (aa > b) {
      break;
    }
  }

  console.log(ans.toString());
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
