function main(input) {
  const lines = input.split("\n");
  const [N, K, X] = lines[0].split(' ').map(Number);
  const A = lines[1].split(' ').map(Number);

  A.splice(K, 0, X);

  console.log(A.join(' '));

}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
