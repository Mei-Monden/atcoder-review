function main(input) {
  const lines = input.split("\n");
  const [a,b,c,d,e,f] = lines[0].split(' ').map(Number);
  const [g,h,i,j,k,l] = lines[1].split(' ').map(Number);

  const x = Math.max(0, Math.min(d, j) - Math.max(a, g));
  const y = Math.max(0, Math.min(e, k) - Math.max(b, h));
  const z = Math.max(0, Math.min(f, l) - Math.max(c, i));

  const ans = x * y * z
  const result = ans > 0 ? "Yes" : "No";
  console.log(result);

}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
