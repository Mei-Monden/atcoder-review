function Main(input) {
  const inp = input.trim().split(" ");
  const s = inp[0];
  const t = inp[1];
  
  const result = s === "AtCoder" && t === "Land";

  console.log(result ? "Yes" : "No");
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
Main(input);
