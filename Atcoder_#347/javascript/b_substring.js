function main(input) {
  const s = input.trim();
  const uniqueSubstrings = new Set();

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      uniqueSubstrings.add(s.substring(i, j + 1));
    }
  }

  console.log(uniqueSubstrings.size);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
