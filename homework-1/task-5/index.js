const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const data = [];

rl.on('line', (input) => {
		if (data.length === 0) {
			data.push(parseInt(input, 10))
    } else if (data.length === 1) {
			const coords = input.split(' ').map((el) => parseInt(el, 10));
			data.push(...coords);

			resolveTask(data);
			rl.close();
		}
});

const resolveTask = function(input) {
  const [d, x, y] = input;

	let answer;

	const moduleSum = Math.abs(x) + Math.abs(y);

	if ( moduleSum <= d && x > 0 && y > 0) {
		answer = 0;
	} else {
		const distanceToA = moduleSum;
		const distanceToB = Math.abs(x - d) + Math.abs(y);
		console.log('A', distanceToA)
		console.log('B', distanceToB)

	}

	console.log(answer);
	return answer;

	// console.log(Number(res));
	// return Number(res);
};

module.exports = resolveTask;
