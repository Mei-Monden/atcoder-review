function main(input) {
  const s = input.trim();
  const char = s.split(""); 

  const side = char[0] === "<" && char[char.length - 1] === ">";

  const middle = char.slice(1, -1).every(c => c === "=");

  if (side && middle) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
