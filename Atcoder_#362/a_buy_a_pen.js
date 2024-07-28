function main(input) {
  const lines = input.split("\n");
  const [R, G, B] = lines[0].split(" ").map(Number);
  const C = lines[1].trim();

  let X = null;

  switch (C) {
    case "Red":
      X = Math.min(G, B);
      break;
    case "Green":
      X = Math.min(R, B);
      break;
    default:
      X = Math.min(R, G);
      break;
  }


	console.log(X);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
