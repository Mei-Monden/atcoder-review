function main(input) {
  const lines = input.trim().split('\n');
  const n  = Number(lines[0]);
  const a = lines[1].split(' ').map(Number);

  let ans = []

  for (let i = 0; i < n-1; i++) {
    ans.push(a[i] * a[i+1])
  }

  console.log(ans.join(" "));
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
