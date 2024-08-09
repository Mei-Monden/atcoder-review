const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    const s_chars = input.split('');
    let result = "Yes";

    for (let i = 1; i < s_chars.length; i++) {
        if (s_chars[i - 1] === "B" && s_chars[i] === "A") {
            result = "No";
            break;
        } else if (s_chars[i - 1] === "C" && s_chars[i] !== "C") {
            result = "No";
            break;
        }
    }

    console.log(result);
    rl.close();
});
