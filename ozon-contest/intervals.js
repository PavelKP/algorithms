function mergeIntervals(intervals) {
	let changingIntervals = intervals.slice();

	let prevLength = 0;
	let result = [];

	const doMergeStep = () => {
		let answer = [];
		for (let i = 0; i < changingIntervals.length; i++) {

			if (i === changingIntervals.length - 1) {
				answer.push(changingIntervals[i]);
				continue;
			}
			const val1 = changingIntervals[i][0];
			const val2 = changingIntervals[i][1];
			const val3 = changingIntervals[i + 1][0];
			const val4 = changingIntervals[i + 1][1];

			if (val3 <= val2) {
				answer.push([Math.min(val1, val3), Math.max(val2, val4)]);
				i++
				continue;
			}

			answer.push(changingIntervals[i]);
		}

		result = answer;
	}

	doMergeStep();
	if (result.length !== prevLength) {
		prevLength === result.length;
		changingIntervals = result;
		doMergeStep();
	}

	return result;
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
        mergeIntervals(JSON.parse(line))))
})

module.exports = mergeIntervals;
