const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (n) => {
    n = parseInt(n);
    console.log("L" + "o".repeat(n) + "n" + "g");
    rl.close();
});
