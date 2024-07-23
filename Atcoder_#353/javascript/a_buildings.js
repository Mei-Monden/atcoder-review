function Main(input) {
  const lines = input.trim().split("\n");
  const n = parseInt(lines[0], 10);
  const heights = lines[1].split(" ").map(Number);

  const firstBuildingHeight = heights[0];
  let position = -1;

  for (let i = 1; i < n; i++) {
    if (heights[i] > firstBuildingHeight) {
      position = i + 1;
      break;
    }
  }

  console.log(position);
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
Main(input);
