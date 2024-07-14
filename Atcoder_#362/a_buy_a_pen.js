function Main(input) {
	const lines = input.split("\n");
  const [R, G, B] = lines[0].split(" ").map(Number);
  const C = lines[1].trim();

  let X = null;

  if (C == "Red") {
    X = Math.min(G,B);
  } else if (C == "Green") {
    X = Math.min(R,B);
  } else {
    X = Math.min(R,G);
  }


	console.log(X);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
