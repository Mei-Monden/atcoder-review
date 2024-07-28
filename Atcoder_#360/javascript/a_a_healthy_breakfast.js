function main(input) {
  const S = input.trim();

  const first_char = S[0];
  const second_char = S[1];
  const third_char = S[2];

  let is_rice_left = false;

  if (first_char === "R") {
    is_rice_left = true;
  } else if (second_char === "R" && third_char === "M") {
    is_rice_left = true;
  }

  const result = is_rice_left ? "Yes" : "No";

  console.log(result);
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
