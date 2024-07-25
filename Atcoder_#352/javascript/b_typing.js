function main(input) {
  const [s, t] = input.trim().split("\n");

  let indexList = [];
  let sIndex = 0;

  for (let i = 0; i < t.length; i++) {
    if (sIndex < s.length && s[sIndex] === t[i]) {
      indexList.push(i + 1);
      sIndex++;
    }
  }

  console.log(indexList.join(" "));
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
