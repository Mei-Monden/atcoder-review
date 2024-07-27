function main(input) {
  const lines = input.trim().split('\n');

  const [n, q] = lines[0].split(' ').map(Number);

  const treatments = lines[1].split(' ').map(Number);

  const teeth = Array(n).fill(true);

  treatments.forEach(t => {
      const index = t - 1;
      teeth[index] = !teeth[index];
  });

  const result = teeth.filter(Boolean).length;

  console.log(result);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
