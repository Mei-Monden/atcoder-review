function main(input) {
  const lines = input.trim().split('\n');
  const [n, k]  = lines[0].split(' ').map(Number);
  const a = lines[1].split(' ').map(Number);

  let ans = []

  for (let i = 0; i < n; i++) {
    if (a[i] % k === 0) {
      ans.push(a[i] / k);
    }
  }

  console.log(ans.join(" "));
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
