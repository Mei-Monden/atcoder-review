function main(input) {
  let [W, B] = input.trim().split(' ').map(Number);

  const pattern = "wbwbwwbwbwbwwbwbwwbwbwbw";
  const patternLength = pattern.length;

  const num = Math.min(Math.floor(W / 7), Math.floor(B / 5));
  W -= 7 * num;
  B -= 5 * num;

  let num_w = 0;
  let num_b = 0;
  let i = 0;
  let j = 0;
  let ans = "No";

  for (let k = 0; k < patternLength; k++) {
    if (pattern[i] === 'w') {
      num_w += 1;
    } else {
      num_b += 1;
    }
    if (W === num_w && B === num_b) {
      ans = "Yes";
      break;
    } else if (num_w > W || num_b > B) {
      if (pattern[j] === 'w') {
        num_w -= 1;
      } else {
        num_b -= 1;
      }
      j += 1;
    }
    i += 1;
  }

  console.log(ans);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
