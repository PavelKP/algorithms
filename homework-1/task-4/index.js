const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});4

let inputCount = 0;

let students = 0;
let houses = [];

rl.on('line', (input) => {
	inputCount++;

	if (inputCount === 1) {
		students = parseInt(input, 0);
	}

	if (inputCount === 2) {
		houses = input.trim().split(' ');
		houses = houses.map((input) => parseInt(input, 10));

		rl.close();
		resolveTask(students, houses);
	}
});


const resolveTask = function(students, houses) {
	const center = Math.round(students / 2);

	console.log(houses[center - 1]);
	return answer;
};

module.exports = resolveTask;
