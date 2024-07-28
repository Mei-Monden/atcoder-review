function main(input) {
  const lines = input.trim().split('\n');
  const n = Number(lines[0]);
  const a = lines[1].split(' ').map(Number);

  const a_sum = a.reduce((acc, num) => acc + num, 0);

  const result = -a_sum === 0 ? 0 : -a_sum;

  console.log(result);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
