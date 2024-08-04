function main(input) {
  const s = input.trim();
  const char_s = s.split('');
  const n = s.length;

  for (let i = 0; i < n; i++) {
    if (i < n - 1 && char_s[i] === char_s[i + 1]) {
      continue;
    } else if (i === 0 && char_s[i] !== char_s[i + 2]) {
      console.log(1);
      break;
    } else if (i === 0 && char_s[i] == char_s[i + 2]) {
      console.log(2);
      break;
    } else if(i === n - 1 || char_s[i] !== char_s[i - 1]){
      console.log(i + 1);
      break;
    }
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
