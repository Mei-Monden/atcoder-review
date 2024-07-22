function main(input) {
  const lines = input.trim().split('\n');
  
  const n = parseInt(lines[0]);

  const users = [];
  for (let i = 1; i <= n; i++) {
    const [name, rate] = lines[i].split(' ');
    users.push({ name, rate: parseInt(rate) });
  }

  users.sort((a, b) => a.name.localeCompare(b.name));

  const totalRate = users.reduce((sum, user) => sum + user.rate, 0);

  const winnerIndex = totalRate % n;

  console.log(users[winnerIndex].name);
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
