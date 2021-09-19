const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
	solutionOne(input);
	solutionTwo(input);
	solutionThree(input);
	rl.close();
});

/* ВВОД */
// 'abcsefgahasdasaasdadadadadsdeagfahsgjwebgudsbnvjaksjsssdsdssddsaaaaaf';

/* ВЫВОД */
//	a 18

// -----------------------------------------------------------------------

// Задача #1
// Найти символ, который повторяется чаще всех и количество повторов
// Если таких несколько, вернуть любой из них

// Решение O(N2, квадрат) - один вложенный цикл
// Память O(N) - храним только одну строку

const solutionOne = function(input) {
	let answer = 'empty';
	let count = 0;

	for (let i = 0; i < input.length; i++) {
		let letter = input[i];
		
		let newCount = 0;
		for (let j = 0; j < input.length; j++) {
			if (letter === input[j]) {
				newCount++;
			}
		}

		if (newCount >= count) {
			count = newCount;
			answer = letter;
		}
	}

	console.log(answer, count);
	return `${answer} ${count}`;
};

// Решение O(NK)
// N - количество элекментов, K - количество уникальных букв
// При этом нужно еще отдельно собрать уникальные буквы - используем set

// Память O(N+K), O(N) - храним множество(сет) и строку

const solutionTwo = function (input) {
	const uniqueLetters = [...new Set(input)];

	let answer = 'empty';
	let count = 0;

	for (let i = 0; i < uniqueLetters.length; i++) {
		const letter = uniqueLetters[i];

		let newCount = 0;
		for (let j = 0; j < input.length; j++) {
			if (letter === input[j]) {
				newCount++;
			}

			if (newCount >= count) {
				answer = letter;
				count = newCount;
			}
		}
	}

	console.log(answer, count);
	return `${answer} ${count}`;
};

// Решение 
// Используем словарь
// Операция добавления в словарь - O(N) 
// Итерация по словарю O(K), K - количество записей в словаре
// Общая сложность O(N+K)
// Поскольку K всегда меньше N, можем сказать, что сложность O(N+K) = O(N)

// Память O(K), если саму строку получать посимвольно и не хранить

const solutionThree = function (input) {

	const map = {};
	let answer = 'empty';
	let count = 0;

	for (let i = 0; i < input.length; i++) {
		const letter = input[i];

		if (!(letter in map)) {
			map[letter] = 1;
		} else {
			map[letter] = ++map[letter];
		}

		for (let j in map) {
			if (map[j] >= count) {
				answer = j;
				count = map[j];
			}
		}

	}

	console.log(answer, count);
	return `${answer} ${count}`;
};

module.exports = {
	solutionOne,
	solutionTwo,
	solutionThree
};

