function main(input) {
  const isPalindrome = (str) => str === str.split('').reverse().join('');
  
  let maxLength = 0;
  const S = input.trim();

  for (let i = 0; i < S.length; i++) {
    for (let j = i + 1; j <= S.length; j++) {
      const substring = S.slice(i, j);
      if (isPalindrome(substring)) {
        maxLength = Math.max(maxLength, substring.length);
      }
    }
  }

  console.log(maxLength);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
