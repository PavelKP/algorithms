const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
	rl.close();
});



/* Линейный поиск - cпособ поиска
1. Перебираются все элементы последовательности
2. Сложность линейная O(N)
3. Обычно ищут подходящий элемент или наиболее подходящий
*/

// Задача 1
// Найти первое вхождение положительного числа Х или вернуть -1
// Пусть Х = 2 

// Пройдем по последовательности, используем проверку, 
// что x === 2 && answer === -1, чтобы записать в ответ только первое вхождение

const subsequence = [1, 2, 1, 3, 2, 6, 8];

const solutionOne = (subsequence, x) => {
	let answer = - 1;

	for (let i = 0; i < subsequence.length; i++) {
		if (subsequence[i] === x && answer === - 1) {
			answer = i;
		}
	} 

	return answer; // index
}

console.log(solutionOne(subsequence, 2));

// Задача 2
// Найти последнее - правое вхождение Х

const solutionTwo = (subsequence, x) => {
	let answer = - 1;

	for (let i = 0; i < subsequence.length; i++) {
		if (subsequence[i] === x) {
			answer = i;
		}
	} 

	return answer; // index
}

console.log(solutionTwo(subsequence, 2));

