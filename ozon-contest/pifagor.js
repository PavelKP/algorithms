function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

function pascalTriangle(numRows) {
	let answer = []	

  switch (numRows) {
		case 0:
			return [1];
		case 1:
			return [1, 1];
		default:
			for (let i = 0; i <= numRows - 2;  i++) {
				const k = i + 1;
				let Ckn = factorial(numRows) / ((factorial(k) * factorial(numRows - k)));
				answer.push(Ckn);
			}
			return [1, ...answer, 1];
	}
}


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on('line', function(line) {
  console.log(
    JSON.stringify(
      pascalTriangle(JSON.parse(line))))
})
