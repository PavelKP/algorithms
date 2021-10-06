function rotateMatrix(matrix) {
	const answer = [];

	for (let i = 0; i < matrix.length; i++) {
		const reversedRow = [];

		for (let j = matrix.length - 1; j >= 0; j--) {
			reversedRow.push(matrix[j][i]);
		}
		answer.push(reversedRow);
	}
	return answer;
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
      rotateMatrix(JSON.parse(line))))
})
