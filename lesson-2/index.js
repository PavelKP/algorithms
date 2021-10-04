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

let subsequence = [1, 2, 1, 3, 2, 6, 8];

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

// Задача 3
// Найти максимальное число в последовательности, последовательность не пустая

const taskThree = (subsequence) => {
	// кладем в ответ нулевой элемент последовательности
	// Заменяем на максимальный
	// случай пустой последовательности обрабатываем отдельно, если нужно
	let answer = subsequence[0];

	for (let i = 0; i < subsequence.length; i++) {
		if (subsequence[i] > answer) {
			answer = subsequence[i];
		}
	} 
	return answer; // value
}

console.log(taskThree(subsequence));

// Сравнение строк - лексикографический анализ
// одна строка с другой сравниваются посимвольно
// Большие и маленькие буквы отличаются (это разные символы)

// Решение для строк
// Решение выше будет работать и для строк, но есть проблема
// каждый раз строка копируется в перменную
// [aa, bb, cc, bbbbbbbbbbbbbbb] - строка может быть очень большой
// на питоне копирование по ссылке, на другиех языках оно может быть долгим
// Если это не строки, а объект, то может быть ещё дольше (если не по ссылке)
// Решение - запоминать не значение, а индекс 
