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

	if ( moduleSum <= d && x >= 0 && y >= 0) {
		answer = 0;
	} else {
		const distance = [moduleSum, Math.abs(x - d) + Math.abs(y), Math.abs(y - d) + Math.abs(x)];

		answer = 1;
		let value = distance[0];

		for (let i = 1; i < distance.length; i++) {
			if (distance[i] < value) {
				value = distance[i];
				answer = i+1;
			}
		}
	}

	console.log(answer);
	return answer;
};

module.exports = resolveTask;
