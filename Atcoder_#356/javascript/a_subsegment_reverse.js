function Main(input) {
	const [n, l, r] = input.split(" ").map(Number);

  let a = Array.from({ length: n }, (_, i) => i + 1);

  const reversedPart = a.slice(l - 1, r).reverse();
  a.splice(l - 1, r - l + 1, ...reversedPart);

  console.log(a.join(' '));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
