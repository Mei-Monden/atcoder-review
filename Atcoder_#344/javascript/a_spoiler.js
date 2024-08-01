function main(input) {
  let s = input.trim();
  let first = null;
  let second = null;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "|" && first === null) {
      first = i;
    } else if (s[i] === "|") {
      second = i;
      break;
    }
  }

  s = s.slice(0, first) + s.slice(second + 1);

  console.log(s);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
