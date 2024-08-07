const fs = require('fs');

function main(input) {
  const [H, W, N] = input.trim().split(' ').map(Number);

  const grid = Array.from({ length: H }, () => Array(W).fill('.'));

  let x = 0, y = 0;
  let direction = 0;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];  // 上, 右, 下, 左

  for (let i = 0; i < N; i++) {
    if (grid[x][y] === '.') {
      grid[x][y] = '#';
      direction = (direction + 1) % 4;
    } else {
      grid[x][y] = '.';
      direction = (direction + 3) % 4;
    }

    x = (x + dx[direction] + H) % H;
    y = (y + dy[direction] + W) % W;
  }

  grid.forEach(row => console.log(row.join('')));
}

main(fs.readFileSync('/dev/stdin', 'utf8'));
