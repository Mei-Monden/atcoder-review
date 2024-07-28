function main(input) {
  function isGoodString(s) {
    let counts = {};
    for (let char of s) {
      counts[char] = (counts[char] || 0) + 1;
    }

    let occurrenceCounts = Object.values(counts);

    let frequencyCounts = {};
    for (let count of occurrenceCounts) {
      frequencyCounts[count] = (frequencyCounts[count] || 0) + 1;
    }

    return Object.values(frequencyCounts).every(count => count === 0 || count === 2);
  }

  const s = input.trim();
  const result = isGoodString(s) ? "Yes" : "No";
  
  console.log(result);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
