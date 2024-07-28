function main(input) {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10);
  const points = lines.slice(1).map(line => {
    const [x, y] = line.split(' ').map(Number);
    return { x, y };
  });

  function euclideanDistance(point1, point2) {
    return Math.sqrt((point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2);
  }

  let result = '';

  for (let i = 0; i < n; i++) {
    let maxDistance = -1;
    let maxPointIndex = -1;

    for (let j = 0; j < n; j++) {
      if (i === j) continue;

      const distance = euclideanDistance(points[i], points[j]);
      if (distance > maxDistance || (distance === maxDistance && j < maxPointIndex)) {
        maxDistance = distance;
        maxPointIndex = j;
      }
    }

    result += (maxPointIndex + 1) + '\n';
  }

  console.log(result.trim());
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
