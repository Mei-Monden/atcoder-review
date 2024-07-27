function main(input) {
  const lines = input.trim().split("\n");
  const [A1,A2,A3,A4,A5,A6,A7,A8,A9]  = lines[0].split(" ").map(Number);
  const [B1,B2,B3,B4,B5,B6,B7,B8]  = lines[1].split(" ").map(Number);

  let A = A1+A2+A3+A4+A5+A6+A7+A8+A9;
  let B = B1+B2+B3+B4+B5+B6+B7+B8;

  let ans = A - B +1

  console.log(ans);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
