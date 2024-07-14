function Main(input) {
	const lines = input.split("\n");
  const [xa, ya] = lines[0].split(" ").map(Number);
  const [xb, yb] = lines[1].split(" ").map(Number);
  const [xc, yc] = lines[2].split(" ").map(Number);

  function distance(x1, y1, x2, y2) {
    return ((x2 - x1) ** 2 + (y2 - y1) ** 2);
  }
  
  const ab = distance(xa, ya, xb, yb);
  const bc = distance(xb, yb, xc, yc);
  const ac = distance(xa, ya, xc, yc);

  const sorted_distances = [ab, bc, ac].sort((a, b) => a - b);

  if (sorted_distances[2] == sorted_distances[0] + sorted_distances[1]) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
