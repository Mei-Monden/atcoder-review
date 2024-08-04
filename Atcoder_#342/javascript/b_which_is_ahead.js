const fs = require('fs');

function main(input) {
  const lines = input.trim().split('\n');
  
  const n = parseInt(lines[0], 10);
  
  const p = lines[1].split(' ').map(Number);
  
  const q = parseInt(lines[2], 10);

  const positions = {};
  p.forEach((person, index) => {
    positions[person] = index;
  });

  for (let i = 3; i < 3 + q; i++) {
    const [Ai, Bi] = lines[i].split(' ').map(Number);
    
    if (positions[Ai] < positions[Bi]) {
      console.log(Ai);
    } else {
      console.log(Bi);
    }
  }
}

main(fs.readFileSync('/dev/stdin', 'utf8'));
