function main(input) {
  input = input.trim().split(' ');
  const S = input[0];
  const T = input[1];

  const n = S.length;
  const t_len = T.length;

  let found = false;

  for (let w = 1; w < n; w++) {
    for (let c = 1; c <= w; c++) {
      let new_string = "";
      let idx = c - 1;

      while (idx < n) {
        new_string += S[idx];
        idx += w;
      }

      if (new_string === T) {
        found = true;
        break;
      }
    }
    if (found) {
      break;
    }
  }

  console.log(found ? "Yes" : "No");
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
