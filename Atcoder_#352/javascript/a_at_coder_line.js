function main(input) {
  const [N,X,Y,Z] = input.split(" ").map(Number);


  if ((X <= Z && Z <= Y) || (Y <= Z && Z <= X)) {
    console.log("Yes");
  }  else {
    console.log("No");
  }

}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
