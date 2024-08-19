function main(input) {
  let lines = input.split('\n');
  let [x, y] = lines[0].trim().split(' ').map(Number);
  let result = "No"

  if (y > x && y <= x + 2) {
    result = "Yes"
  } else if (y < x && y >= x - 3) {
    result = "Yes"
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
