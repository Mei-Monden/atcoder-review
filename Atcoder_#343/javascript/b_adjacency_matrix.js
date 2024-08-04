function main(input) {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10);
  const adjacencyMatrix = lines.slice(1).map(line => line.split(' ').map(Number));

  for (let i = 0; i < n; i++) {
    const connectedVertices = [];

    for (let j = 0; j < n; j++) {
      if (adjacencyMatrix[i][j] === 1) {
        connectedVertices.push(j + 1); 
      }
    }

    console.log(connectedVertices.sort((a, b) => a - b).join(' '));
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
