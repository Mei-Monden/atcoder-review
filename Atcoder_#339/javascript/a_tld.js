const fs = require('fs');

function main(input) {
  const s = input.trim();

  const sChars = s.split('');
  const n = s.length;

  const indices = [];
  sChars.forEach((char, i) => {
    if (char === '.') {
      indices.push(i);
    }
  });

  const lastIndex = indices[indices.length - 1];

  console.log(s.slice(lastIndex + 1));
}

main(fs.readFileSync('/dev/stdin', 'utf8'));
