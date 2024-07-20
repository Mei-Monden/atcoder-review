function Main(input) {
	const lines = input.split("\n");
  const [n, m] = lines[0].split(" ").map(Number);
  const a = lines[1].split(" ").map(Number);

  let totalNutrients = Array(m).fill(0);
  for (let i = 0; i < n; i++) {
    const x = lines[2 + i].split(' ').map(Number);
    for (let j = 0; j < m; j++) {
      totalNutrients[j] += x[j];
    }
  }

  let achieved = true;
  for (let i = 0; i < m; i++) {
    if (totalNutrients[i] < a[i]) {
      achieved = false;
      break;
    }
  }

  console.log(achieved ? "Yes" : "No");
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
