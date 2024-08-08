function main(input) {
  const s_chars = input.trim().split('');
  const n = s_chars.length - 1;
  let result = true;

  if (s_chars[0] === s_chars[0].toUpperCase()) {
    for (let i = 0; i < n; i++) {
      if (s_chars[i + 1] === s_chars[i + 1].toLowerCase()) {
        continue;
      } else {
        result = false;
        break;
      }
    }
  } else {
    result = false;
  }

  console.log(result ? "Yes" : "No");
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
