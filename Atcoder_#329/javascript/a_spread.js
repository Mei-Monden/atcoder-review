function main(input) {
  let s = input.trim();
  let s_char = s.split('');
  console.log(s_char.join(' '));
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
