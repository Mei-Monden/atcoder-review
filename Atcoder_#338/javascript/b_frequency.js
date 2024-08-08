function main(input) {
  const s = input.trim();
  const frequency = {};

  for (let char of s) {
    if (frequency[char]) {
      frequency[char]++;
    } else {
      frequency[char] = 1;
    }
  }

  let maxCount = 0;
  let resultChar = '';

  for (let char in frequency) {
    if (frequency[char] > maxCount || (frequency[char] === maxCount && char < resultChar)) {
      maxCount = frequency[char];
      resultChar = char;
    }
  }

  console.log(resultChar);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
